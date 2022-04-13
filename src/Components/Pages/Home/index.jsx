import React from "react";
import { LoadingPage } from '../../LoadingTransitions'

export function Home(props){
    const titulo = props.title;
    document.title = titulo+" -" 
    return(<>
    <LoadingPage>
        HomePage
    </LoadingPage>
    </>
    )
}


