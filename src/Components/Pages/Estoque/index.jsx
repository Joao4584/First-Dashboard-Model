import React from "react";
import { LoadingPage } from '../../LoadingTransitions'

export function Estoque(props){
    const titulo = props.title;
    document.title = titulo+" -" 
    return(<>
    <LoadingPage>
        Pagina de Estoque
    </LoadingPage>
    </>
    )
}


