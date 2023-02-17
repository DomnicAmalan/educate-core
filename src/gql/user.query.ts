// /pages/index.tsx
import { gql } from '@apollo/client';

export const getUsersQuery = gql`
  query allUsersQuery($first: Int, $after: ID, $filter: ProductFilter) {
    User(first: $first, after: $after, where: $filter) {
      pageInfo {
        endCursor
        hasNextPage
      }
      edges {
        cursor
        node {
          email
          role
        }
      }
    }
  }
`;

export const getUserQuery = gql`
  query getAUser($filter: ProductFilter) {
    User(where: $filter) {
      email
      image
      role
    }
  }
`;
