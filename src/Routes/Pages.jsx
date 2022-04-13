import React from "react";
import {Route, Routes} from 'react-router-dom'

import {Home} from '../Components/Pages/Home'
import {Caixas} from '../Components/Pages/Caixas'
import {Cortes} from '../Components/Pages/Cortes'
import {Estoque} from '../Components/Pages/Estoque'
import {Pedidos} from '../Components/Pages/Pedidos'
import {NotFound404} from '../Components/Pages/NotFound404'


function Rotas() {
    return(<>
            <Routes> 
                  <Route path="/" element={<Home title="Home" />} />
                  <Route path="/Caixas" element={<Caixas title="Pedidos de Caixa" />} />
                  <Route path="/Cortes" element={<Cortes title="Cortes do Dia" />} />
                  <Route path="/Estoque" element={<Estoque title="Gerenciar Estoque " />} />
                  <Route path="/Pedidos" element={<Pedidos title="Pedidos do Dia" />} />
                  <Route path='*' exact={true} element={<NotFound404 title="Error 404"/>}/>

            </Routes>
    </>);
}

export default Rotas