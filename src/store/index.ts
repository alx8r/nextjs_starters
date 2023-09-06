import ReduxProvider from './provider';
import { store, RootState, AppDispatch } from './store';
import { useAppDispatch, useAppSelector } from './hooks';

export default store;
export { ReduxProvider };
export { useAppDispatch, useAppSelector };
export type { RootState, AppDispatch };
