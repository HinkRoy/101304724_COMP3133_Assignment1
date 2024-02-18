const express = require('express');
const mongoose = require('mongoose');
const { ApolloServer } = require('apollo-server-express');
const {typeDefs} = require("./graphQL/typeDefs");
const {resolvers} = require("./graphQL/resolvers");

mongoose.connect("mongodb+srv://HengZhou:zh514032259@cluster0.xinik57.mongodb.net/COMP3123_Assignment1")
  .then(() => console.log('Connected!'))
  .catch(() => console.error("Error while connecting to DB"));

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
