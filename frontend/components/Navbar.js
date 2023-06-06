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
      const response = await fetch('http://192.168.0.26:8080/api/logout/', {
        method: 'POST',
        credentials: 'include', // 쿠키 정보를 전송하기 위해 설정합니다.
        headers: {
          'Content-Type': 'application/json',
          'X-Requested-With': 'XMLHttpRequest',
          // X-CSRFToken 헤더 추가
          'X-CSRFToken': getCookie('csrftoken'), 
        },
      });

      if (response.ok) {
        router.push('/');
      } else {
        console.error('로그아웃 실패');
      }
    } catch (error) {
      console.error('로그아웃 요청 에러:', error);
    }
  };

  const handleClick = () => {
    setIsClicked(!isClicked);
    handleLogout();
  };

  // CSRFTOKEN을 가져오는 함수 추가
  function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
      const cookies = document.cookie.split(';');
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        // Does this cookie string begin with the name we want?
        if (cookie.substring(0, name.length + 1) === (name + '=')) {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
          break;
        }
      }
    }
    return cookieValue;
  }

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
