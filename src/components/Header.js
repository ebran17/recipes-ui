import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';


const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">Ingredientes</Link>
      <div className="right menu">
        <Link to="/ingredient/edit" className="item">
          Todas las recetas
        </Link>
        <GoogleAuth />
      </div>      
    </div>
  );
};

export default Header;
