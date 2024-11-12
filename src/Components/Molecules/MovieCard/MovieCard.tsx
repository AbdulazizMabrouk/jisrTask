import * as React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {AppText} from '../../Atoms/AppText/AppText';

interface MovieCardProps {
  title: string;
  poster: string;
}

const MovieCard = ({title, poster}: MovieCardProps) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: poster}} style={styles.poster} />
      <View style={styles.title}>
        <AppText>{title}</AppText>
      </View>
    </View>
  );
};

export default MovieCard;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 12,
    backgroundColor: 'white',
    borderRadius: 10,
    marginVertical: 12,
  },
  title: {
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  poster: {
    width: '100%',
    height: 150,
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
  },
});
