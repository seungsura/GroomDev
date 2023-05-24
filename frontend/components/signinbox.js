import styles from '../styles/signin.module.css';
import BootstrapHead from "../components/BootstrapHead";
import Link from "next/link";

function box() {
  return (
    <>
      <BootstrapHead/>
      {/* 아이콘 */}
      <img className={styles.icon} src="../logo.png"></img>
      {/* 전체 박스 */}
      <div className={styles.signinbox}>
        {/* 이름 입력받기 */}
        <div>Username</div>
        <div><input className={styles.input} id="name"/></div>
        {/* 줄 사이 공백 */}
        <div className={styles.space}></div>
        {/* 패스워드 입력받기 */}
        <div>Password</div>
        <div><input className={styles.input}id="name"/></div>
        {/* 줄 사이 공백 */}
        <div className={styles.space}></div>
        {/* 로그인하는 버튼 */}
        <div className={styles.click}><div className={styles.mid}>sign in</div></div>
      </div>
      {/* 계정 만들기 */}
      <div className={styles.account}>
        New to ?&nbsp;
        <Link href={'/'}>
          Create an account.
        </Link>
      </div>
    </>
  );
}

export default box;