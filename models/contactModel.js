const mongoose = require('mongoose')

const contactSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name cannot be empty"]
    },
    email: {
        type: String,
        required: [true, "Email cannot be empty"]
    },
    phone: {
        type: String,
        required: [true, "Phone cannot be empty"]
    },
},
    {
        timestamps: true
    }

)

module.exports = mongoose.model('Contact', contactSchema)