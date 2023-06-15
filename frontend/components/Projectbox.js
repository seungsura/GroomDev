import styles from '../styles/Projectbox.module.css';
import BootstrapHead from "./BootstrapHead";
import { useRouter } from 'next/router';
import Cookies from "js-cookie";
import axios from "axios";

const projectbox = ({ projectname, description }) => {
  const username = Cookies.get("username");
  const router = useRouter();

  const openAppList = async (e) => {

    try {
      const response = await axios.post(
        'http://192.168.45.134:8080/app/createapp/',
        {
          username,
          projectname,
        }
      );
      if (response.status === 200) {
        router.push('/applist');
      }
    } catch (error) {
      console.error('There was an error!', error);
    }
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