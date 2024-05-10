import { ApolloClient, InMemoryCache } from '@apollo/client';

export  function createApolloClient() {
  return new ApolloClient({
    uri: 'http://localhost:1337/graphql', // Your GraphQL endpoint
    cache: new InMemoryCache(),
  });
}
