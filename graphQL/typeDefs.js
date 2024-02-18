// Construct a schema, using GraphQL schema language
const {gql} = require("apollo-server-express");
const typeDefs = gql`
  type User {
    id: ID
    username: String
    email: String
    password: String
  }
  
  type Employee {
    id: ID
    first_name: String
    last_name: String
    email: String
    gender: String
    salary: Float
  }
 
  
  input UserInput {
    username: String
    email: String
    password: String
  }
  
  input EmployeeInput {
    first_name: String
    last_name: String
    email: String
    gender: String
    salary: Float
  }

  type Query {
    login(username: String, password: String): User
    getAllEmployees: [Employee]
    searchEmployeeById(id: ID): Employee
  }
  
   type Mutation {
    signup(user: UserInput): User
    addNewEmployee(employee: EmployeeInput): Employee
    updateEmployeeById(id: ID, employee: EmployeeInput): Employee
    deleteEmployeeById(id: ID): Employee
  }
`;

module.exports = {
  typeDefs
}
