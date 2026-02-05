import { configureStore } from '@reduxjs/toolkit';
import rootReducers from './reducers/rootReducer';

const store = configureStore({
  reducer: rootReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: true,
});

export default store;
