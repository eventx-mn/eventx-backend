import { gql } from 'apollo-server-express';

export default gql`
  type Query {
    events: [Event!]
    event: Event!
  }

  type Event {
    id: ID!
    name: String!
  }
`;
