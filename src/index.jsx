import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./pages/app.jsx";

import { ApolloClient, InMemoryCache, ApolloProvider, ApolloLink, HttpLink } from '@apollo/client';
import apolloLogger from 'apollo-link-logger';

const links = [
  new HttpLink({
    uri: '/graphql'
  })
];

if(process.env.NODE_ENV === 'development') links.unshift(apolloLogger);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: ApolloLink.from(links)
});

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ApolloProvider client={client}>
    <BrowserRouter basename="">
      <App />
    </BrowserRouter>
  </ApolloProvider>
);