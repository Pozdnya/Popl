import { FETCH_DATA, PATCH_DATA } from "./types";

const initialState = {
  cardData: [],
};

export const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return { ...state, cardData: action.payload };
    case PATCH_DATA:
      return state;
    default:
      return state;
  }
};
