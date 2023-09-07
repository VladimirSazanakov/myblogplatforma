import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { articleApi } from '../components/Api/RtkQuery';
import user from './reducers/user';

import articleList from './reducers/articleList';

const rootReducer = combineReducers({
  [articleApi.reducerPath]: articleApi.reducer,
  articleList: articleList,
  user: user,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddlware) =>
      getDefaultMiddlware().concat(articleApi.middleware),
  });
};

// const rootReducer = combineReducers({

// });

// export const setupStore = () => {
//   return configureStore({
//     reducer: rootReducer,
//   });
// };

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
