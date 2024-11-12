import * as React from 'react';
import {RootNavigation} from './Navigatior/customNavigationHook/Stacks/MainStack';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {store} from './store/store';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const queryClient = new QueryClient();

const App = () => {
  const navigationRef = useNavigationContainerRef(); // You can also use a regular ref with `React.useRef()`

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <NavigationContainer ref={navigationRef}>
          <RootNavigation />
        </NavigationContainer>
      </Provider>
    </QueryClientProvider>
  );
};

export default App;
