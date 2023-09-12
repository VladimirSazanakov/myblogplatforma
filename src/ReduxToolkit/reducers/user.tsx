import { createSlice } from '@reduxjs/toolkit';

import { userActions } from '../../types/types';

interface user {
  isLogin: boolean;
  isLoading: boolean;
  isError: boolean;
  userName: string;
  email: string;
  token: string;
  bio: string;
  image: string;
}

const initialState: user = {
  isLogin: false,
  isLoading: false,
  isError: false,
  userName: '',
  email: '',
  token: '',
  bio: '',
  image: '',
};

export const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    [userActions.setLogin](state, action) {
      state.isLogin = action.payload;
    },
    [userActions.setLoading](state, action) {
      state.isLoading = action.payload;
    },
    [userActions.setError](state, action) {
      state.isError = action.payload;
    },
    [userActions.setUserName](state, action) {
      state.userName = action.payload;
    },
    [userActions.setEmail](state, action) {
      state.email = action.payload;
    },
    [userActions.setToken](state, action) {
      state.token = action.payload;
    },
    [userActions.setBio](state, action) {
      state.bio = action.payload;
    },
    [userActions.setImage](state, action) {
      state.image = action.payload;
    },
    [userActions.logOut]() {
      return initialState;
      console.log('logout in state');
    },
  },
});
export const {
  SET_LOGIN,
  SET_LOADING,
  SET_ERROR,
  SET_USER_NAME,
  SET_EMAIL,
  SET_TOKEN,
  SET_BIO,
  SET_IMAGE,
  LOG_OUT,
} = user.actions;

export default user.reducer;
