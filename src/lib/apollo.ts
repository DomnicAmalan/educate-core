// /lib/apollo.ts
import { ApolloClient, InMemoryCache } from '@apollo/client';

const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  uri: '/api/graphql',
});

export default apolloClient;
