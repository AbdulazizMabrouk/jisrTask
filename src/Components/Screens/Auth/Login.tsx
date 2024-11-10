import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import LoginTemp from '../../Templates/LoginTemp/LoginTemp';

interface LoginScreenProps {}

const LoginScreen = ({}: LoginScreenProps) => {
  return (
    <View style={styles.container}>
      <LoginTemp />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
