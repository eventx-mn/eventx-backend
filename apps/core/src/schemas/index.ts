import { gql } from 'apollo-server-express';

export default gql`
  type Query {
    users: [User!]
    user: User!
  }

  type User {
    _id: ID!
    username: String!
    email: String!
    role: String
  }
`;
