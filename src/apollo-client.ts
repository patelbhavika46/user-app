import { ApolloClient, InMemoryCache, ApolloProvider, gql } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://localhost:8000/api/graphql", // Replace with the actual GraphQL API URL
  cache: new InMemoryCache(),
});

export { client, gql, ApolloProvider };
