import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: `${process.env.REACT_APP_PUBLIC_WORDPRESS_API_URL}`,
  cache: new InMemoryCache(),
});
