import styles from '../styles/Projectbox.module.css';
import BootstrapHead from "./BootstrapHead";
import Cookies from "js-cookie";
import Applist from "../pages/applist";

const projectbox = ({ projectname, description }) => {
  const username = Cookies.get("username");

  const openAppList = () => {
    return <Applist username={username} projectname={projectname} />;
  };


  return (
    <>
      <BootstrapHead />
    <div className={styles.box} onClick={openAppList}>

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