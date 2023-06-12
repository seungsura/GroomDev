import { useState } from 'react';
import styles from '../styles/Projectbox.module.css';
import BootstrapHead from "../components/BootstrapHead";

const projectbox = () => {
  
  return (
    <>
      <BootstrapHead />
    <div className={styles.box}>

      <div className={styles['top-box']}>
        <div className={styles.title}>ProjectName</div>
      </div>

      <div className={styles['middle-box']}>
        <div className={styles.middleDescription}>0 applications </div>
      </div>

      <div className={styles['bottom-box']}>
        <div className={styles.description}>Description: MSA project </div>
      </div>

    </div>
    </>
  );
}
export default projectbox;
