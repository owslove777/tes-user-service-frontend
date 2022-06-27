import React from 'react';
import styles from './Login.module.css';

const Login = props => {

  const REST_API_KEY = process.env.REACT_APP_REST_API_KEY;
  const REDIRECT_URI = process.env.REACT_APP_SERVER+"/oauth/kakao/callback";
  // const REDIRECT_URI = "http://localhost:3000/oauth/kakao/callback";
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;


  return (
    <>
      <section className={styles.login}>
        <section>
        <h1 className={styles.text}>T E S</h1>
          <p className={styles.text}><i>Talent Exchange System</i></p>
          <ul className={styles.list}>
            <li className={styles.item}>
              <a href={KAKAO_AUTH_URL}><img className={styles.button} src="kakao_login.png" id="kakao-login-btn" /></a>
            </li>
          </ul>

        </section>
      </section>
    </>
  );
};

export default Login;
