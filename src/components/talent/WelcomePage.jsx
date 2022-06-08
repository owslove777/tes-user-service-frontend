import React from 'react';
import styles from './WelcomePage.module.css';

const WelcomePage = (props) => {
  return (
    <section className={styles.welcome}>
        <h2 className={styles.title}>[{props.userType}] <br></br> {props.name}님 환영합니다.</h2>
    </section>
  );
}

export default WelcomePage;
