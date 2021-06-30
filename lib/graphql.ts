import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://vercel.saleor.cloud/graphql/",
  cache: new InMemoryCache(),
  headers: {
    Authorization: "Bearer fZ6sMocTnNYNLyclSC6hdiihodgTpp", // DON"T DO THIS
  },
});

export default client;
