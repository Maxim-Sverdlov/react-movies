const API_KEY = '9b00972b05457bc8842b6c15b21650da';
const DB_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;
const SORT_QUERY = '&sort_by=';
const PAGE_QUERY = '&language=en-US&include_adult=false&include_video=false&page=';
const GENRES_LIST_URL = `https://api.themoviedb.org/3/genre/movie/list?language=en-US&api_key=${API_KEY}`;

export const getMovies = (page, sort) => 
    fetch(DB_URL + PAGE_QUERY + page + SORT_QUERY + sort).then((data) => data.json());

export const getGenresList = () =>
    fetch(GENRES_LIST_URL).then((data) => data.json());