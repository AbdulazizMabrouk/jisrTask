import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import AppButton from '../../Atoms/AppButton/AppButton';
import {useLoginTempHelper} from './LoginTempHelper';

interface LoginTempProps {}

const LoginTemp = ({}: LoginTempProps) => {
  const {signIn} = useLoginTempHelper();
  return (
    <View style={styles.container}>
      <AppButton title="Login" onPress={signIn} />
    </View>
  );
};

export default LoginTemp;

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});
