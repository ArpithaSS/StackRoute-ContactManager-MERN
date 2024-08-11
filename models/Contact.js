const mongoose = require("mongoose");
const contactSchema = new mongoose.Schema({
  fname:{
    type: String,
    required: true
  },
  lname: {
    type: String,
    required: true
  }, 
  email: {
    type: String,
    required: true,
    unique: true
    
  },
  city: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Contact", contactSchema, "Contacts");