import mongoose from "mongoose"

const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    roll: {
        type: Number,
        required: true
    },

    branch: {
        type: String,
        required: true
    },

    domain: {
        type: String,
        required: true
    },

    role: {
        type: [String],
        required: true
    },

    archived: {
        type: Boolean,
        default: false
    },

}, {timestamps: true})

const userModel = mongoose.model("User", userSchema)

export default userModel