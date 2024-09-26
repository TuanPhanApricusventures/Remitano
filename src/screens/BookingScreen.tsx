import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { addBooking } from '../redux/slices/bookingsSlice';
import { setWatched } from '../redux/slices/moviesSlice';
import { RouteProp, useRoute, useNavigation } from '@react-navigation/native';
import { RootStackParamList, BookingScreenNavigationProp, Movie } from '../types';

type BookingScreenRouteProp = RouteProp<RootStackParamList, 'Booking'>;

const BookingScreen = () => {
  const route = useRoute<BookingScreenRouteProp>();
  const { movieId } = route.params;
  const dispatch = useDispatch();
  const navigation = useNavigation<BookingScreenNavigationProp>();

  const movie = useSelector((state: RootState) =>
    state.movies.list.find((m: Movie) => m.id === movieId)
  );

  const handleBooking = () => {
    if (movie) {
      dispatch(addBooking(movie.id));
      dispatch(setWatched(movie.id));
      navigation.goBack();
    }
  };

  if (!movie) {
    return <Text>Movie not found</Text>;
  }

  return (
    <View style={styles.container} testID="bookingScreen">
      <Image source={require('../images/image.jpg')} style={styles.cover} testID="movieCover" />
      <Text style={styles.title} testID="movieTitle">{movie.title}</Text>
      <Text style={styles.description} testID="movieDescription">{movie.description}</Text>
      <TouchableOpacity style={styles.bookButton} onPress={handleBooking} testID="bookingButton">
        <Text style={styles.bookButtonText}>Booking</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  cover: {
    width: '100%',
    height: 400,
    resizeMode: 'contain',
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    marginBottom: 16,
  },
  bookButton: {
    backgroundColor: '#007AFF',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  bookButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default BookingScreen;