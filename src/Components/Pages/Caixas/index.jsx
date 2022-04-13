import React from "react";
import { LoadingPage } from '../../LoadingTransitions'

export function Caixas(props){
    const titulo = props.title;
    document.title = titulo+" -" 
    return(<>
    <LoadingPage>
        Caixas
    </LoadingPage>
    </>
    )
}


