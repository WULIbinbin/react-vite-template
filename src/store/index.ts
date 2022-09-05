import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux';

import layout from './modules/layout';
import account from './modules/account';

const reducer = combineReducers({
  layout: layout.reducer,
  account: account.reducer,
});

const store = configureStore({
  reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const layoutActions = layout.actions;
export const accountActions = account.actions;

export default store;
