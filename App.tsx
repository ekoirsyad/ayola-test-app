/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {palette} from './src/styles/palette';
import Nav from './src';

function App(): React.JSX.Element {
  const backgroundStyle = {
    backgroundColor: palette.background,
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Nav />
    </SafeAreaView>
  );
}

export default App;
