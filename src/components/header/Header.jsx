import React from 'react';
import styles from './Header.module.css';

const Header = ({ onLogout }) => {

  return (
  <header className={styles.header}>
    {onLogout && <button className={styles.logout} onClick={onLogout}>Logout</button>}
    <h1 className={styles.title}>TES</h1>
  </header>  
  )
}
export default Header;
