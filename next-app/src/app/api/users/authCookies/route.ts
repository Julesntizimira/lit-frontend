import User from "@/models/userModel"
import { NextRequest, NextResponse } from "next/server";
import connect from "@/dbConfig/dbConfig";
import { getDataFromToken } from "@/helpers/getDataFromTonen";

connect();

export async function GET(request: NextRequest) {
    try {
        const userId = await getDataFromToken(request);
        const user = await User.findOne({_id: userId})
        return NextResponse.json({
            user,
            success: true
        })

    } catch (error: any) {
        console.log(error.message);
        return NextResponse.json({error: "something goes wrong"},{status: 500})
    }
}

