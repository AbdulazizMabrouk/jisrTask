import {RouteProp, useRoute} from '@react-navigation/native';
import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import CategoryTemp from '../../Templates/CategoryTemp/CategoryTemp';
import {RootParamList} from '../../../Utils/interfaces';

interface CategoryListProps {}
type CategoryListRouteProp = RouteProp<RootParamList, 'CategoryList'>;

const CategoryList: React.FC<CategoryListProps> = () => {
  const route = useRoute();

  const {cat} = route.params as CategoryListRouteProp['params'];

  return (
    <View style={styles.container}>
      <CategoryTemp catName={cat} />
    </View>
  );
};

export default CategoryList;

const styles = StyleSheet.create({
  container: {},
});
