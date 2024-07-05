import { Category, SubCategory } from "@/models/categoryModel";
import { Item } from "@/models/itemModel";
import connect from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server"; 
import { categories , navItems, cards } from "@/components/revise";

connect()

export async function GET() {
    try {
        cards.forEach(async (card: any) => {
            const newItem = await new Item({
                price: card.price,
                name: card.name,
                condition: card.condition,
                image_url: card.image_url,
                details: card.details,
                category: card.category
            })
            await newItem.save();
        })

        // navItems.forEach(async (category: any) => {
        //     console.log("starting to populate");
        //     const newCat = await new Category({
        //         name: category.category,
        //         image_url: category.image_url,
        //     })
        //     newCat.subCategories = [];
        //     await newCat.save();
            

        //     for (let sub of category.subCategories) {
        //         const newSub = await new SubCategory({
        //             name: sub,
        //         })
        //         await newSub.save()
        //         newCat.subCategories.push(newSub._id);
        //     }
        //     await newCat.save()

        // })
        
         

        // if(!newCat) {
        //     return (
        //         NextResponse.json({
        //             error: "failed to add"
        //         }, {status: 400})
        //     )
        // }
        return NextResponse.json({
            message: "populate successful",
            success: true // Assuming the operation was successful; adjust the value as needed
        });
        
    } catch (error: any) {
        return NextResponse.json(
            {error: "failed"},{status: 500}
        )
    }
}
