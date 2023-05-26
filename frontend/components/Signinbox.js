import { useState } from 'react';
import styles from '../styles/Signin.module.css';
import BootstrapHead from "./BootstrapHead";
import Link from "next/link";

function SignInForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignIn = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <BootstrapHead/>
      {/* 아이콘 */}
      <div className={styles.iconWrapper}>
        <img src="/logo.png" alt="icon" className={styles.icon} />
        <h1>Sign In</h1>
      </div>
      {/* 전체 박스 */}
      <form className={styles.signinbox} onSubmit={handleSignIn}>
        {/* 이름 입력받기 */}
        <div>Username</div>
        <div>
          <input
            className={styles.input}
            id="username"
            value={username}
            pattern="^[a-zA-Z0-9ㄱ-힣]+"
            onChange={handleUsernameChange}
            required
          />
        </div>
        {/* 줄 사이 공백 */}
        <div className={styles.space}></div>
        {/* 패스워드 입력받기 */}
        <div>Password</div>
        <div>
          <input
            className={styles.input}
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
      {/* 계정 만들기 */}
      <div className={styles.account}>
        New to GOSU?&nbsp;
        <Link href="/">
          Create an account.
        </Link>
      </div>
    </>
  );
}

export default SignInForm;
