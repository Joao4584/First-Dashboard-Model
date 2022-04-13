import { createGlobalStyle } from 'styled-components';
import PublicAWS from '../api/S3/PublicAcess.json';

export const GlobalStyle = createGlobalStyle`
    :root {
        --gray: #5D6591;
        --gray-op: #a9aebd;
        --purple: #9374EC;
        --purple-light: #A86FF5;
        --purple-black: #52459D;
        --text-title: #363f5f;
        
        --text-body: #969cb3;
        --white: #fafafadb;
        --shape: #e6e6e6;
        --font-main: 'Inter';

    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Inter';
    }
    hr{
        border: 0; border-top: 1px solid #ccc;
    }

    body{
        background-image: url(${PublicAWS.URL}background-color.jpg);
        background-repeat: no-repeat;
        background-size: cover;
        width: 100vw;
        height: 100vh;
    }
    *::-webkit-scrollbar {
        width: 7px;   
        border-radius: 20px;             /* width of the entire scrollbar */
        }

    *::-webkit-scrollbar-track {
    background: #2f881100;
    border-radius: 20px;         /* color of the tracking area */
    }

    *::-webkit-scrollbar-thumb {
    background-color: #949494ba;    /* color of the scroll thumb */
    border-radius: 20px;       /* roundness of the scroll thumb */
    border: 2px solid var(--white);  /* creates padding around scroll thumb */
    }
        
    ::selection {
        color: white;
        background: #d4d4d478;
    }

    html{
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }
        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }
    button{
        cursor: pointer;
    }
    [disabled]{
        opacity: 0.6;
        cursor: not-allowed;
    }

`