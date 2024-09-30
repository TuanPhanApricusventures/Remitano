import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { generateMovies } from '../../utils/generateMovies';

interface Movie {
  id: string;
  title: string;
  description: string;
  isWatched: boolean;
}

interface MoviesState {
  list: Movie[];
}

const initialState: MoviesState = {
  list: generateMovies(1000),
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setWatched: (state, action: PayloadAction<string>) => {
      const movie = state.list.find(m => m.id === action.payload);
      if (movie) {
        movie.isWatched = true;
      }
    },
  },
});

export const { setWatched } = moviesSlice.actions;
export default moviesSlice.reducer;
