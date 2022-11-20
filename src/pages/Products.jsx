import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getFilteredProducts, getBreadcrumbs } from "../services";
import { setBreadcrumbs, setFilteredProducts } from "../redux/actions";
import Breadcrumbs from "../components/Breadcrumbs";

const Products = () => {
  const { matchedProducts } = useSelector((store) => store);
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    if (params.categoryId) {
      const fetchData = async () => {
        const breadcrumbs = await getBreadcrumbs(params.categoryId);
        const filteredProducts = await getFilteredProducts(params.categoryId);
        dispatch(setBreadcrumbs(breadcrumbs));
        dispatch(setFilteredProducts(filteredProducts));
      };
      fetchData();
    }
  }, [dispatch, params.categoryId]);

  if (!matchedProducts) return null;

  return (
    <>
      {params.categoryId ? <Breadcrumbs /> : null}
      <main className="container-fluid p-3 main">
        <div className="container">
          {matchedProducts.map((product, index) => {
            const { title, thumbnail_id, price, address, id } = product;
            const imageUrl = `https://http2.mlstatic.com/D_NQ_NP_${thumbnail_id}-O.webp`;
            return (
              <Link
                to={`/product-details/${id}`}
                key={index}
                className="row p-3 main__item">
                <div className="col-sm-9 main__item--info">
                  <img
                    src={imageUrl}
                    alt={title}
                    className="col-sm-5 product-image"
                    loading="lazy"
                  />
                  <div className="col-sm-7 product-info">
                    <span className="price">{`$ ${price}`}</span>
                    <h2 className="title">{title}</h2>
                  </div>
                </div>
                <div className="col-sm-3 main__item--location">
                  <span className="location">{address.state_name}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </main>
    </>
  );
};

export default Products;
