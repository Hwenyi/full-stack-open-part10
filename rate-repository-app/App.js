import { StatusBar } from 'expo-status-bar';
import { NativeRouter } from 'react-router-native';
import React from 'react';
import { ApolloProvider } from '@apollo/client';

import Main from './src/components/Main';
import createApolloClient from './utils/apolloClient';

import Contants from 'expo-constants';

const apolloClient = createApolloClient();

const App = () => {

  console.log(Contants.manifest);

  return (
    <>
      <NativeRouter>
        <ApolloProvider client={apolloClient}>
          <Main />
        </ApolloProvider>
      </NativeRouter>
      <StatusBar style="auto" />
    </>
  );
};

export default App;