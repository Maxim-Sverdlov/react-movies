import { IS_LOADING_MOVIES, LOADING_MOVIES, PAGE, SORT } from "../constants";

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
        case LOADING_MOVIES:
            return {
                ...state,
                data: action.payload,
            };
        default:
            return state;
    };
};

export default moviesReducer;