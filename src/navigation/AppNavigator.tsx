import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import BookingScreen from '../screens/BookingScreen';
import FavoritesTab from '../screens/FavoritesTab';
import BookingsTab from '../screens/BookingsTab';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Booking" component={BookingScreen} />
  </Stack.Navigator>
);

const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Movies" component={HomeStack} options={{ headerShown: false }} />
    <Tab.Screen name="Favorites" component={FavoritesTab} />
    <Tab.Screen name="Bookings" component={BookingsTab} />
  </Tab.Navigator>
);

export default AppNavigator;