import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { RootState } from '../redux/store';
import MovieList from '../components/MovieList';
import { HomeScreenNavigationProp, Movie } from '../types';

const HomeScreen = () => {
  const movies = useSelector((state: RootState) => state.movies.list);
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const handleBookPress = (movieId: string) => {
    navigation.navigate('Booking', { movieId });
  };

  return (
    <View style={styles.container} testID="homeScreen">
      <MovieList movies={movies} onBookPress={handleBookPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default HomeScreen;