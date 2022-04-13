import React from "react";
import { LoadingPage } from '../../LoadingTransitions'

export function NotFound404(props){
    const titulo = props.title;
    document.title = titulo+" -" 

    return(<>
    <LoadingPage>
    NotFound
    </LoadingPage>
    
    </>
    )
}
