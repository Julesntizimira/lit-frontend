import User from "@/models/userModel"
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken"
import connect from "@/dbConfig/dbConfig";


connect()

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const {email, password} = reqBody;

        console.log(reqBody)

        //check if the user exist
        const user = await User.findOne({email});
        if(!user) {
            return (
                NextResponse.json({
                    type: "email"
                }, {status: 400})
            )
        }

        //check if the password is correct
        const validPassword = await bcryptjs.compare(password, user.password);

        if(!validPassword) {
            return NextResponse.json({type: "password"}, {status: 400})
        }
     
        //create token
        const tokenData = {
            id: user._id,
            email: user.email
        }
        const token = await jwt.sign(tokenData, process.env.TOKEN_PASSWORD!, {expiresIn: "1d"});

        const response = NextResponse.json(
            {
                message: "login successfull",
                success: true
            }
        )
        response.cookies.set("token", token, {httpOnly: true})
        return response;
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}