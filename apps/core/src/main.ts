import { startApolloServer } from '@eventx/api-utils';
import schemas from './schemas';
import resolvers from './resolvers';
import { connect } from '@mongodb';

const graphql = () => {
  return { typeDefs: schemas, resolvers };
};

const { PORT } = process.env;

const port = PORT ? parseInt(PORT) : 4001;

connect('mongodb://127.0.0.1:27017/eventx');

startApolloServer({ graphql, port });
