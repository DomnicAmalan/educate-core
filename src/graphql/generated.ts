import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  getAUserByEmail: User;
  getAllUsers: Array<User>;
  ok: Scalars['Boolean'];
};

export type QueryGetAUserByEmailArgs = {
  email?: InputMaybe<Scalars['String']>;
};

export type QueryGetAllUsersArgs = {
  email?: InputMaybe<Scalars['String']>;
};

export enum Role {
  Admin = 'ADMIN',
  User = 'USER',
}

export type User = {
  __typename?: 'User';
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  image?: Maybe<Scalars['String']>;
  role: Role;
};

export type GetAllUsersOrFilterByEmailQueryVariables = Exact<{
  email?: InputMaybe<Scalars['String']>;
}>;

export type GetAllUsersOrFilterByEmailQuery = {
  __typename?: 'Query';
  getAllUsers: Array<{ __typename?: 'User'; email?: string | null }>;
};

export type GetAUserByEmailQueryVariables = Exact<{
  email?: InputMaybe<Scalars['String']>;
}>;

export type GetAUserByEmailQuery = {
  __typename?: 'Query';
  getAUserByEmail: { __typename?: 'User'; email?: string | null };
};

export const GetAllUsersOrFilterByEmailDocument = {
  definitions: [
    {
      kind: 'OperationDefinition',
      name: { kind: 'Name', value: 'getAllUsersOrFilterByEmail' },
      operation: 'query',
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'email' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'email' },
                },
              },
            ],
            kind: 'Field',
            name: { kind: 'Name', value: 'getAllUsers' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'email' } },
              ],
            },
          },
        ],
      },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'email' },
          },
        },
      ],
    },
  ],
  kind: 'Document',
} as unknown as DocumentNode<
  GetAllUsersOrFilterByEmailQuery,
  GetAllUsersOrFilterByEmailQueryVariables
>;
export const GetAUserByEmailDocument = {
  definitions: [
    {
      kind: 'OperationDefinition',
      name: { kind: 'Name', value: 'getAUserByEmail' },
      operation: 'query',
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'email' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'email' },
                },
              },
            ],
            kind: 'Field',
            name: { kind: 'Name', value: 'getAUserByEmail' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'email' } },
              ],
            },
          },
        ],
      },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'email' },
          },
        },
      ],
    },
  ],
  kind: 'Document',
} as unknown as DocumentNode<
  GetAUserByEmailQuery,
  GetAUserByEmailQueryVariables
>;
