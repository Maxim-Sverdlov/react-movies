import { IS_LOADING_MOVIES, LOAD_MOVIES } from "../constants";

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
        default:
            return state;
    };
};

export default moviesReducer;