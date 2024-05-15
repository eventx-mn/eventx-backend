import { startApolloServer } from '@eventx/api-utils';
import schemas from './schemas';
import resolvers from './resolvers';

const graphql = () => {
  return { typeDefs: schemas, resolvers };
};

const { PORT } = process.env;

const port = PORT ? parseInt(PORT) : 4001;

startApolloServer({ graphql, port });
