import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {screenOptions} from '@navigation/options';
import {InitializationScreen} from '@screens/Initialization/InitializationScreen';

export type InitializationStackParamList = {
  Initialization: undefined;
};

const InitializationStack =
  createNativeStackNavigator<InitializationStackParamList>();

export function InitializationNavigator() {
  return (
    <InitializationStack.Navigator>
      <InitializationStack.Screen
        name="Initialization"
        component={InitializationScreen}
        options={{
          ...screenOptions,
          navigationBarHidden: true,
          navigationBarColor: 'transparent',
        }}
      />
    </InitializationStack.Navigator>
  );
}
