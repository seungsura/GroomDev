import React, { useState } from "react";
import styles from '../styles/SignUp.module.css';
import axios from 'axios';

export default function SignUpForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [team, setTeam] = useState("Developer");

  const handleSignUp = async e => {
    e.preventDefault();

    try {
      const response = await axios.post('http://192.168.0.200:8080/api/register/', {
          username,
          password,
          name,
          email,
          team,
      });

      if (response.data.success) {
          alert('User registered successfully');
          window.location.href = '/';
      }
  } catch (error) {
      console.error('There was an error!', error);
  }
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
