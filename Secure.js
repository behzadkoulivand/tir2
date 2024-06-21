const mongoose = require('mongoose');

const didarSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "نام و نام خانوادگی الزامی می باشد"],
        trim: true,
    },
    date: {
        type: String,
    },
    time: {
        type: String,
    },
    presenter:{
        type: String
    },
    invited: {
        type: Array
    },
    description: {
        type: String,
        trim: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model("SecDidar", didarSchema);