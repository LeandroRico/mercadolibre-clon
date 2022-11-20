import { initialState } from "../initialState";
import { actions } from "../types";

const {
  SET_MATCHED_PRODUCTS,
  SET_PRODUCT,
  SET_DESCRIPTION,
  SET_BREADCRUMBS,
  SET_FILTERED_PRODUCTS,
} = actions;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MATCHED_PRODUCTS:
      return { ...state, matchedProducts: action.payload };

    case SET_PRODUCT:
      return { ...state, product: action.payload };

    case SET_DESCRIPTION:
      return { ...state, description: action.payload };

    case SET_BREADCRUMBS:
      return { ...state, breadcrumbs: action.payload };

    case SET_FILTERED_PRODUCTS:
      return { ...state, matchedProducts: action.payload };

    default:
      return state;
  }
};

export default reducer;
