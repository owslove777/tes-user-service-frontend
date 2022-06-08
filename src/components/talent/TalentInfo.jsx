import React from 'react';
import styles from './TalentInfo.module.css';

const TalentInfo = ({ categoryId, userId, title, address }) => {
  return (
    <li className={styles.talentInfo}>
      <img className={styles.avartar} src="/images/default_logo.png" alt="profile photo" />
      <div className={styles.info}>
        <h1 className={styles.title}>{title} </h1>
        <p className={styles.categoryId}>카테고리 : {categoryId} </p>
        <p className={styles.userId}>재능인 : {userId} </p>
        <p className={styles.address}>지역 : {address} </p>
        <br></br>
      </div>
    </li>

  )

};

export default TalentInfo;
