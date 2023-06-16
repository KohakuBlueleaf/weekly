import { configureStore } from '@reduxjs/toolkit';
import postReducer from './posts/reducer';
import userReducer from './users/reducer';
import homePageReducer from './homePage/reducer';

const store = configureStore({
  reducer: {
    post: postReducer,
    user: userReducer,
    homePage: homePageReducer,
  },
});

export default store;