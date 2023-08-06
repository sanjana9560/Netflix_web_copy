import React from 'react'
import "./index.css";
import ReactDOM from "react-dom/client";
import Home from './Home';
import AboutSec from './AboutSec';
import Enjoy from './Enjoy';
import Menu from './Menu';
import Work from './Work';
import Box from './Box';
import Last from './Last';




const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <div>
    <Home/>
    <AboutSec />
    <Enjoy/>
    <Menu/>
    <Work/>
    <Box/>
    <Last/>
    </div>

);