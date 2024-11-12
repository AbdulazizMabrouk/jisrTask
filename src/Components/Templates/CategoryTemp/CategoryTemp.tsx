import * as React from 'react';
import {View, StyleSheet, FlatList, ActivityIndicator} from 'react-native';
import {Categories} from '../../../Utils/interfaces';
import {useCategoryTempHelper} from './CategoryTempHelper';
import {useQuery} from '@tanstack/react-query';
import MovieCard from '../../Molecules/MovieCard/MovieCard';
import {AppText} from '../../Atoms/AppText/AppText';

interface CategoryTempProps {
  catName: Categories;
}

const CategoryTemp = ({catName}: CategoryTempProps) => {
  const {getCatMovies} = useCategoryTempHelper();

  const {data, isLoading} = useQuery({
    queryKey: ['catMovies', catName],
    queryFn: () => getCatMovies(catName),
  });

  const _renderItem = ({item}: any) => {
    return (
      <MovieCard
        key={`${JSON.stringify(item)}`}
        title={item.title}
        poster={item.posterURL}
      />
    );
  };

  if (data?.error) {
    return (
      <View style={styles.errorContainer}>
        <AppText>{data?.message}</AppText>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          renderItem={_renderItem}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
};

export default CategoryTemp;

const styles = StyleSheet.create({
  container: {},
  errorContainer: {alignItems: 'center', justifyContent: 'center'},
});
