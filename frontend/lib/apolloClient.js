import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const client = new ApolloClient({
  link: new HttpLink({
    uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT || "http://localhost:1337/graphql",
    credentials: "same-origin",
  }),
  cache: new InMemoryCache(),
});

export default client;
