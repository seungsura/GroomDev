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
        <ul>
        <img className={styles.icon} src="../logo.png"></img>
        </ul>
        <button className={styles.button} onClick={handleClick}>Sign Out</button>
      </div>
    </div>
    </>
  );
}

export default Navbar;
