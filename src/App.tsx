import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {RootNavigation} from './Navigatior/customNavigationHook/Stacks/MainStack';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {store} from './store/store';

interface AppProps {}

const App = (props: AppProps) => {
  const navigationRef = useNavigationContainerRef(); // You can also use a regular ref with `React.useRef()`

  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        <RootNavigation />
      </NavigationContainer>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {},
});
