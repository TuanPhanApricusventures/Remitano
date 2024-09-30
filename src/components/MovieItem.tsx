import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { addFavorite, removeFavorite } from '../redux/slices/favoritesSlice';
import BookingButton from './BookingButton';

interface MovieItemProps {
  id: string;
  title: string;
  description: string;
  isWatched: boolean;
  onBookPress: () => void;
  index: number; // Add this prop for unique testID
}

const MovieItem: React.FC<MovieItemProps> = ({
  id,
  title,
  description,
  isWatched,
  onBookPress,
  index,
}) => {
  const dispatch = useDispatch();
  const isFavorite = useSelector((state: RootState) =>
    state.favorites.list.includes(id)
  );

  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(id));
    } else {
      dispatch(addFavorite(id));
    }
  };

  return (
    <View style={styles.container} testID={`movieItem${index}`}>
      <Image source={require('../images/image.jpg')} style={styles.image} testID={`movieImage${index}`} />
      <View style={styles.content}>
        <Text style={styles.title} testID={`movieTitle${index}`}>{title}</Text>
        <Text style={styles.description} numberOfLines={2} testID={`movieDescription${index}`}>
          {description}
        </Text>
        <View style={styles.buttonContainer}>
          <BookingButton
            isWatched={isWatched}
            onPress={onBookPress}
            testID={`bookingButton${index}`}
          />
          <TouchableOpacity onPress={toggleFavorite} style={styles.favoriteButton} testID={`favoriteButton${index}`}>
            <Text style={[styles.favoriteButtonText, isFavorite && styles.favoriteButtonTextActive]}>
              {isFavorite ? 'Favorite' : 'Add to favorite'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginRight: 10,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    marginBottom: 10,
  },
  buttonContainer: {
    marginTop: 'auto',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  favoriteButton: {
    padding: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007AFF',
    justifyContent: 'center',
  },
  favoriteButtonText: {
    textAlign: 'center',
    color: '#007AFF',
  },
  favoriteButtonTextActive: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default MovieItem;
