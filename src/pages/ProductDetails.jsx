import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProduct, getDescription, getBreadcrumbs } from "../services";
import { setDescription, setProduct, setBreadcrumbs } from "../redux/actions";
import Breadcrumbs from "../components/Breadcrumbs";
import Spinner from "../components/Spinner";

const ProductDetails = () => {
  const { description, product } = useSelector((store) => store);
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    const productId = params.id;
    const categoryId = product.category_id;
    const fetchData = async () => {
      const product = await getProduct(productId);
      const description = await getDescription(productId);
      const breadcrumbs = await getBreadcrumbs(categoryId);
      dispatch(setProduct(product));
      dispatch(setDescription(description));
      dispatch(setBreadcrumbs(breadcrumbs));
    };
    fetchData();
  }, [dispatch, params.id, product.category_id]);

  let { title, thumbnail_id, price, condition, sold_quantity, permalink } =
    product;

  condition === "new" ? (condition = "Nuevo") : (condition = "Usado");

  return (
    <>
      <Breadcrumbs />
      {!product.id ? (
        <Spinner />
      ) : (
        <section className="container-fluid p-3 product-details">
          <div className="container">
            <div className="row product-details__container">
              <div className="product-details__main">
                <figure className="col-sm-6 col-md-8 product-details__main--image">
                  <img
                    src={`https://http2.mlstatic.com/D_NQ_NP_${thumbnail_id}-O.webp`}
                    alt={title}
                  />
                </figure>
                <div className="col-sm-6 col-md-4 product-details__main--info">
                  <small>{`${condition} - ${sold_quantity} vendidos`}</small>
                  <h2>{title}</h2>
                  <span>{`$ ${price}`}</span>
                  <a
                    href={permalink}
                    rel="noreferrer"
                    target="_blank"
                    className="btn btn-primary">
                    Comprar
                  </a>
                </div>
              </div>
              <div className="col-lg-8 product-details__description">
                <h2>Descripción del producto</h2>
                <p>{description}</p>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default ProductDetails;
