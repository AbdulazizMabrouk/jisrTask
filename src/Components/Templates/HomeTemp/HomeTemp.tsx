import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {useHomeTempHelper} from './HomeTempHelper';

interface HomeScreenTempProps {}

const HomeScreenTemp = (props: HomeScreenTempProps) => {
  const {helper} = useHomeTempHelper();
  return (
    <View style={styles.container}>
      <Text>HomeScreenTemp</Text>
    </View>
  );
};

export default HomeScreenTemp;

const styles = StyleSheet.create({
  container: {},
});
