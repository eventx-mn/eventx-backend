import express from 'express';
import { ApolloGateway } from '@apollo/gateway';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';

const app = express();

app.use(express.json({ limit: '15mb' }));
app.use(express.urlencoded({ limit: '15mb', extended: true }));

const startGateway = async () => {
  const PORT = process.env.PORT || 4000;

  const gateway = new ApolloGateway({
    serviceList: [
      {
        name: 'core',
        url: 'http://localhost:4001',
      },
      {
        name: 'event',
        url: 'http://localhost:4002',
      },
    ],
  });

  const apolloServer = new ApolloServer({
    gateway,
  });

  await apolloServer.start();

  app.use('/graphql', expressMiddleware(apolloServer));

  app.listen(PORT, () => {
    console.log(`🚀  Gateway server ready at: ${PORT}`);
  });
};

startGateway();
