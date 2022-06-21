import { configureStore, combineReducers } from '@reduxjs/toolkit';
import angelsReducer from './angels/angels';
import loaderReducer from './loader/loader';

const rootReducer = combineReducers({
  angels: angelsReducer,
  loader: loaderReducer,
});

const store = configureStore({ reducer: rootReducer });

export default store;
