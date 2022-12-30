import './Nav.css'
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact'

import { NavLink } from 'react-router-dom';
import linkedIn from './Img/linkedin.png'
import twitter from './Img/twitter.png'



const Nav = () => {


  return (
    <div className='nav-container' >
      <CDBSidebar toggled='false' textColor="rgb(34, 163, 159)" backgroundColor="rgb(67, 66, 66)">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large" id='nav-button'></i>} className='nav-menu'>
        </CDBSidebarHeader>

        <CDBSidebarContent >
          <CDBSidebarMenu className='sidebar-menu' >
            <NavLink exact to="#portfolio" className='menu-item' activeClassName="activeClicked">
              <CDBSidebarMenuItem className='menu-item' icon="camera" title='portfolio' >Portfolio</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/about" activeClassName="activeClicked" >
              <CDBSidebarMenuItem icon="gamepad" className='menu-item' title='about-me' >About me</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/gallery" activeClassName="activeClicked" >
              <CDBSidebarMenuItem icon="images" className='menu-item' title='gallery'>Gallery</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/contact" activeClassName="activeClicked" >
              <CDBSidebarMenuItem icon="address-card" className='menu-item' title='contact'>Contact</CDBSidebarMenuItem>
            </NavLink>
            <div className='icon-container'>
              <img src={linkedIn} alt='linkedIn' className='linkedIn'></img>
              <img src={twitter} alt='twitter' className='twitter'></img>
            </div>

          </CDBSidebarMenu>
        </CDBSidebarContent>

      </CDBSidebar>
    </div>
  );
};

export default Nav;