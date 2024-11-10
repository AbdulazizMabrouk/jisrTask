import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {RootNavigation} from './Navigatior/customNavigationHook/Stacks/MainStack';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';

interface AppProps {}

const App = (props: AppProps) => {
  const navigationRef = useNavigationContainerRef(); // You can also use a regular ref with `React.useRef()`

  return (
    <NavigationContainer ref={navigationRef}>
      <RootNavigation />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {},
});
