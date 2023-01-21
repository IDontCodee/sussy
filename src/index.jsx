import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./pages/app.jsx";

import { ApolloClient, InMemoryCache, ApolloProvider, ApolloLink, HttpLink } from '@apollo/client';
import apolloLogger from 'apollo-link-logger';

const DEVELOPMENT = process.env.NODE_ENV === 'development'

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: ApolloLink.from([
    (DEVELOPMENT) && apolloLogger,
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