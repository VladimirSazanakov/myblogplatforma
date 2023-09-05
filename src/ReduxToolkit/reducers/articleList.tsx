import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentPage: 1,
  totalPages: 0,
  offset: 0,
};

export const articleList = createSlice({
  name: 'articleList',
  initialState,
  reducers: {
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    setTotalPages(state, action) {
      state.totalPages = action.payload;
    },
    setOffset(state, action) {
      state.offset = action.payload;
    },
  },
});
export const { setCurrentPage, setTotalPages } = articleList.actions;

export default articleList.reducer;
