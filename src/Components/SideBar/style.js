import styled from 'styled-components'

export const Side = styled.nav`
    width: 240px;
    background-color: var(--white);
    margin-right: 13px;
    border-radius: 15px;
    box-shadow: 5px 3px 9px 0px rgba(168,168,168,0.08);

    @media (max-width: 900px){
        width: 200px;
    }
    .ant-menu{
        background-color: #00000000;
    } 
    .overflow-container{
        overflow-y: auto;
        overflow-x: hidden;
        height: calc(100vh - 150px);
    }
    .ant-menu-submenu-selected{
        color: #48129f;
    }
    .ant-menu-light .ant-menu-submenu-active{
        color: var(--purple);
    }
    .ant-menu-light .ant-menu-submenu-title:hover {
    color: var(--purple-light);
    }
    .ant-menu-submenu:hover > .ant-menu-submenu-title > .ant-menu-submenu-arrow {
    color: var(--purple-light);
    }
    .ant-menu-light .ant-menu-item:hover, .ant-menu-light .ant-menu-item-active{
        color: var(--purple-light);
    }
    .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
    background-color: #f5e6ffb0;
    }
    .ant-menu-inline .ant-menu-item::after {
    border-right: 3px solid #986af1;
    }
    .ant-menu-item-selected {
    color: #7441c5;
    }




`;
export const HeaderSide = styled.div`
    width: 100%;
    height: 86px;

    div{
        width: 100%;
        height: 80%;
        padding: 19px;
        padding-top: 14px;
        padding-bottom: 10px;
        display: flex;
        justify-content: left;
        align-items: center;
        gap: 10px;
    }
    .img-side{
        width: 40px;
        height: 40px;
        fill: var(--purple-black);
    }
    h4{
        color: var(--purple-black);
        font-size: 21px;
        font-weight: bold;
        margin: 0px;
    }
    hr{
        width: 83%;
        position: relative;
        left: 50%; transform: translateX(-50%);

    }
`;

export const Navegation = styled.div`
    width: 100%;
    height: 400px;

    h3{
        color: var(--gray-op);
        font-weight: 400;
        font-size: 14px;
        padding: 19px;
        padding-bottom: 13px;
        margin: 0px;
    }
`;
export const Box = styled.div`
    width: 100%;
    height: 44px;
    padding-left: 19px;
    display: flex;
    align-items: center;
    gap: 13px;
    
    .icons-side{
        width: 20px;
        height: 20px;
        fill: var(--purple-black);
    }
    h4{
        font-size: 16px;
        margin: 0;
    }

`;

