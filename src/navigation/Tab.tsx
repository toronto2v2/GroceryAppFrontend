import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigatorScreenParams} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '@screens/HomeScreen/HomeScreen';
import React from 'react';
import {StyleSheet, View} from 'react-native';

import {screenOptions} from './options';
import {HomeIcon} from '@assets/HomeIcon';
import {GroceryScreen} from '@screens/GroceryScreen/GroceryScreen';

export type MainTabsParamList = {
  Home: NavigatorScreenParams<HomeTabStackParamList> | undefined;
};

export type HomeTabStackParamList = {
  HomeScreen: undefined;
};

export type MainStackParamList = {
  MainTabs: NavigatorScreenParams<MainTabsParamList>;
  GroceryScreen: undefined;
};

export type MainNavigationParams = MainTabsParamList & MainStackParamList;

const Tabs = createBottomTabNavigator<MainTabsParamList>();
const MainStack = createNativeStackNavigator<MainStackParamList>();
const HomeTabStack = createNativeStackNavigator<HomeTabStackParamList>();

const HomeTabStackNavigator = () => (
  <HomeTabStack.Navigator
    screenOptions={{headerShown: false}}
    initialRouteName="HomeScreen">
    <HomeTabStack.Screen name="HomeScreen" component={HomeScreen} />
  </HomeTabStack.Navigator>
);

const MainTabs = () => {
  return (
    <View style={styles.container}>
      <Tabs.Navigator
        screenOptions={{
          headerShown: false,
          lazy: true,
        }}>
        <Tabs.Screen
          options={{tabBarIcon: ({color}) => <HomeIcon color={color} />}}
          name="Home"
          component={HomeTabStackNavigator}
        />
      </Tabs.Navigator>
    </View>
  );
};

export function MainNavigator() {
  return (
    <MainStack.Navigator screenOptions={screenOptions}>
      <MainStack.Screen name="MainTabs" component={MainTabs} />
      <MainStack.Screen name="GroceryScreen" component={GroceryScreen} />
    </MainStack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
});
