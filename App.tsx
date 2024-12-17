import React, {useState} from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {WebView} from 'react-native-webview';
import SplashScreen from './SplashScreen';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabs from './BottomStack';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <View style={styles.container}>
      {/* <Pressable style={styles.mainbtn} /> */}
      {!showSplash ? (
        <SplashScreen onFinish={() => setShowSplash(false)} />
      ) : (
        <GestureHandlerRootView style={{flex: 1}}>
          <SafeAreaProvider>
            <NavigationContainer>
              <BottomTabs />
            </NavigationContainer>
          </SafeAreaProvider>
        </GestureHandlerRootView>
      )}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  mainbtn: {
    position: 'absolute',
    width: '10%',
    backgroundColor: 'red',
    height: '5%',
    zIndex: 10,
    alignSelf: 'center',
    borderRadius: 10,
    top: '91.5%',
  },
  container: {
    flex: 1,
    // backgroundColor: 'red',
  },
  webview: {
    // flex: 1,
  },
});
