import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const apolloHttpLink = createHttpLink({
  uri: process.env.REACT_APP_START_WAR_ENDPOINT,
});

const apolloAuthContext = setContext(async (_, { headers }) => {
  return {
    headers: {
      ...headers,
      'X-Parse-Application-Id': process.env.REACT_APP_PARSE_APP_ID,
      'x-parse-master-key': process.env.REACT_APP_PARSE_KEY,
    },
  };
});

const client = new ApolloClient({
  link: apolloAuthContext.concat(apolloHttpLink),
  cache: new InMemoryCache(),
});

export default client;
