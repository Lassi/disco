import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { paginationReducer } from 'features/pagination/paginationSlice';
import { artic } from 'services/artic/artic';

export const store = configureStore({
  reducer: {
    [artic.reducerPath]: artic.reducer,
    pagination: paginationReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(artic.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
