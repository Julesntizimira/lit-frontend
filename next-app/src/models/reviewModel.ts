import mongoose from "mongoose"

const reviewSchema = new mongoose.Schema({
    user: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User",
        required: true
    },
    item: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Item",
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    comment: {
        type: String,
        required: true
    }
})

export const Review = mongoose.models.Review || mongoose.model("Review", reviewSchema);
