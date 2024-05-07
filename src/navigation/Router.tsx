import React from 'react';
import {useCallback} from 'react';
import {screenOptions} from './options';
import {
  NavigationContainer,
  NavigatorScreenParams,
  createNavigationContainerRef,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  InitializationNavigator,
  InitializationStackParamList,
} from '@navigation/Initialization';
import {MainNavigator, MainStackParamList} from './Tab';
import {useAuth} from '@hooks/useAuth';

export type RootRouterParamList = {
  InitializationNavigator: NavigatorScreenParams<InitializationStackParamList>;
  MainStack: NavigatorScreenParams<MainStackParamList>;
};

export const navigationRef =
  createNavigationContainerRef<RootRouterParamList>();

type NavigationParams = Parameters<typeof navigationRef.navigate>;

export function navigate(...params: NavigationParams) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(...params);
  }
}

const RootRouterStack = createNativeStackNavigator<
  RootRouterParamList & MainStackParamList
>();

export function RootRouter() {
  useAuth();

  const onReady = useCallback(() => {
    console.log('READY NAVIGATION');
  }, []);

  return (
    <NavigationContainer onReady={onReady} ref={navigationRef}>
      <RootRouterStack.Navigator>
        <RootRouterStack.Screen
          name="InitializationNavigator"
          component={InitializationNavigator}
          options={{
            ...screenOptions,
            navigationBarHidden: true,
            navigationBarColor: 'transparent',
          }}
        />
        <RootRouterStack.Screen
          name="MainStack"
          component={MainNavigator}
          options={screenOptions}
        />
      </RootRouterStack.Navigator>
    </NavigationContainer>
  );
}
