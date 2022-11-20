import { actions } from "../types";

const {
  SET_MATCHED_PRODUCTS,
  SET_PRODUCT,
  SET_DESCRIPTION,
  SET_BREADCRUMBS,
  SET_FILTERED_PRODUCTS,
} = actions;

export const setMatchedProducts = (matchedProducts) => (dispatch) => {
  dispatch({
    type: SET_MATCHED_PRODUCTS,
    payload: matchedProducts,
  });
};

export const setProduct = (product) => (dispatch) => {
  dispatch({
    type: SET_PRODUCT,
    payload: product,
  });
};

export const setDescription = (description) => (dispatch) => {
  dispatch({
    type: SET_DESCRIPTION,
    payload: description,
  });
};

export const setBreadcrumbs = (breadcrumbs) => (dispatch) => {
  dispatch({
    type: SET_BREADCRUMBS,
    payload: breadcrumbs,
  });
};

export const setFilteredProducts = (filteredProducts) => (dispatch) => {
  dispatch({
    type: SET_FILTERED_PRODUCTS,
    payload: filteredProducts,
  });
};
