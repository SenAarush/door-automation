import mongoose from "mongoose";

const attendanceSchema = new mongoose.Schema({

    date: {
        type: Date,
        required: true
    },

    roll: {
        type: Number,
        required: true,
        ref: 'User'
    },

    stillInRoom: {
        type: Boolean,
        default: false,
        required: true
    },

    loginTime: {
        type: Date,
        required: true
    },

    logoutTime: {
        type: Date,
    },

}, { timestamps: true })

const attendanceModel = mongoose.models.Attendance || mongoose.model('Attendance', attendanceSchema)

export default attendanceModel;
