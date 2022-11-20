import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Breadcrumbs = () => {
  const { breadcrumbs } = useSelector((store) => store);

  return (
    <nav className="breadcrumb-nav container-fluid" aria-label="breadcrumb">
      <div className="container">
        <ol className="breadcrumb breadcrumb-nav__items">
          {breadcrumbs?.map((category, index) => {
            return breadcrumbs[breadcrumbs.length - 1] === category ? (
              <li
                key={index}
                className="breadcrumb-item active"
                aria-current="page">
                {category.name}
              </li>
            ) : (
              <li className="breadcrumb-item" key={index}>
                <Link to={`/products/categories/${category.id}`}>
                  {category.name}
                </Link>
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumbs;
