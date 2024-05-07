import type {PayloadAction} from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit';

export enum EFilters {
  Fruits = 'fruit',
  Vegetables = 'vegetable',
}

interface FiltersState {
  filter: EFilters | null;
}

const initialState = {filter: null} as FiltersState;

export const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilter(state, action: PayloadAction<EFilters>) {
      if (state.filter === action.payload) {
        state.filter = null;
      } else {
        state.filter = action.payload;
      }
    },
  },
});

export const {setFilter} = filterSlice.actions;
