import { configureStore } from '@reduxjs/toolkit';
import postReducer from './posts/reducer';
import userReducer from './users/reducer';

const store = configureStore({
  reducer: {
    post: postReducer,
    user: userReducer,
  },
});

export default store;