import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

import Routes from './Routes';

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  request: operation => {
    operation.setContext({
      headers: {
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDdmNmU1OWVmMDY0OWMzNDQ2ZTkxNGMiLCJuYW1lIjoiZ2JvbGFoYW4gb2xhd3V5aSIsImVtYWlsIjoiaDFiMjAyMEB1c2EuY29tIiwiaWF0IjoxNTcwOTc0MDg1LCJleHAiOjE1NzEwNjA0ODV9.M46e3fNAwJvTXg6WEjgld-6Sq0UGuIyYp0txySRMZmM"
      }
    })
  }
});

class App extends Component {

  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <Routes></Routes>
        </Router>
      </ApolloProvider>
     );
  }
}

export default App;