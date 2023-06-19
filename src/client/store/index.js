import { configureStore } from '@reduxjs/toolkit';
import addModalReducer from './posts/reducer';
import userReducer from './users/reducer';
import homePageReducer from './homePage/reducer';
import eventReducer from './event/reducer';
import navbarReducer from "./navbar/reducer";
import tagsReducer from './tags/reducer';
import todoReducer from './todo/reducer';
import helpReducer from './help/reducer';
import routineReducer from './routine/reducer';

const store = configureStore({
  reducer: {
    // post: eventReducer,
    user: userReducer,
    homePage: homePageReducer,
    event: eventReducer,
    navbar: navbarReducer,
    tags: tagsReducer,
    todo: todoReducer,
    help: helpReducer,
    addModal: addModalReducer,
    routine: routineReducer,
  },
});

export default store;