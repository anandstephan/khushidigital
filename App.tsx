import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {WebView} from 'react-native-webview';
import SplashScreen from './SplashScreen'; // Import the Splash Screen component

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <View style={styles.container}>
      {showSplash ? (
        <SplashScreen onFinish={() => setShowSplash(false)} />
      ) : (
        <WebView
          source={{uri: 'https://www.khushidigital.com/'}}
          style={styles.webview}
        />
      )}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
});
