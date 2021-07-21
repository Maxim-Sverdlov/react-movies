import { PAGE } from "../constants";

const initialState = {
    currentPage: 1,
    totalPages: 15,
};

const pageReducer = (state = initialState, action) => {
    switch (action.type) {
        case PAGE:
            return {
                ...state,
                currentPage: action.payload,
            };
        default:
            return state;
    }
};

export default pageReducer;