import styles from '../styles/Projectbox.module.css';
import BootstrapHead from "./BootstrapHead";

const projectbox = ({ projectname, description }) => {
  
  return (
    <>
      <BootstrapHead />
    <div className={styles.box}>

      <div className={styles['top-box']}>
        <div className={styles.title}>{projectname}</div>
      </div>

      <div className={styles['middle-box']}>
        <div className={styles.middleDescription}>0 applications </div>
      </div>

      <div className={styles['bottom-box']}>
        <div className={styles.description}>Description: {description} </div>
      </div>

    </div>
    </>
  );
}
export default projectbox;