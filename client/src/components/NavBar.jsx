import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <>
            <div className="navContainer">
                <div className="navBar">
                    {/* <h2>Hola soy nav bar!</h2> */}
                    <ul id="nav-list">
                        <Link to="/Merch">
                            <button className="buttonNav">
                                <li>MERCH</li>
                            </button>
                        </Link>
                        <Link to="/Conciertos">
                            <button className="buttonNav">
                                <li>CONCIERTOS</li>
                            </button>
                        </Link>
                        <Link to="/Noticias">
                            <button className="buttonNav">
                                <li>NOTICIAS</li>
                            </button>
                        </Link>

                    </ul>
                </div>
            </div>
        </>
    )
}

export default NavBar;