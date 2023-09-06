import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IUser } from '../models/IUser';

interface IUserState {
  users: IUser[];
  count: number;
  isLoading: boolean;
  error: string;
}

const initialState: IUserState = {
  users: [],
  count: 0,
  isLoading: false,
  error: '',
};

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    increment(state, action: PayloadAction<number>) {
      state.count += action.payload;
    },
  },
});

export default userSlice;
