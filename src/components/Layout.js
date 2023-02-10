import * as React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import styles from '../assets/styles/Nav.module.css'
import {ReactComponent as ReactLogo} from '../assets/images/LOGO.svg';

const Layout = () => {
    const style = ({ isActive }) => ({
        textDecoration: isActive ? 'underline' : 'none',
    });
  
    return (
      <>
      <div className = {styles.flexRow}>
        <div className = {styles.logo}>
        <ReactLogo />
        </div>
        <nav className = {styles.nav}>
          <NavLink to="/" className = {styles.navHome} style={style}>
            Acceuil
          </NavLink>
          <NavLink to="/a-propose" className = {styles.navProposed} style={style}>
            A Propose
          </NavLink>
        </nav>
        </div>
        <main style={{ padding: '1rem 0' }}>
          <Outlet />
        </main>
      </>
    );
  };
  export default Layout;
  