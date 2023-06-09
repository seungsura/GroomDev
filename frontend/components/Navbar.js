import { useState, useEffect } from "react";
import Link from "next/link";
import styles from '../styles/Navbar.module.css';
import BootstrapHead from "../components/BootstrapHead";
import { useRouter } from 'next/router';

function Navbar() {
  const [isClicked, setIsClicked] = useState(false);
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const response = await fetch('http://gosu.digital:8080/api/logout/', {
        method: 'POST',
        credentials: 'include', // Send cookies along with the request
        headers: {
          'Content-Type': 'application/json',
          'X-Requested-With': 'XMLHttpRequest',
          'X-CSRFToken': getCookie('csrftoken'),
        },
      });

      if (response.ok) {
        router.push('/');
      } else {
        console.error('Logout failed');
      }
    } catch (error) {
      console.error('Logout request error:', error);
    }
  };

  const handleClick = () => {
    setIsClicked(!isClicked);
    handleLogout();
  };

  function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
      const cookies = document.cookie.split(';');
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.substring(0, name.length + 1) === (name + '=')) {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
          break;
        }
      }
    }
    return cookieValue;
  }

  useEffect(() => {
    // Check if the user is authenticated
    const checkAuthentication = async () => {
      try {
        const response = await fetch('http://gosu.digital:8080/api/check_authentication/', {
          credentials: 'include', // Send cookies along with the request
        });

        if (response.ok) {
          const data = await response.json();
          console.log(data); // You can handle the response data as per your requirement
        } else {
          // User is not authenticated, redirect to the login page
          router.push('/');
        }
      } catch (error) {
        console.error('Authentication check error:', error);
      }
    };

    checkAuthentication();
  }, []);

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
