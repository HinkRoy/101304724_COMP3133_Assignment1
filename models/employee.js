const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
  },
  gender: {
    type: String,
    enum : ['Male','Female', 'Other'],
    default: 'Male'
  },
  salary: {
    type: Number,
    required: true
  },
});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee
