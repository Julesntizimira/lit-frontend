import mongoose from "mongoose";

const Schema = mongoose.Schema;

const categorySchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    subCategories: [
        {
            type: mongoose.Schema.ObjectId,
            ref: "SubCategory", // Reference to SubCategory
        },
    ],
    image_url: {
        type: String,
        required: true,
    },
});

export const Category = mongoose.models.Category || mongoose.model("Category", categorySchema);




const subCategorySchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    underSubCategories: [
        {
            type: mongoose.Schema.ObjectId,
            ref: "UnderSubCategory", // Reference to UnderSubCategory
        },
    ],
});

export const SubCategory = mongoose.models.SubCategory || mongoose.model("SubCategory", subCategorySchema);




const underSubCategorySchema = new Schema({
    name: {
        type: String,
        required: true,
    },
});

export const UnderSubCategory = mongoose.models.UnderSubCategory || mongoose.model("UnderSubCategory", underSubCategorySchema);
