import { startPlugin } from '@eventx/api-utils';
import schemas from './schemas';
import resolvers from './resolvers';

const startServer = async () => {
  const graphql = () => {
    return { typeDefs: schemas, resolvers };
  };
  const app = await startPlugin({ graphql });

  const PORT = process.env.PORT || 3333;

  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
};

startServer();