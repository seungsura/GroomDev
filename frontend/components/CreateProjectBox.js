import { useState } from "react";
import styles from '../styles/CreateProjectBox.module.css';
import BootstrapHead from "./BootstrapHead";

function CreateProjectBox() {
    const [isClicked, setIsClicked] = useState(false);
  
    const handleClick = () => {
      setIsClicked(!isClicked);
    };
  return (
    <>
        <BootstrapHead/>
        <div className={styles.container}>
            <div className={styles.leftContent}>
                <h5 className={styles.aboveTitle}>Hello userID</h5>
                <h2 className={styles.title}>Dev Team Projects</h2>
            </div>
            <button className={styles.button} onClick={handleClick}>Create Project</button>
        </div>
    </>
  );
}

export default CreateProjectBox;
