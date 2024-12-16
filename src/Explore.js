import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import WebView from 'react-native-webview';

export default function Explore() {
  return (
    <View style={styles.container}>
      <WebView
        source={{uri: 'https://album.khushidigital.com/'}}
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
