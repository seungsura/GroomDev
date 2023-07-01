import { useState } from 'react';
import styles from '../styles/Appbox.module.css';
import BootstrapHead from "../components/BootstrapHead";

const Appbox = ({ appname, appDescription }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const boxes = ['BUILD', 'DEPLOY', 'GITLAB', 'JENKINS', 'ARGO'];

  return (
    <>
      <BootstrapHead />
    <div className={styles.box}>

      <div className={styles['top-box']}>
        <div className={styles.title}>{appname}</div>
      </div>

      <div className={styles['middle-box']}>
        <div className={styles.description}>Description: {appDescription} </div>
      </div>

      <div className={styles['bottom-box']}>
        {boxes.map(box => (
          <div 
            key={box} 
            className={`${styles.option} ${styles[box.toLowerCase()]}`} 
            onClick={() => setSelectedOption(box)}
          >
            {box}
          </div>
        ))}
      </div>
      <div>
        Selected Option: {selectedOption}
      </div>
    </div>
    </>
  );
}
export default Appbox;
