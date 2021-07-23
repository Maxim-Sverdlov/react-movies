import { IS_LOADING_MOVIES, LOAD_MOVIES, ADD_MOVIE, DELETE_MOVIE } from "../constants";

const initialState = {
    isLoading: false,
    data: [],
}

const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case IS_LOADING_MOVIES:
            return {
                ...state,
                isLoading: action.payload,
            };
        case LOAD_MOVIES:
            return {
                ...state,
                data: action.payload,
            };
        case ADD_MOVIE:
            return {
                ...state,
                data: [action.payload, ...state.data],
            };
        case DELETE_MOVIE:
            return {
                ...state,
                data: state.data.filter((movie) => movie !== action.payload),
            }
        default:
            return state;
    };
};

export default moviesReducer;