import React, { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import styles from './WelcomePage.module.css';

const WelcomePage = () => {

  const {userInfo} = useContext(UserContext);

  return (
    <section className={styles.welcome}>
        {/* <h2 className={styles.title}>[{props.userType}] <br></br> {props.name}님 환영합니다.</h2> */}
        <h2 className={styles.title}>[{userInfo.userType}] <br></br> {userInfo.name}님 환영합니다.</h2>
    </section>
  );
}

export default WelcomePage;
