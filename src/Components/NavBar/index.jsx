import React, { useEffect, useState } from "react"
import { PageHeader } from 'antd';
import { Nav, ItemsNav, Notification } from './style';
import { PerfilNav } from '../Profile/Navigation';
import {useNavigate} from 'react-router-dom'

function NavBar() {
    let Navigate = useNavigate();
    const [tituloPagina, setTituloPagina] = useState(document.title);
    setInterval(() => {
        if(document.title != tituloPagina){
            setTituloPagina(document.title)
        }
    }, 2000);
    return(
        <Nav>
            <div className="space-nav">
                <PageHeader
                    className="site-page-header"
                    onBack={()=>{Navigate('/')}}
                    title={tituloPagina}
                    subTitle="App"
                />
            </div>
            <ItemsNav>
                <Notification>

                </Notification>
                <PerfilNav/>
            </ItemsNav>
        </Nav>
    )
}

export default NavBar