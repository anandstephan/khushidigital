import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import WebView from 'react-native-webview';

export default function Profile() {
  return (
    <View style={styles.container}>
      <WebView
        source={{uri: 'https://www.khushidigital.com/login'}}
        style={styles.webview}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    // flex: 1,
  },
});
