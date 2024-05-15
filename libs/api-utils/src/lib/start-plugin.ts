import { ApolloServer } from '@apollo/server';
import { buildSubgraphSchema } from '@apollo/subgraph';
import { startStandaloneServer } from '@apollo/server/standalone';

export async function startApolloServer({
  graphql,
  port,
}: {
  graphql: any;
  port: number;
}) {
  const { typeDefs, resolvers } = await graphql();

  const apolloServer = new ApolloServer({
    schema: buildSubgraphSchema([
      {
        typeDefs,
        resolvers,
      },
    ]),
  });

  const { url } = await startStandaloneServer(apolloServer, {
    listen: { port },
  });

  console.log(`🚀  Server ready at: ${url}`);
}
