import { IS_LOADING_GENRES_LIST, LOAD_GENRES_LIST } from "../constants";

const initialState = {
  isLoading: false,
  genres: [],
};

const genresReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_LOADING_GENRES_LIST:
      return {
        ...state,
        isLoading: action.payload,
      };
    case LOAD_GENRES_LIST:
      return {
        ...state,
        genres: action.payload,
      };
    default:
      return state;
  }
};

export default genresReducer;
