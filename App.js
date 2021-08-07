import React, {useState, useEffect} from 'react';
import {Text, View, Image, ActivityIndicator, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import {IMAGE} from './src/constants/Image';
import axios from 'axios';
import {CustomHeader} from './src/CustomHeader';
import {CustomHeader2} from './src/CustomHeader2';

import {
  HomeScreen,
  HomeScreenDetail,
  NotlarScreen,
  AlarmScreen,
  AraScreen,
  AraScreenDetail,
} from './src/Screens';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const navigationOptionHandler = () => ({
  headerShown: false,
});

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={navigationOptionHandler}></Stack.Screen>
      <Stack.Screen
        name="HomeDetail"
        component={HomeScreenDetail}
        options={navigationOptionHandler}></Stack.Screen>
    </Stack.Navigator>
  );
}

function AraStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Ara"
        component={AraScreen}
        options={navigationOptionHandler}></Stack.Screen>
      <Stack.Screen
        name="AraDetail"
        component={AraScreenDetail}
        options={navigationOptionHandler}></Stack.Screen>
    </Stack.Navigator>
  );
}

function NotlarStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Notlar"
        component={NotlarScreen}
        options={navigationOptionHandler}></Stack.Screen>
    </Stack.Navigator>
  );
}

function AlarmStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Alarm"
        component={AlarmScreen}
        options={navigationOptionHandler}></Stack.Screen>
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused ? IMAGE.ICON_HOME2 : IMAGE.ICON_HOME;
            } else if (route.name === 'Notlar') {
              iconName = focused ? IMAGE.ICON_NOTE2 : IMAGE.ICON_NOTE;
            } else if (route.name === 'Alarm') {
              iconName = focused ? IMAGE.ICON_ALARM2 : IMAGE.ICON_ALARM;
            } else if (route.name === 'Ara') {
              iconName = focused ? IMAGE.ICON_SEARCH2 : IMAGE.ICON_SEARCH;
            }
            return <Image source={iconName} style={{width: 30, height: 30}} />;
          },
        })}
        tabBarOptions={{
          showLabel: false,
          activeTintColor: 'orange',
          inactiveTintColor: 'black',
          style: {height: '8%', backgroundColor: '#808080'},
        }}>
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Ara" component={AraStack} />
        <Tab.Screen name="Notlar" component={NotlarStack} />
        <Tab.Screen name="Alarm" component={AlarmStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
