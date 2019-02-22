import React from 'react';
import { WebView } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <WebView
        source={{ uri: 'http://192.168.15.51:3000' }}
        style={{ marginTop: 20 }}
      />
    );
  }
}
