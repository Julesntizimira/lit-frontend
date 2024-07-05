import NextAuth, { CredentialsSignin } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import Github from 'next-auth/providers/github'
import bcryptjs from 'bcryptjs'
import User from '@/models/userModel'
import connect from '@/dbConfig/dbConfig'


connect();

export const { handlers, signIn, signOut, auth } = 
NextAuth({
    secret: process.env.JWT_SECRET,
    session: {
        jwt: true
    },
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: {label: "Email", type: "email"},
                password: {label: "Password", type: "password"}
            },
            async authorize(credentials) {
                console.log('started authorize');
                if (!credentials) {
                  throw new Error('No credentials provided');
                }
                const user = await User.findOne({ email: credentials.email });
                if (!user) {
                  throw new CredentialsSignin('user not found');
                }
                const isValid = await bcryptjs.compare(credentials.password, user.password);
                if (!isValid) {
                  throw new CredentialsSignin('invalid password');
                }
                console.log('Authorize success:');
                return user // Return user data for the session
            }
        }),
        Github({
          clientId: process.env.GITHUB_CLIENT_ID,
          clientSecret: process.env.GITHUB_CLIENT_SECRET
        })
    ],
    pages: {
      signIn: "/login",
    },
    callbacks: {
      async session({ session, token }) {
          if (token?.sub && token?.role && token?.email) {
              session.user.id = token.sub;
              session.user.role = token.role;
              session.user.email = token.email;
              session.user.firstname = token.firstname;
              session.user.lastname = token.lastname;
          }
          return session;
      },
      async jwt({ token, user }) {
          if (user) {
              token.role = user.role;
              token.firstname = user.firstname;
              token.lastname = user.lastname;
              token.email = user.email;
          }
          return token;
      },
      async signIn({ user, account }) {
          if (account?.provider === 'google' || account?.provider === 'github') {
              try {
                  const { email, name, image, id } = user;
                  const alreadyUser = await User.findOne({ email });
                  if (!alreadyUser) {
                      await User.create({
                          name,
                          email,
                          image,
                          role: 'user',
                          authProviderId: id
                      });
                  }
                  return true;
              } catch (error: any) {
                  console.error('Sign in error:', error);
                  return false;
              }
          }
          if (account?.provider === 'credentials') {
              return true;
          } else {
              return false;
          }
      }
    }
})