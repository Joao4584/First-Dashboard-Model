import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import { Base } from '../api/Lambda'
import Acess from '../api/Lambda/api.json'

const AuthContext = createContext();

function AuthProvider( { children }) {
    const navigate = useNavigate();
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(()=>{
        const token = sessionStorage.getItem('mytoken_acess_account')

        if(JSON.parse(token) != null){
                //Aqui Ficaria a parte de verificação de usuarios!
                setAuthenticated(true);
        }else{
            navigate('/Auth');
        }


    }, [])
    function handleLogin(items){
        sessionStorage.setItem('mytoken_acess_account', JSON.stringify(items));
        setAuthenticated(true);
        navigate('/');
    }

    function handleLogout(){
        localStorage.removeItem('token');
        setAuthenticated(false);
        navigate('/Auth');
    }

    return(
        <AuthContext.Provider value={ { authenticated, handleLogout, handleLogin}}>
            {children}
        </AuthContext.Provider>
    )
    
}
export { AuthContext, AuthProvider }