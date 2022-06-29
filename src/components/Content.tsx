import { Route, Routes } from "react-router-dom";

import About from "../pages/About";
import Home from "../pages/Home";
import Lauch from "../pages/Lauch";
import NotFound from "../pages/NotFound";
import Producer from "../pages/Producer";

export default function Content(){
    return(
        <div className={`flex grow mt-16 p-4`}>
            <Routes>
                <Route  path='/' element={<Home/>}></Route>
                <Route  path='producers' element={<Producer/>}></Route>
                <Route  path='launch' element={<Lauch/>}></Route>
                <Route  path='about' element={<About/>}></Route>
                <Route  path='*' element={<NotFound/>}></Route>
            </Routes>
        </div>
    )
}