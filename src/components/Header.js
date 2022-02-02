import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';


const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/recipes" className="item">Recetas</Link>
      <Link to="/ingredients" className="item">Ingredientes</Link>
      <div className="right menu">
        <GoogleAuth />
      </div>      
    </div>
  );
};

export default Header;
