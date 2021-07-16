import { IS_LOADING_MOVIES, LOADING_MOVIES, PAGE, SORT } from "../constants";
import { getMovies } from '../../services';

export const setIsLoadingMovies = (value) => ({
    type: IS_LOADING_MOVIES,
    payload: value,
});

export const setPage = (page) => ({
    type: PAGE,
    payload: page,
});

export const setSort = (sort) => ({
    type: SORT,
    payload: sort,
});

export const loadMovies = (page, sort) => (dispatch) => {
    dispatch(setIsLoadingMovies(true));
    getMovies(page, sort).then((data) => {
        dispatch({
            type: LOADING_MOVIES,
            payload: data.results
        })
        .then(() => dispatch(setIsLoadingMovies(false)));
    })
};