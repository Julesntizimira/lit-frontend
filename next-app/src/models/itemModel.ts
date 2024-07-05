import mongoose from "mongoose"



const itemSchema = new mongoose.Schema({

    price: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true
    },
    seller: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User"
    },
    condition: {
        type: String,
        required: true,
        enum: [
            'New',
            'Used like new',
            'Used in good condition',
            'Refurbished'
        ]
    },
    image_url: { 
        type: [String],
        required: true
    },
    details: String,
    category:{
        type: mongoose.SchemaTypes.ObjectId,
    }
})

export const Item = mongoose.models.Item || mongoose.model("Item", itemSchema);