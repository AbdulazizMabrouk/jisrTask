import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../../../Components/Screens/Home/Home';
import {SCREENS} from '../../Names/screenNames';
import LoginScreen from '../../../Components/Screens/Auth/Login';

const RootStack = createNativeStackNavigator();

export const RootNavigation = () => {
  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <RootStack.Screen name={SCREENS.LOGIN} component={LoginScreen} />
      <RootStack.Screen name={SCREENS.HOME} component={HomeScreen} />
    </RootStack.Navigator>
  );
};
