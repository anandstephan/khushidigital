import React, {useEffect} from 'react';
import {StyleSheet, View, Image, Dimensions} from 'react-native';

const SplashScreen = ({onFinish}) => {
  useEffect(() => {
    // Simulate a delay (e.g., 3 seconds for splash)
    const timer = setTimeout(() => {
      onFinish(); // Notify the parent to proceed
    }, 1000);

    return () => clearTimeout(timer); // Cleanup
  }, [onFinish]);

  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/khushi.png')} // Update path as per your project
        style={{width: '100%', height: '103%'}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF', // Splash background color
  },
  logo: {
    // marginHorizontal: 20,
    // width: 100, // Adjust width and height as per your logo
    // height: 100,
    // borderWidth: 2,
  },
});

export default SplashScreen;
