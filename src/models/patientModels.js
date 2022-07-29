const mongoose = require('mongoose')

const PatientSchema = mongoose.Schema({
    _id: {
     type: mongoose.Schema.Types.ObjectId,
     default: mongoose.Types.ObjectId
    },

    name: {
     type: String,
     required: true
    },

    birth_date: {
     type: String,
     required: true
    },

    address: {
     type: String,
     required: true
    },

    city: {
     type: String,
     required: true
    },

    state: {
     type: String,
     required: true
    },
    
    contact: {
     type: String,
     required: true
    },

    email: {
     type: String,
     required: true
    },

    medical_plan: {
     type: Boolean,
     required: true
    },
    
    name_plan:{
    type: String,
    required: true
    }
    
}, {timestamps: true})

    const Model = mongoose.model('patient', PatientSchema)
   
    module.exports = Model