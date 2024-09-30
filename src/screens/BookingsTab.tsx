import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { RootState } from '../redux/store';
import MovieList from '../components/MovieList';
import { BookingsScreenNavigationProp, Movie } from '../types';

const BookingsTab = () => {
  const bookings = useSelector((state: RootState) => state.bookings.list);
  const movies = useSelector((state: RootState) => state.movies.list);
  const navigation = useNavigation<BookingsScreenNavigationProp>();

  const bookedMovies = movies.filter((movie: Movie) => bookings.includes(movie.id));

  const handleBookPress = (movieId: string) => {
    navigation.navigate('Booking', { movieId });
  };

  return (
    <View style={styles.container} testID="bookingsTab">
      <MovieList movies={bookedMovies} onBookPress={handleBookPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default BookingsTab;
