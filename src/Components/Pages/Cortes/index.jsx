import React from "react";
import { LoadingPage } from '../../LoadingTransitions'

export function Cortes(props){
    const titulo = props.title;
    document.title = titulo+" -" 
    return(<>
    <LoadingPage>
        Pagina de Cortes
    </LoadingPage>
    </>
    )
}


