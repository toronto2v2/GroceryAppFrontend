import {configureStore} from '@reduxjs/toolkit';
import {grocerySlice} from './modules/grocerySlice';
import {filterSlice} from './modules/filterSlice';

export const store = configureStore({
  reducer: {
    grocery: grocerySlice.reducer,
    filters: filterSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
