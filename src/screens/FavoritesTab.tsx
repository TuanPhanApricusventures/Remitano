import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { RootState } from '../redux/store';
import MovieList from '../components/MovieList';
import { FavoritesScreenNavigationProp, Movie } from '../types';

const FavoritesTab = () => {
  const favorites = useSelector((state: RootState) => state.favorites.list);
  const movies = useSelector((state: RootState) => state.movies.list);
  const navigation = useNavigation<FavoritesScreenNavigationProp>();

  const favoriteMovies = movies.filter((movie: Movie) => favorites.includes(movie.id));

  const handleBookPress = (movieId: string) => {
    navigation.navigate('Booking', { movieId });
  };

  return (
    <View style={styles.container} testID="favoritesTab">
      <MovieList movies={favoriteMovies} onBookPress={handleBookPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default FavoritesTab;