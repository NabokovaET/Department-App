import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from } from '@apollo/client';

const link = from([
  new HttpLink({uri: 'http://192.168.1.92:3300/graphql'})
]);

const client = new ApolloClient ({
  link: link,
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

