import { combineReducers } from '@reduxjs/toolkit';
import moviesReducer from './slices/moviesSlice';
import favoritesReducer from './slices/favoritesSlice';
import bookingsReducer from './slices/bookingsSlice';

const rootReducer = combineReducers({
  movies: moviesReducer,
  favorites: favoritesReducer,
  bookings: bookingsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;