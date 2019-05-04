const mongoose = require("mongoose");
const validator = require("validator");

const studentSchema = mongoose.Schema({
  email: {
    type: String,
    required: false,
    trim: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email is invalid");
      }
    }
  },

  password: {
    type: String,
    required: false,
    minlength: 4
  },

  name: {
    type: String,
    required: false,
    maxlength: 100
  },

  gender: {
    type: String,
    required: false
  },

  age: {
    type: Number,
    max: 100
  }
});

const Student = mongoose.model("Student", studentSchema);

module.exports = { Student };
