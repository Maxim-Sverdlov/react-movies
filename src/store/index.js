import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import moviesReducer from './reducers/moviesReducer';
import pageReducer from './reducers/pageReducer';
import sortReducer from './reducers/sortReducer';
import thunk from 'redux-thunk';
import logger from './middleware/logger';
import { configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  movies: moviesReducer,
  page: pageReducer,
  sort: sortReducer,
});

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: process.env.NODE_ENV !== 'production',
});

export default store;
