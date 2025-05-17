import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import fs from 'fs';
import path from 'path';

// Load JSON data
const users = JSON.parse(fs.readFileSync(path.resolve('./data/user.json'), 'utf8'));
const blogs = JSON.parse(fs.readFileSync(path.resolve('./data/blog.json'), 'utf8'));
const products = JSON.parse(fs.readFileSync(path.resolve('./data/products.json'), 'utf8'));

// Define GraphQL schema with types for User, Blog, Product and Queries
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
`;

// Resolvers to fetch data from JSON arrays
const resolvers = {
  Query: {
    users: () => users,
    user: (_, { id }) => users.find(user => user.id === id),
    blogs: () => blogs,
    products: () => products,
  },
  Blog: {
    // Resolve the 'author' field of a blog by looking up user by authorId
    author: (blog) => users.find(user => user.id === blog.authorId),
  },
};

// Create Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Start server
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀 Server ready at ${url}`);
