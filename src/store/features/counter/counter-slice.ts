import { createSlice } from '@reduxjs/toolkit';

export const FEATURE_NAME = 'counter';

export interface State {
  value: number;
}

const initialState: State = {
  value: 0,
};

export const slice = createSlice({
  name: FEATURE_NAME,
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, { payload }: { payload: number }) => {
      state.value += payload;
    },
  },
});

export const { actions, reducer } = slice;
