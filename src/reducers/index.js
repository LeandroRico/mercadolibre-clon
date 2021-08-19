import { initialState } from '../initialState';
import { actions } from '../types';

const {
  GET_SEARCHED_PRODUCTS,
  GET_PRODUCT,
  GET_DESCRIPTION,
  GET_BREAD_CRUMBS,
  GET_FILTERED_PRODUCTS,
} = actions;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SEARCHED_PRODUCTS:
      return { ...state, products: action.payload };

    case GET_PRODUCT:
      return { ...state, product: action.payload };

    case GET_DESCRIPTION:
      return { ...state, description: action.payload };

    case GET_BREAD_CRUMBS:
      return { ...state, breadCrumbs: action.payload };

    case GET_FILTERED_PRODUCTS:
      return { ...state, products: action.payload };

    default:
      return state;
  }
};

export default reducer;
