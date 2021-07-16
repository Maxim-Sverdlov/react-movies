import { SORT } from "../constants";

const initialState = {
    order: 'popularity.desc',
};

const sortReducer = (state = initialState, action) => {
    switch (action.type) {
        case SORT: 
            return {
                order: action.payload,
            };
        default:
            return state;
    };
};

export default sortReducer;