import mongoose from "mongoose"


const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ["seller", "user"],
        default: "user",
    },
    address: {
        type: String,
    },
    phoneNumber: {
        type: String,
    },
    image_url: {
        type: String,
        default: "images/profilePic/unknown.png",
    },
    authProviderId: {
        type: String,
    },
    cart: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Item",
        },
    ],
    orders: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Order",
        },
    ],
    wishlist: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Item",
        },
    ],
    reviews: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Review",
        },
    ],
    isVerified: {  
        type: Boolean,
        default: false,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },  
    resetPasswordToken: String,
    resetPasswordExpire: Date,
});

const User = mongoose.models?.User || mongoose.model("User", userSchema);

export default User;
