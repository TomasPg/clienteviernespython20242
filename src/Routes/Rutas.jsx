import { Routes, Route } from "react-router-dom"
import { Menu } from "../Components/common/Menu/Menu"
import { Home } from "../Components/pages/Home/Home"

export function Rutas(){
    return(
    <>
        <Menu></Menu>
        <Routes>
        <Route path="/" element={ <Home /> } />
      </Routes>
    </>
    );
}