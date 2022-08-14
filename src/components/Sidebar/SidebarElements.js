import styled from "styled-components";

import {Link as LinkR} from 'react-router-dom'
import {FaTimes} from "react-icons/fa";

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 100;
    width: 300px;
    height: 100vh;
    background: #0d0d0d;
    display: flex;
    justify-content: center;
    top:0;
    right: 0;
    transition: 0.3s ease-in-out;
    opacity:${({isOpen})=>(isOpen ? '100%' : '0%')};
    right:${({isOpen})=>(isOpen ? '0' : '-100%')};
    overflow:scroll;
    -ms-overflow-style: none;
    &::-webkit-scrollbar { 
        display: none;
        width: 0 !important;
    }
`


export const SidebarWrapper = styled.div`
    width:100%;
    margin-top: 60px;
`

export const CloseIcon = styled(FaTimes)`
    color:#fff;
`

export const Icon = styled.div`
    position: absolute;
    top:1.2rem;
    right:1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`



// export const SidebarMenu = styled.ul`
//     display: grid;
//     grid-template-columns: 1fr;
//     grid-template-rows: repeat(6,80px);
//     text-align: center;
//     padding: 0;

//     @media screen and (max-width: 480px){
//         grid-template-rows: repeat(6, 60px);
//     }
// `



export const SideBtnWrap = styled.div`
    display: flex;
    justify-content: center;
`

export const SidebarRoute = styled(LinkR)`
    border-radius: 50px;
    background: #01bf71;
    white-space: nowrap;
    padding:16px 64px;
    color: #010606;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: #fff;
        color:#010606;
    }
`