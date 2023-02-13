import React from 'react';
import {Header} from "../Header/Header";
import {Outlet} from "react-router-dom";

export const App = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
            <footer>2023 All right reserved</footer>
        </div>
    );
};

