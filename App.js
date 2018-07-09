import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { Provider } from 'react-redux';

import store from './store';
import Landing from './components/landing'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
          <Landing />
      </Provider>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
