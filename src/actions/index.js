import axios from 'axios';
import { actions } from '../types';

const {
  GET_SEARCHED_PRODUCTS,
  GET_PRODUCT,
  GET_DESCRIPTION,
  GET_BREAD_CRUMBS,
  GET_FILTERED_PRODUCTS,
} = actions;

export const getSearchedProducts = (search) => async (dispatch) => {
  try {
    const searchUrl = `https://api.mercadolibre.com/sites/MLA/search?q=${search}&limit=4`;
    const searchResponse = await axios.get(searchUrl);
    dispatch({
      type: GET_SEARCHED_PRODUCTS,
      payload: searchResponse.data.results,
    });
  } catch (error) {
    console.log(error + 'No se han encontrado productos');
  }
};

export const getProduct = (productId) => async (dispatch) => {
  try {
    const productUrl = `https://api.mercadolibre.com/items/${productId}`;
    const productResponse = await axios.get(productUrl);
    dispatch({
      type: GET_PRODUCT,
      payload: productResponse.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getDescription = (productId) => async (dispatch) => {
  try {
    const descriptionUrl = `https://api.mercadolibre.com/items/${productId}/description`;
    const descriptionResponse = await axios.get(descriptionUrl);
    dispatch({
      type: GET_DESCRIPTION,
      payload: descriptionResponse.data.plain_text,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: GET_DESCRIPTION,
      payload: 'El vendedor no incluyó una descripción del producto',
    });
  }
};

export const getBreadCrumbs = (categoryId) => async (dispatch) => {
  try {
    if (categoryId) {
      const BreadCrumbsUrl = `https://api.mercadolibre.com/categories/${categoryId}`;
      const BreadCrumbsResponse = await axios.get(BreadCrumbsUrl);
      dispatch({
        type: GET_BREAD_CRUMBS,
        payload: BreadCrumbsResponse.data.path_from_root,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const getFilteredProducts = (id) => async (dispatch) => {
  try {
    const FilteredProductsUrl = `https://api.mercadolibre.com/sites/MLA/search?category=${id}`;
    const FilteredProductsResponse = await axios.get(FilteredProductsUrl);
    const FilteredProducts = FilteredProductsResponse.data.results.slice(0, 4);
    dispatch({
      type: GET_FILTERED_PRODUCTS,
      payload: FilteredProducts,
    });
  } catch (error) {
    console.log(error);
  }
};
