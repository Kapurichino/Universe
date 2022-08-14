
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { useState } from 'react';

const SidebarLink = styled(Link)`

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 50px;
    height: 60px;
    font-size: 18px;
    text-decoration: none;
    list-style: none;
    transition: 0.4s ease-in-out;
    color: #fff;
    &:hover{
        border-right:6px solid #632ce4;
        cursor: pointer;
    }
`

const SidebarLabel = styled.span`
    margin-left: 16px;
`

const DropdownLink = styled(Link)`
    background: #414757;
    height:60px;
    padding-left:3rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    color:#f5f5f5;
    font-size: 18px;

    &:hover{
        background: #632ce4;
        cursor: pointer;
    }
`

export const SubMenu = ({item})=>{
    const [subNav, setSubNav] = useState(false);
    const showSubnav = () => setSubNav(!subNav);
    return(
        <>
            <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
                <div>
                    {item.icon}
                    <SidebarLabel>{item.title}</SidebarLabel>
                </div>
                <div>
                    {item.subNav && subNav
                     ? item.iconOpened 
                     : item.subNav
                     ? item.iconClosed 
                     : null}
                </div>    
            </SidebarLink>
            {subNav && item.subNav.map((item, index)=>{
                return(
                    <DropdownLink to={item.path} key={index}>
                    {item.icon}
                    <SidebarLabel>{item.title}</SidebarLabel>
                    </DropdownLink>
                ) 
            })}
        </>
    )
}