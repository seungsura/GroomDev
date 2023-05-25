import React, { useState } from "react";
import styles from '../styles/SignUp.module.css';

export default function SignUpForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [team, setTeam] = useState("Developer");

  const handleSignUp = e => {
    e.preventDefault();

    // TODO: 회원가입 로직 추가
    // 사용자의 입력을 서버로 전송하고 회원가입 절차를 완료
  };

  return (
    <div className={styles.container}>
      <div className={styles.iconWrapper}>
      <img src="/logo.png" alt="icon" className={styles.icon} />
        <h1>Sign Up</h1>
      </div>
      <form onSubmit={handleSignUp} className={styles.form}>
        <div className={styles.inputGroup}>
          <label htmlFor="username">ID:</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="team">Team:</label>
          <select
            id="team"
            value={team}
            onChange={e => setTeam(e.target.value)}
          >
            <option value="Developer">Developer</option>
            <option value="Operator">Operator</option>
          </select>
        </div>
        <button type="submit" className={styles.submitButton}>가입하기</button>
      </form>
    </div>
  );
}
