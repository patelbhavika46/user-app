import { gql } from "@apollo/client";

export const GET_USERS = gql`
  query GetUsers {
  users {
    edges {
      node {
        id
        name
        email
        avatarUrl
      }
    }    
  }
}
`;
