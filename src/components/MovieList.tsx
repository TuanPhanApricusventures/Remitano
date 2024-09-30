import React from 'react';
import { FlatList, StyleSheet, ListRenderItemInfo } from 'react-native';
import MovieItem from './MovieItem';
import { Movie } from '../types';

interface MovieListProps {
  movies: Movie[];
  onBookPress: (movieId: string) => void;
}

const MovieList: React.FC<MovieListProps> = ({ movies, onBookPress }) => {
  const renderItem = ({ item, index }: ListRenderItemInfo<Movie>) => (
    <MovieItem
      {...item}
      onBookPress={() => onBookPress(item.id)}
      index={index}
    />
  );

  return (
    <FlatList
      testID="movieList"
      data={movies}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      style={styles.list}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
});

export default MovieList;
