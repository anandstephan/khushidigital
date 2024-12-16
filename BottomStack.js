import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Dimensions, Platform, StyleSheet, View} from 'react-native';
import Home from './src/Home';
import Explore from './src/Explore';
import Extra from './src/extra';
import Profile from './src/Profile';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import OnlineAlbum from './src/onlineAlbum';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          //   backgroundColor: 'rgba(0, 137, 123, 1)',
          //   elevation: 0,
          //   borderRadius: 40,
          //   borderEndStartRadius: 80,
          //   borderEndEndRadius: 80,
          //   justifyContent: 'center',
          //   alignItems: 'center',
          //   width: '95%',
          //   position: 'absolute',
          //   marginLeft: '2.5%',
          height: '6%',
        },
        tabBarShowLabel: false,
      }}
      initialRouteName="Extra">
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabelStyle: {},
          tabBarLabel: () => null,
          tabBarIcon: ({color, focused}) => (
            <View style={[styles.container]}>
              <Icon
                name={focused ? 'bag' : 'bag-outline'}
                color={'black'}
                size={25}
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{
          tabBarLabelStyle: {},
          tabBarLabel: () => null,
          tabBarIcon: ({color, focused}) => (
            <View style={[styles.container]}>
              <MaterialIcons
                name={focused ? 'photo' : 'photo-camera-back'}
                color={'black'}
                size={25}
                style={{}}
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Extra"
        component={Extra}
        options={{
          tabBarLabelStyle: {},
          tabBarLabel: () => null,
          tabBarIcon: ({color, focused}) => (
            <View
              style={[
                styles.container,
                {
                  backgroundColor: '#e75480',
                  width: '150%',
                  padding: 2,
                  borderRadius: 10,
                  height: '150%',
                  top: -Dimensions.get('window').height / 40,
                },
              ]}>
              <MaterialCommunityIcons
                name={'dots-square'}
                color={'white'}
                size={25}
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="OnlineAlbum"
        component={OnlineAlbum}
        options={{
          tabBarLabelStyle: {},
          tabBarLabel: () => null,
          tabBarIcon: ({color, focused}) => (
            <View style={[styles.container]}>
              <MaterialCommunityIcons
                name={focused ? 'safe-square' : 'safe-square-outline'}
                color={'black'}
                size={25}
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="ajs"
        component={Profile}
        options={{
          tabBarLabelStyle: {},
          tabBarLabel: () => null,
          tabBarIcon: ({color, focused}) => (
            <View style={[styles.container]}>
              <Icon
                name={focused ? 'person-circle-sharp' : 'person-circle-outline'}
                color={'black'}
                size={30}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;

const styles = StyleSheet.create({
  container: {
    width: 100,
    // height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    top: '20%',
  },
});
