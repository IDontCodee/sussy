import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./pages/app.js";

import { ApolloClient, InMemoryCache, ApolloProvider, ApolloLink, HttpLink } from '@apollo/client';
import apolloLogger from 'apollo-link-logger';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: ApolloLink.from([
    apolloLogger,
    new HttpLink({
      uri: '/graphql'
    })
  ])
});

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ApolloProvider client={client}>
    <BrowserRouter basename="">
      <App />
    </BrowserRouter>
  </ApolloProvider>
);