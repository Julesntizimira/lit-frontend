import { Category } from "@/models/categoryModel";
import connect from "@/dbConfig/dbConfig";
import { NextResponse } from "next/server"; 
import { error } from "console";


connect()

export async function GET() {
    try {
        const categories = await Category.find();

        if(! categories) {
            return NextResponse.json(
                {   error: "failed to fetch categories from db" }, 
                {   status: 400 })
        }

        return NextResponse.json(categories);

    } catch (error: any) {
        return NextResponse.json(
            {error: "server failed"},
            {status: 500}
        )
    }
}