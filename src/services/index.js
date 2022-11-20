import axios from "axios";

export const getMatchedProducts = async (search) => {
  try {
    const searchUrl = `https://api.mercadolibre.com/sites/MLA/search?q=${search}&limit=4`;
    const response = await axios.get(searchUrl);
    return response.data.results;
  } catch (error) {
    console.log(error + "No se han encontrado productos");
  }
};

export const getProduct = async (productId) => {
  try {
    const productUrl = `https://api.mercadolibre.com/items/${productId}`;
    const product = await axios.get(productUrl);
    return product.data;
  } catch (error) {
    console.log(error);
  }
};

export const getDescription = async (productId) => {
  try {
    const descriptionUrl = `https://api.mercadolibre.com/items/${productId}/description`;
    const description = await axios.get(descriptionUrl);
    console.log(description);
    return description.data.plain_text;
  } catch (error) {
    console.log(error);
    return "El vendedor no incluyó una descripción del producto";
  }
};

export const getBreadcrumbs = async (categoryId) => {
  try {
    if (categoryId) {
      const breadcrumbsUrl = `https://api.mercadolibre.com/categories/${categoryId}`;
      const breadcrumbs = await axios.get(breadcrumbsUrl);
      console.log(breadcrumbs.data.path_from_root);
      return breadcrumbs.data.path_from_root;
    }
  } catch (error) {
    console.log(error);
  }
};

export const getFilteredProducts = async (id) => {
  try {
    const filteredProductsUrl = `https://api.mercadolibre.com/sites/MLA/search?category=${id}`;
    const filteredProducts = await axios.get(filteredProductsUrl);
    return filteredProducts.data.results.slice(0, 4);
  } catch (error) {
    console.log(error);
  }
};
