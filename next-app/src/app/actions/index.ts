"use server";


import { auth, signIn, signOut } from "@/auth"
import { Session } from "next-auth";
import { redirect } from "next/navigation";

export async function doSocialLogin(formData: any) {
    const action = formData.get("action");
    await signIn(action, {redirectTo: "/"} );
}

export async function doCredentialLogin(formData: FormData) {
    try {
        const response = await signIn("credentials", {
            redirect: false,
            email: formData.get("email"),
            password: formData.get("password"),
        });
        return response;
    } catch (error: any) {
        return ({error: error.message});
    }
}

export async function doLogout() {
    try {
        await signOut({redirectTo: "/login"});
    } catch (error) {
        console.log(error);
    }
}


export async function doGetSession() {
    const session = await auth();
    if(!session) {
        return null;
    }
    const user = session.user;
    return user;
}