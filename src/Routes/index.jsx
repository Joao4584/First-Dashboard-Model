import React from "react";
import {Route, Routes} from 'react-router-dom'

import {Login} from '../Auth/Login'
import {Layout} from '../Layout'


function Rotas() {
    return(<>
            <Routes>
                <Route path="/Auth" element={<Login />} />
                <Route path="*" element={<Layout />} />
                <Route path="/" element={<Layout />} />
                 
            </Routes>
    </>);
}

export default Rotas