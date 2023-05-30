import { useState, useEffect } from "react";
import Link from "next/link";
import styles from '../styles/Navbar.module.css';
import BootstrapHead from "../components/BootstrapHead";

function Navbar() {
    const [isClicked, setIsClicked] = useState(false);
  
    const handleClick = () => {
      setIsClicked(!isClicked);
    };

  return (
    <>
     <BootstrapHead/>
    <div>
      <div className={styles.navbar}>
      <ul className={styles.logoContainer}>
      <li>
        <a href="/main">
          <img className={styles.icon} src="../logo.png" alt="Logo"></img>
          <span className={styles.logoText}>GOSU</span>
        </a>
      </li>
    </ul>
        <button className={styles.button} onClick={handleClick}>Sign Out</button>
      </div>
    </div>
    </>
  );
}

export default Navbar;
