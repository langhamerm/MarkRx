const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const doctorSchema = new Schema({

    name: { type: String, required: true },
    phone: { type: Number, required: true },
    email: { type: String, required: true },
    office: { type: String, required: true }

});

const Dr = mongoose.model("Dr", doctorSchema);

module.exports = Dr;