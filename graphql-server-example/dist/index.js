import express from 'express';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import cors from 'cors';
import bodyParser from 'body-parser';
import fs from 'fs';
import path from 'path';
// Load JSON data
const users = JSON.parse(fs.readFileSync(path.resolve('./data/user.json'), 'utf8'));
const blogs = JSON.parse(fs.readFileSync(path.resolve('./data/blog.json'), 'utf8'));
const products = JSON.parse(fs.readFileSync(path.resolve('./data/products.json'), 'utf8'));
// Define GraphQL schema
const typeDefs = `#graphql
  type User {
    id: ID!
    name: String!
    email: String!
  }

  type Blog {
    id: ID!
    title: String!
    author: User
  }

  type Product {
    id: ID!
    name: String!
    price: Float!
  }

  type Query {
    users: [User!]!
    user(id: ID!): User
    blogs: [Blog!]!
    products: [Product!]!
  }

  type Mutation {
    addUser(name: String!, email: String!): User!
  }
`;
// Define resolvers
const resolvers = {
    Query: {
        users: () => users,
        user: (_, { id }) => users.find(user => user.id === id),
        blogs: () => blogs,
        products: () => products,
    },
    Blog: {
        author: (blog) => users.find(user => user.id === blog.authorId),
    },
    Mutation: {
        addUser: (_, { name, email }) => {
            const user = { id: String(users.length + 1), name, email };
            users.push(user);
            return user;
        },
    },
};
// Start Apollo Server with Express
const startServer = async () => {
    const app = express();
    const server = new ApolloServer({ typeDefs, resolvers });
    await server.start();
    app.use('/graphql', cors(), bodyParser.json(), expressMiddleware(server));
    app.listen({ port: 4000 }, () => {
        console.log(`🚀 Server ready at http://localhost:4000/graphql`);
    });
};
startServer();
