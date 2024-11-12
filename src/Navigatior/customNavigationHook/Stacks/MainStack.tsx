import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../../../Components/Screens/Home/Home';
import {SCREENS} from '../../Names/screenNames';
import LoginScreen from '../../../Components/Screens/Auth/Login';
import CategoryList from '../../../Components/Screens/CategoryList/CategoryList';

const RootStack = createNativeStackNavigator();

export const RootNavigation = () => {
  return (
    <RootStack.Navigator
      screenOptions={
        {
          // headerShown: false,
        }
      }>
      <RootStack.Screen name={SCREENS.LOGIN} component={LoginScreen} />
      <RootStack.Screen name={SCREENS.HOME} component={HomeScreen} />
      <RootStack.Screen name={SCREENS.CATEGORY_LIST} component={CategoryList} />
    </RootStack.Navigator>
  );
};
