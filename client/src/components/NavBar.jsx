
const NavBar = () => {
    return (
        <>
            <div className="navContainer">
            <div className="navBar">
                {/* <h2>Hola soy nav bar!</h2> */}
                <ul id = "nav-list">
                    <button className="buttonNav">
                    <li>MERCH</li>
                    </button>
                    <button className="buttonNav">
                    <li>CONCIERTOS</li>
                    </button>
                    <button className="buttonNav">
                    <li>NOTICIAS</li>
                    </button>
                    
                </ul>
            </div>
            </div>
        </>
    )
}

export default NavBar;