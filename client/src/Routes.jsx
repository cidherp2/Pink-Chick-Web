import { Routes, Route } from "react-router-dom";
import Home from './components/Home'
import NavBar from "./components/NavBar";


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<><NavBar/> <Home/></>}>
      </Route>
    </Routes>
);
}
export default AppRoutes;

