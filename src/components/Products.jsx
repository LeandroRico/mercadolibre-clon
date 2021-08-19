import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getBreadCrumbs, getFilteredProducts } from '../actions';
import BreadCrumbs from './BreadCrumbs';

const Products = () => {
  const { products } = useSelector((store) => store);
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    if (params.categoryId) {
      dispatch(getBreadCrumbs(params.categoryId));
      dispatch(getFilteredProducts(params.categoryId));
    }
  }, [dispatch, params.categoryId]);

  return (
    <>
      {params.categoryId ? <BreadCrumbs /> : null}
      <main className='container-fluid p-3 main'>
        <div className='container'>
          {products.map((product, index) => {
            const { title, thumbnail_id, price, address, id } = product;
            return (
              <Link
                to={`/product-details/${id}`}
                key={index}
                className='row p-3 main__item'
              >
                <div className='col-sm-9 main__item--info'>
                  <img
                    src={`https://http2.mlstatic.com/D_NQ_NP_${thumbnail_id}-O.webp`}
                    alt={title}
                    className='col-sm-5 product-image'
                    loading='lazy'
                  />
                  <div className='col-sm-7 product-info'>
                    <span className='price'>{`$ ${price}`}</span>
                    <h2 className='title'>{title}</h2>
                  </div>
                </div>
                <div className='col-sm-3 main__item--location'>
                  <span className='location'>{address.state_name}</span>
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
