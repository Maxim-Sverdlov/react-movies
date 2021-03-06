import { IS_LOADING_MOVIES, LOAD_MOVIES, PAGE, SORT, IS_LOADING_GENRES_LIST, LOAD_GENRES_LIST, LOGIN, ROLE, IS_AUTH, ADD_MOVIE, DELETE_MOVIE } from "../constants";
import { getMovies } from '../../services';
import { getGenresList } from "../../services";

export const setPage = (page) => ({
    type: PAGE,
    payload: page,
});

export const setSort = (sort) => ({
    type: SORT,
    payload: sort,
});

export const setIsLoadingMovies = (value) => ({
    type: IS_LOADING_MOVIES,
    payload: value,
});

export const loadMovies = (page, sort) => (dispatch) => {
    dispatch(setIsLoadingMovies(true));
    getMovies(page, sort)
    .then((data) => {
        dispatch({type: LOAD_MOVIES, payload: data.results});
    })
    .then(() => dispatch(setIsLoadingMovies(false)));
};

export const setIsLoadingGenresList = (value) => ({
    type: IS_LOADING_GENRES_LIST,
    payload: value,
});

export const loadGenresList = () => (dispatch) => {
    dispatch(setIsLoadingGenresList(true));
    getGenresList()
    .then((data) => {
        dispatch({type: LOAD_GENRES_LIST, payload: data.genres});
    })
    .then(() => dispatch(setIsLoadingGenresList(false)));
};

export const setLogin = (login) => ({
    type: LOGIN,
    payload: login,
});

export const setRole = (role) => ({
    type: ROLE,
    payload: role,
});

export const setIsAuth = (value) => ({
    type: IS_AUTH,
    payload: value,
});

export const setAddMovie = (value) => ({
    type: ADD_MOVIE,
    payload: value,
});

export const setDeleteMovie = (value) => ({
    type: DELETE_MOVIE,
    payload: value,
})