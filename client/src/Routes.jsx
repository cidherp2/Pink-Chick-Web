import { Routes, Route } from "react-router-dom";
import Home from './components/Home'
import NavBar from "./components/NavBar";
import Merch from './components/Merch'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<><NavBar/> <Home/></>}>
      </Route>
      <Route path="/Merch" element={<><div id="merchBody"><NavBar/> <Merch/></div></>}>
      </Route>
    </Routes>
);
}
export default AppRoutes;

