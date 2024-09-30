import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { CompositeNavigationProp } from '@react-navigation/native';

export interface Movie {
  id: string;
  title: string;
  description: string;
  isWatched: boolean;
}

export type RootStackParamList = {
  Home: undefined;
  Booking: { movieId: string };
};

export type TabParamList = {
  Movies: undefined;
  Favorites: undefined;
  Bookings: undefined;
};

export type HomeScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabParamList, 'Movies'>,
  NativeStackNavigationProp<RootStackParamList>
>;

export type FavoritesScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabParamList, 'Favorites'>,
  NativeStackNavigationProp<RootStackParamList>
>;

export type BookingsScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabParamList, 'Bookings'>,
  NativeStackNavigationProp<RootStackParamList>
>;

export type BookingScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Booking'>;
