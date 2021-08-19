import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const BreadCrumbs = () => {
  const { breadCrumbs } = useSelector((store) => store);

  return (
    <nav className='breadcrumb-nav container-fluid' aria-label='breadcrumb'>
      <div className='container'>
        <ol className='breadcrumb breadcrumb-nav__items'>
          {breadCrumbs.map((category, index) => {
            return breadCrumbs[breadCrumbs.length - 1] === category ? (
              <li
                key={index}
                className='breadcrumb-item active'
                aria-current='page'
              >
                {category.name}
              </li>
            ) : (
              <li className='breadcrumb-item' key={index}>
                <Link to={`/categories/${category.id}`}>{category.name}</Link>
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
};

export default BreadCrumbs;
