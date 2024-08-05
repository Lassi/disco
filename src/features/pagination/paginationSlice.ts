import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "app/store";

export type PaginationState = {
  page: number;
};

const initialState: PaginationState = {
  page: 1,
};

export const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
  },
});

export const { setPage } = paginationSlice.actions;

export const selectPage = (state: RootState) => state.pagination.page;

export const { reducer: paginationReducer } = paginationSlice;