import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { BiSearch } from 'react-icons/bi';
import { getSearchedProducts } from '../actions';
import Logo from '../images/logo__small@2x.png';
import LogoXL from '../images/logo.png';

const Header = () => {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getSearchedProducts(search));
    history.push('/');
  };

  return (
    <header className='container-fluid p-3 header'>
      <div className='container'>
        <Link to='/'>
          <picture className='header__image'>
            <source
              media='(min-width: 48em)'
              srcSet={LogoXL}
              className='header__image--logo'
            />
            <img
              src={Logo}
              alt='Mercado Libre Logo'
              className='header__image--logo'
            />
          </picture>
        </Link>
        <form className='header__search' onSubmit={handleSubmit}>
          <input
            type='text'
            placeholder='Nunca dejes de buscar'
            className='ps-3'
            onChange={handleChange}
          />
          <div className='header__search--icon'>
            <BiSearch className='icon' />
          </div>
        </form>
      </div>
    </header>
  );
};

export default Header;
