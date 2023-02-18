// /pages/index.tsx

import { gql } from '@apollo/client';

export const getAllUsersQuery = gql`
  query getAllUsersOrFilterByEmail($email: String) {
    getAllUsers(email: $email) {
      email
    }
  }
`;

export const getAQuery = gql`
  query getAUserByEmail($email: String) {
    getAUserByEmail(email: $email) {
      email
    }
  }
`;
