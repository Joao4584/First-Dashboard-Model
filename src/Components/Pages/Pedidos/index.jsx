import React from "react";
import { LoadingPage } from '../../LoadingTransitions'
import Skeleton from '@mui/material/Skeleton';

export function Pedidos(props){
    const titulo = props.title;
    document.title = titulo+" -" 
    return(<>
    <LoadingPage>
    
        Pagina dos Pedidos

    </LoadingPage>
    </>
    )
}


