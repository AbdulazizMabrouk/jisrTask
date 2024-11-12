import * as React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {useHomeTempHelper} from './HomeTempHelper';
import AppButton from '../../Atoms/AppButton/AppButton';
import {useLoginTempHelper} from '../LoginTemp/LoginTempHelper';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {MOVIES_CATEGORIES} from '../../../Utils/Constants';
import {getRandomColor} from '../../../Utils/helperFun';
import {Categories} from '../../../Utils/interfaces';

interface HomeScreenTempProps {}

const HomeScreenTemp = ({}: HomeScreenTempProps) => {
  const {handleSelectItem} = useHomeTempHelper();
  const {signOut} = useLoginTempHelper();

  const insets = useSafeAreaInsets();

  // const state = useSelector(state => state);

  // console.log({state});

  const _renderItem = ({item}: {item: Categories}) => {
    return (
      <View style={styles.button} key={item}>
        <AppButton
          title={item}
          onPress={() => handleSelectItem(item)}
          backgroundColor={getRandomColor()}
        />
      </View>
    );
  };
  return (
    <View style={[{top: insets.top}, styles.container]}>
      <AppButton
        title="signOut"
        onPress={() => {
          signOut();
        }}
      />
      <View style={{}}>
        <FlatList
          data={MOVIES_CATEGORIES}
          renderItem={_renderItem}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default HomeScreenTemp;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  button: {
    margin: 10,
    padding: 10,
    width: '100%',
  },
});
