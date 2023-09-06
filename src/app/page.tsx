'use client';

import React from 'react';
import { useAppDispatch, useAppSelector } from '@/store';
import { userSlice } from '@/store/slices';
import styles from './page.module.css';

const Home = () => {
  const dispatch = useAppDispatch();
  const { increment } = userSlice.actions;
  const { count } = useAppSelector((state) => state.userReducer);

  return (
    <main className={styles.main}>
      <h1>NextJS</h1>
      <p>{count}</p>
      <button type="button" onClick={() => dispatch(increment(1))}>
        +1
      </button>
      <button type="button" onClick={() => dispatch(increment(-1))}>
        -1
      </button>
    </main>
  );
};

export default Home;
