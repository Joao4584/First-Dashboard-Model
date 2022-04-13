import React from "react";
import { BrowserRouter } from 'react-router-dom';
import 'antd/dist/antd.css';

import Rotas from './Routes'
import { GlobalStyle } from './styles/Global'
import { AuthProvider } from './Auth/AuthContext'

function App() {
    return(<>
        <GlobalStyle/>
            <BrowserRouter>
                <AuthProvider>

                    <Rotas/>

                </AuthProvider>
            </BrowserRouter>
        
    </>);
}

export default App