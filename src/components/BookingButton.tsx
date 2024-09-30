import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface BookingButtonProps {
  isWatched: boolean;
  onPress: () => void;
  testID?: string; // Add this prop
}

const BookingButton: React.FC<BookingButtonProps> = ({ isWatched, onPress, testID }) => {
  return (
    <TouchableOpacity
      style={[styles.button, isWatched && styles.watchedButton]}
      onPress={onPress}
      testID={testID} // Use the testID prop
    >
      <Text style={styles.buttonText}>
        {isWatched ? 'Watched' : 'Book Now'}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
  },
  watchedButton: {
    backgroundColor: '#8E8E93',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default BookingButton;
