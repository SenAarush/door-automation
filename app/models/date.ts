import mongoose from "mongoose";

const dateSchema = new mongoose.Schema({
    
    date: {
        type: String,
        required: true
    },

    roll: {
        type: Number,
        required: true,
        ref: 'User'
    },

    loginTime: {
        type: Date,
        required: true
    },

    logoutTime: {
        type: Date,
        required: true
    }

})

const dateModel = mongoose.model('Date', dateSchema)

export default dateModel