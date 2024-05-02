import { createSlice } from '@reduxjs/toolkit';

export const FEATURE_NAME = 'auth';

export interface State {
  authState: boolean;
  username: string | null;
}

const initialState: State = {
  authState: false,
  username: null,
};

const slice = createSlice({
  name: FEATURE_NAME,
  initialState,
  reducers: {
    setAuthState: (state, { payload }: { payload: boolean }) => {
      state.authState = payload;
    },
  },
});

export const { actions, reducer } = slice;
