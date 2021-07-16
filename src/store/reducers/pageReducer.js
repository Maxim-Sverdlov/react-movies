import { PAGE } from "../constants";

const initialState = {
    currentPage: 1,
};

const pageReducer = (state = initialState, action) => {
    switch (action.type) {
        case PAGE:
            return {
                currentPage: action.payload,
            };
        default:
            return state;
    }
};

export default pageReducer;