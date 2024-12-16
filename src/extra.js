import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import WebView from 'react-native-webview';

export default function Extra() {
  return (
    <View style={styles.container}>
      <WebView
        source={{uri: 'https://www.khushidigital.com/home'}}
        style={styles.webview}
      />
      {/* <Text>alskdfh;ashdf;</Text> */}
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
