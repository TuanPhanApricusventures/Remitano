import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface BookingsState {
  list: string[];
}

const initialState: BookingsState = {
  list: [],
};

const bookingsSlice = createSlice({
  name: 'bookings',
  initialState,
  reducers: {
    addBooking: (state, action: PayloadAction<string>) => {
      if (!state.list.includes(action.payload)) {
        state.list.push(action.payload);
      }
    },
    removeBooking: (state, action: PayloadAction<string>) => {
      state.list = state.list.filter(id => id !== action.payload);
    },
  },
});

export const { addBooking, removeBooking } = bookingsSlice.actions;
export default bookingsSlice.reducer;