import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {useHomeTempHelper} from './HomeTempHelper';
import AppButton from '../../Atoms/AppButton/AppButton';
import {useLoginTempHelper} from '../LoginTemp/LoginTempHelper';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface HomeScreenTempProps {}

const HomeScreenTemp = (props: HomeScreenTempProps) => {
  const {getAppMovies} = useHomeTempHelper();
  const {signOut} = useLoginTempHelper();
  const insets = useSafeAreaInsets();
  return (
    <View style={[{top: insets.top}, styles.container]}>
      <AppButton
        title="signOut"
        onPress={() => {
          signOut();
        }}
      />
    </View>
  );
};

export default HomeScreenTemp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
  },
});
