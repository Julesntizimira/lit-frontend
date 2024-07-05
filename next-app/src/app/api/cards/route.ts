import { Item } from "@/models/itemModel"; 
import connect from "@/dbConfig/dbConfig";
import { NextResponse } from "next/server"; 



connect()

export async function GET() {
    try {
        const items = await Item.find();

        if(! items) {
            return NextResponse.json(
                {   error: "failed to fetch items from db" }, 
                {   status: 400 })
        }

        return NextResponse.json(items);

    } catch (error: any) {
        return NextResponse.json(
            {error: "server failed"},
            {status: 500}
        )
    }
}


