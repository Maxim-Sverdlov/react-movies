import { configureStore, combineReducers } from '@reduxjs/toolkit';
import moviesReducer from './reducers/moviesReducer';
import pageReducer from './reducers/pageReducer';
import sortReducer from './reducers/sortReducer';
import genresReducer from './reducers/genresReducer';
import authReducer from './reducers/authReducer';

import logger from './middleware/logger';

const rootReducer = combineReducers({
  movies: moviesReducer,
  page: pageReducer,
  sort: sortReducer,
  genresList: genresReducer,
  auth: authReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;