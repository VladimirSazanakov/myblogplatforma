import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { articleApi } from '../components/Api/RtkQuery';

export const store = configureStore({
  reducer: {
    [articleApi.reducerPath]: articleApi.reducer,
  },
  middleware: (getDefaultMiddlware) => getDefaultMiddlware().concat(articleApi.middleware)
})

// const rootReducer = combineReducers({

// });

// export const setupStore = () => {
//   return configureStore({
//     reducer: rootReducer,
//   });
// };

// export type RootState = ReturnType<typeof rootReducer>;
// export type AppStore = ReturnType<typeof setupStore>;
// export type AppDispatch = AppStore['dispatch'];
