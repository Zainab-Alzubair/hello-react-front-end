import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const FETCH_GREETING = 'HELLO_WORLD/FETCH_DATA';

export const fetchGreeting = createAsyncThunk(
  FETCH_GREETING,
  async () => {
    const response = await fetch('http://127.0.0.1:1800/api/v1/greetings');
    const data = await response.json();
    return data;
  },
);

const greetingSlice = createSlice({
  name: 'greeting',
  initialState: {
    message: 'Hello World!',
  },
  reducers: {},
  extraReducers: {
    [fetchGreeting.fulfilled]: (state, action) => {
      state.message = action.payload.message;
    },
  },
});

export default greetingSlice.reducer;
