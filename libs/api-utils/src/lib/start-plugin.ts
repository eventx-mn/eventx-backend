import { ApolloServer } from '@apollo/server';
import express, { Express } from 'express';
import { buildSubgraphSchema } from '@apollo/subgraph';
import { expressMiddleware } from '@apollo/server/express4';
const app = express();

app.use(express.json({ limit: '15mb' }));
app.use(express.urlencoded({ limit: '15mb', extended: true }));

export async function startPlugin(configs: any): Promise<Express> {
  const generateApolloServer = async () => {
    const { typeDefs, resolvers } = await configs.graphql();

    return new ApolloServer({
      schema: buildSubgraphSchema([
        {
          typeDefs,
          resolvers,
        },
      ]),
    });
  };

  const apolloServer = await generateApolloServer();
  await apolloServer.start();

  app.use('/graphql', expressMiddleware(apolloServer));

  return app;
}
