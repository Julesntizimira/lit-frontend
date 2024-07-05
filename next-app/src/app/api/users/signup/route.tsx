import connect from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server"; 
import bcryptjs from "bcryptjs";
import { sendEmail } from "@/helpers/mailer";


connect()

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const { firstname, lastname, email, phoneNumber, country, password } = reqBody;

        //check if user already exists
        const user = await User.findOne({email});
        if(user) {
            return (
                NextResponse.json({
                    error: "user already exist",
                }, {status: 400})
            )
        }

        // hash password
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);


        const newUser = await new User({
            firstname,
            lastname,
            email,
            password: hashedPassword,
            phoneNumber,
            country,
        })
        const savedUser = await newUser.save()

        //send verification email
        await sendEmail({email, emailType: "VERIFY", userId: savedUser._id})

        return  NextResponse.json({
            message: "signup successful",
            success: true // Assuming the operation was successful; adjust the value as needed
        });

    } catch (error: any) {
        return NextResponse.json(
            {error: "server failed"},
            {status: 500}
        )
    }  
}