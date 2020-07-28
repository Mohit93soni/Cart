import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NavigatorFile from './NavigatorFile';
import {Provider} from 'react-redux'
import Store from './store/Store'

export default function App() {
  return( <Provider store={Store}> 
            <NavigatorFile/>
          </Provider>
  )}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
