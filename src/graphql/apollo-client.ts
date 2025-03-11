import { ApolloClient, InMemoryCache, ApolloProvider, gql } from "@apollo/client";

const apiUrl = process.env.REACT_APP_GRAPHQL_URI;

const client = new ApolloClient({
  uri: apiUrl, 
  cache: new InMemoryCache(),
});

export { client, gql, ApolloProvider };
