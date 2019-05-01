const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const patientSchema = new Schema({ 
  name: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, required: true },
  birthDate: { type: String, required: true},

  medications: Array,

  conditions: Array,

  allergies: Array,

  surgeries: Array,

  email: String,//{ type: String, required: true },

  phone: Number,

  address: String,

  insurance: Array

});

const Patient = mongoose.model("Patient", patientSchema);

module.exports = Patient;
