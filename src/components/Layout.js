import * as React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import styles from '../assets/styles/Layout.module.css'
import {ReactComponent as Logo} from '../assets/images/LOGO.svg';

const Layout = () => {
    const style = ({ isActive }) => ({
        textDecoration: isActive ? 'underline' : 'none',
    });
  
    return (
      <>
        <header className = {styles.flexRow}>
          <div className = {styles.logoContainer}>
          <Logo className = {styles.logo}/>
          </div>
          <nav className = {styles.nav}>
            <NavLink to="/" className = {styles.navHome} style={style}>
              Acceuil
            </NavLink>
            <NavLink to="/a-propose" className = {styles.navProposed} style={style}>
              A Propose
            </NavLink>
          </nav>
        </header>
        <main style={{ padding: '1rem 0' }}>
          <Outlet />
        </main>
        <footer>
        <div>
        <Logo className = {styles.footerLogo} />
        </div>
        <span>© 2020 Kasa. All rights reserved</span>
        </footer>
      </>
    );
  };
  export default Layout;
  