import { Routes, Route } from "react-router-dom";
import Home from './components/Home'
import NavBar from "./components/NavBar";
import Merch from './components/Merch'
import Cart from "./components/ShoppingCart";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<><NavBar/> <Home/></>}>
      </Route>
      <Route path="/Merch" element={<><div id="merchBody"><NavBar/> <Merch/></div></>}>
      </Route>
      <Route path="/Carrito" element={<><div id="carritoBody"><NavBar/> <Cart/></div></>}>
      </Route>
    </Routes>
);
}
export default AppRoutes;

