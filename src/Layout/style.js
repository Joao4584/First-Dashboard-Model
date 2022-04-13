import styled from 'styled-components'

export const Dashboard = styled.main`
    width: 100vw;
    height: 100vh;
    display: flex;
    background-color: #dfdfdf80;
    backdrop-filter: blur(50px);
    padding: 8px;
`;

export const Container = styled.div`
    width: calc( 100% - 250px);
    @media (max-width: 900px){
        width: calc( 100% - 225px);
    }

`;
