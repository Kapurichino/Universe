import React from 'react'
import { IconContext } from 'react-icons/lib'
import { SidebarData } from './data'
import {
    SidebarContainer, 
    Icon, 
    CloseIcon, 
    SidebarWrapper, 
    SidebarMenu, 
    SidebarLink, 
    SideBtnWrap, 
    SidebarRoute
} from './SidebarElements'
import { SubMenu } from './Submenu'

const Sidebar = ({isOpen, toggle}) => {
  return (
    <>
      <IconContext.Provider value={{color:'skyblue'}}>
        <SidebarContainer isOpen={isOpen}>
            <Icon onClick={toggle}>
              <CloseIcon/>
            </Icon>
            <SidebarWrapper>
            {SidebarData.map((item, index)=>{
              return <SubMenu item={item} key={index}/>
            })}
            <SideBtnWrap>
                <SidebarRoute to='/signin'>
                    Sign In
                </SidebarRoute>
            </SideBtnWrap>
          </SidebarWrapper>
        </SidebarContainer>
      </IconContext.Provider>
    </>
  )
}

export default Sidebar
