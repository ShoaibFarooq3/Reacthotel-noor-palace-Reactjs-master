import React from 'react';
import styles from './NavBar.module.css';
import MenuList from './MenuList.js';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const Menulist = MenuList.map(({ url, title }, index) => {
    return (
      <li key={index}>
        <Link to={url}>{title}</Link>
      </li>
    );
  });

  return (
    <nav className={styles.header}>
      <div className={styles.logo}>
        <img alt="logo.png" src={require('../../assets/logo.png').default} />
      </div>

      <ul className={styles.menuList}>{Menulist}</ul>
    </nav>
  );
};

export default NavBar;
