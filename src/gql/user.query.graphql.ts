// /pages/index.tsx
import { gql } from '@apollo/client';

export const getUsersQuery = gql`
  query {
    User {
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        cursor
        node {
          id
          email
          role
        }
      }
    }
  }
`;
