import { configureStore } from '@reduxjs/toolkit';
import postReducer from './posts/reducer';

const store = configureStore({
  reducer: {
    post: postReducer,
  },
});

export default store;