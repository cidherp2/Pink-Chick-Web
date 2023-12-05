// NavBar.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
  const location = useLocation();

  return (
    <>
      <div className="navContainer">
        <div className="navBar">
          <ul id="nav-list">
            {location.pathname !== '/Merch' && (
              <Link to="/Merch">
                <button className="buttonNav">
                  <li>MERCH</li>
                </button>
              </Link>
            )}
            <Link to="/Conciertos">
              <button className="buttonNav">
                <li>CONCIERTOS</li>
              </button>
            </Link>
            {location.pathname !=='/Carrito' ? (
            <Link to="/Carrito">
              <button className="buttonNav">
                <li>CARRITO</li>
              </button>
            </Link>
            ):null}
            {location.pathname !== '/' ? (
              <Link to="/">
                <button className="buttonNav">
                  <li>HOME</li>
                </button>
              </Link>
            ) : null}
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;
