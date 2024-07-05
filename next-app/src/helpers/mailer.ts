import nodemailer from 'nodemailer'
import User from '@/models/userModel';
import bcryptjs from 'bcryptjs'



export const sendEmail = async({email, emailType, userId}: any) => {
    try {
        //create a hashed token
        const hashedToken =  await bcryptjs.hash(userId.toString(), 10);

        if(emailType === "VERIFY") {
            await User.findByIdAndUpdate(userId, {verifyToken: hashedToken, verifyTokenExpiry: Date.now() + 360000000}) 
        } else if (emailType === "RESET") {
            await User.findByIdAndUpdate(userId, {forgotPasswordToken: hashedToken, forgotPasswordTokenExpiry: Date.now() + 360000000}) 

        }
        const transport = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
              user: "5f7fcebedfe2ab",
              pass: "c024368d4548a0"
            }
        });

        const mailOptions = {
            from: "devjules250@gmail.com",
            to: email,
            subject: emailType === "VERIFY" ? "Verify your email" : "Reset your Password",
            html: `<p>Click <a href=${process.env.DOMAIN}/verifyemail?token=${hashedToken}>Here</a> to ${emailType === "VERIFY" ? "Verify your email" : "Reset your Password"} or copy and past the link in the brouser to verify your email ${process.env.DOMAIN}/verifyemail?token=${hashedToken}</p>`
        }
        const mailResponse = await transport.sendMail(mailOptions);
        return mailResponse;
    } catch (error: any) {
        throw new Error(error.message)
    }
}

