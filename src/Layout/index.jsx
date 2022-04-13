import React , { useContext } from "react";
import {Dashboard, Container} from './style'

import SideBar from "../Components/SideBar";
import NavBar from "../Components/NavBar";
import Pages from "../Routes/Pages"

export function Layout(){

    return(
        <Dashboard>
             <SideBar/>
            <Container>
                <NavBar/>
                    <Pages/> 
            </Container>      
        </Dashboard>
    )
}
