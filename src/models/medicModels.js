const mongoose = require("mongoose")

const medicSchema = mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        default: mongoose.Types.ObjectId
    },

    name: {
        type: String,
        required: true,
        unique: true
    },

    specialty: {
        type: String,
        required: true
    },

    attend_type: {
        type: String,
        required: true
    },

    healt_unit: {
        type: String,
        required: true
    },

    surgery: {
        type: Boolean,
        required: true
    },

    contact:  {
        type: Number,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    city: {
        type: String,
        required: true
    },

    state:{
        type: String,
        required: true
    },
}, {timestamps: true})

const Model = mongoose.model('medics', medicSchema)

module.exports = Model
