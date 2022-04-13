import styled from 'styled-components'

export const Nav = styled.nav`
    width: 100%;
    height: 69px;
    position: relative; 
    background-color: var(--white);
    border-radius: 15px;
    box-shadow: 5px 3px 9px 0px rgba(168,168,168,0.10);
    display: flex;
    margin-bottom: 8px;
    justify-content: space-between;

    .space-nav{
        width: 80%;
    }
    .anticon svg{
        transition-duration: 1s;
    }
    .anticon:hover svg{
        fill: purple;
        transition-duration: .5s;
    }
`;
export const ItemsNav = styled.div`
    width: 15%;
    height: 100%;
    min-width: 160px;
    display: flex;
    align-items: center;
`;
export const Notification = styled.div`
    width: 60%;
`;