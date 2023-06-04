import { useState } from "react";
import Link from "next/link";
import styles from '../styles/Navbar.module.css';
import BootstrapHead from "../components/BootstrapHead";
import { useRouter } from 'next/router';

function Navbar() {
  const [isClicked, setIsClicked] = useState(false);
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const response = await fetch('http://192.168.0.200:8080/api/logout/', {
        method: 'POST',
        credentials: 'include', // 쿠키 정보를 전송하기 위해 설정합니다.
        headers: {
          'Content-Type': 'application/json',
          'X-Requested-With': 'XMLHttpRequest',
        },
      });

      if (response.ok) {
        localStorage.removeItem('token');
        router.push('/');
      } else {
        console.error('로그아웃 실패');
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        alert(`Error: ${error.response.data.error}`);
      } else {
      console.error('로그아웃 요청 에러:', error);
    }
  }};

  const handleClick = () => {
    setIsClicked(!isClicked);
    handleLogout();
  };

  return (
    <>
      <BootstrapHead/>
      <div>
        <div className={styles.navbar}>
          <ul className={styles.logoContainer}>
            <li>
              <Link href="/main">
                <div>
                  <img className={styles.icon} src="../logo.png" alt="Logo" />
                  <span className={styles.logoText}>GOSU</span>
                </div>
              </Link>
            </li>
          </ul>
          <button className={styles.button} onClick={handleClick}>Sign Out</button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
