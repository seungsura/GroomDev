import { useState } from 'react';
import styles from '../styles/Signin.module.css';
import BootstrapHead from "./BootstrapHead";
import Link from "next/link";
import { useRouter } from 'next/router';
import axios from 'axios';

function SignInForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

const router = useRouter();

const handleSignIn = (e) => {
  e.preventDefault();

  axios.post('http://192.168.0.200:8080/api/login/', { // Django 로그인 API 엔드포인트로 수정하세요.
    username,
    password
  })
  .then(res => {
    if (res.status === 200) {
      alert('로그인에 성공했습니다!');
      router.push('/main'); // 로그인 성공 후 리다이렉트 할 페이지로 수정하세요.
    }
  })
  .catch(error => {
    if (error.response) {
      // 서버에서 에러 응답을 받은 경우
      alert(`Error: ${error.response.data.error}`);
    } else if (error.request) {
      // 요청을 보냈지만 응답을 받지 못한 경우
      alert('서버에서 응답이 없습니다. 다시 시도해 주세요.');
    } else {
      // 요청 설정 중 에러가 발생한 경우
      alert('로그인 요청 중 에러가 발생했습니다. 다시 시도해 주세요.');
    }
  });
};
  
  return (
    <>
      <BootstrapHead/>
      {/* 아이콘 */}
      <div className={styles.container}>
        <div className={styles.iconWrapper}>
          <img src="/logo.png" alt="icon" className={styles.icon} />
          <h1>Sign In</h1>
        </div>
        {/* 전체 박스 */}
        <form className={styles.signinbox} onSubmit={handleSignIn}>
          {/* 이름 입력받기 */}
          <div className={styles.inputGroup}>
            <label htmlFor="username">ID:</label>
              <input
                id="username"
                type="text"
                value={username}
                pattern="^[a-zA-Z0-9ㄱ-힣]+"
                onChange={handleUsernameChange}
                required
              />
          </div>
          
          {/* 패스워드 입력받기 */}
          <div className={styles.inputGroup}>
            <label htmlFor="password">Password:</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
          </div>
          {/* 줄 사이 공백 */}
          <div className={styles.space}></div>
          {/* 로그인하는 버튼 */}
          <button type="submit" className={styles.submitButton}>Sign In</button>
        </form>
      </div>
      {/* 계정 만들기 */}
      <div className={styles.account}>
        New to GOSU?&nbsp;
        <Link href="/signup">
          Create an account.
        </Link>
      </div>
    </>
  );
}

export default SignInForm;
