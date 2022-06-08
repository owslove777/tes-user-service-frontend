import React from 'react';
import styles from './Header.module.css';

const Header = ({ onLogout }) => {

  return (
  <header className={styles.header}>
    {true && <button className={styles.logout} onClick={onLogout}>Logout</button>}
    <img src="/images/logo.png" alt="logo"/>
    <h1 className={styles.title}>T E S</h1>
  </header>  
  )
}
export default Header;
