import { configureStore } from '@reduxjs/toolkit';
import postReducer from './posts/reducer';
import userReducer from './users/reducer';
import homePageReducer from './homePage/reducer';
import managementReducer from './management/reducer';
import navbarReducer from "./navbar/reducer";
import tagsReducer from './tags/reducer';

const store = configureStore({
  reducer: {
    post: postReducer,
    user: userReducer,
    homePage: homePageReducer,
    management: managementReducer,
    navbar: navbarReducer,
    tags: tagsReducer,
  },
});

export default store;