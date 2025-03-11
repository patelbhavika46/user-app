// src/apollo-client.ts
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const client = new ApolloClient({
  link: new HttpLink({
    uri: "http://localhost:8000/graphql", // Replace with your GraphQL API URL
  }),
  cache: new InMemoryCache(),
});

export { client };
