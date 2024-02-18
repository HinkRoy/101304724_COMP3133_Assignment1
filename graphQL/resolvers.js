// Provide resolver functions for your schema fields
const User = require("../models/user");
const Employee = require("../models/employee");

const resolvers = {
  Query: {
    login:(root, { username, password })=>{
      return new Promise((resolve, reject)=>{
        User.findOne({ username })
          .then(user => {
            if (user) {
              user.comparePassword(password, function(err, isMatch) {
                if (err) throw err;
                if (isMatch) {
                  resolve(user)
                } else {
                  resolve(null)
                }
              });
            } else {
              resolve(null)
            }
          })
          .catch(err => reject(err))
      })
    },
    getAllEmployees:(root)=>{
      return new Promise((resolve, reject)=>{
        Employee.find()
          .then(employees => resolve(employees))
          .catch(err => reject(err))
      })
    },
    searchEmployeeById:(root, { id })=>{
      return new Promise((resolve, reject)=>{
        Employee.findById(id)
          .then(employee => resolve(employee))
          .catch(err => reject(err))
      })
    },
  },
  Mutation: {
    signup: (root, { user }) => {
      const newUser = new User(user);
      newUser.id = newUser._id;

      return new Promise((resolve, reject) => {
        newUser.save()
          .then(() => resolve(newUser))
          .catch(err => reject(err))
      })
    },
    addNewEmployee: (root, { employee }) => {
      const newEmployee = new Employee(employee);
      newEmployee.id = newEmployee._id;

      return new Promise((resolve, reject) => {
        newEmployee.save()
          .then(() => resolve(newEmployee))
          .catch(err => reject(err))
      })
    },
    updateEmployeeById: (root, { id, employee }) => {
      return new Promise((resolve, reject) => {
        Employee.findByIdAndUpdate(id, employee)
          .then(result => resolve(result))
          .catch(err => reject(err))
      })
    },
    deleteEmployeeById: (root, { id }) => {
      return new Promise((resolve, reject) => {
        Employee.findByIdAndDelete(id)
          .then(result => resolve(result))
          .catch(err => reject(err))
      })
    },
  }
};

module.exports = {
  resolvers
};
