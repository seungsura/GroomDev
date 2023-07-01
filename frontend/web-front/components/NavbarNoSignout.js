import { useState, useEffect } from "react";
import Link from "next/link";
import styles from '../styles/Navbar.module.css';
import BootstrapHead from "../components/BootstrapHead";

function NavbarNo() {
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
        <img className={styles.icon} src="../logo.png" alt="Logo"></img>
        <span className={styles.logoText}>GOSU</span>
      </li>
    </ul>
      </div>
    </div>
    </>
  );
}

export default NavbarNo;
