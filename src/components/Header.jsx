import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { getMatchedProducts } from "../services";
import { setMatchedProducts } from "../redux/actions";
import Logo from "../assets/logo__small@2x.png";
import LogoXL from "../assets/logo.png";

const Header = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const matchedProducts = await getMatchedProducts(search);
    dispatch(setMatchedProducts(matchedProducts));
    history.push("/products");
  };

  return (
    <header className="container-fluid p-3 header">
      <div className="container">
        <Link to="/">
          <picture className="header__image">
            <source
              media="(min-width: 48em)"
              srcSet={LogoXL}
              className="header__image--logo"
            />
            <img
              src={Logo}
              alt="Mercado Libre Logo"
              className="header__image--logo"
            />
          </picture>
        </Link>
        <form className="header__search" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nunca dejes de buscar"
            className="ps-3"
            onChange={handleChange}
          />
          <div className="header__search--icon">
            <BiSearch className="icon" />
          </div>
        </form>
      </div>
    </header>
  );
};

export default Header;
