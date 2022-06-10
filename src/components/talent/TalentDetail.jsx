import axios from 'axios';
import React, { useEffect } from 'react';
import { useLocation } from "react-router-dom";
import styles from './TalentDetail.module.css';

const TalentDetail = (props) => {

  const location = useLocation();
  const data = location.state;

  console.log(props);
  console.log(location.state);

  return (
    <>
    <section className={styles.talentDetail}>
      <h1>재능인 프로필</h1>
      <div className={styles.profile}>
        <img className={styles.avartar} src="/images/default_profile.png" alt="profile photo" />
        <p className={styles.userId}>재능인 [ {data.userId} ] </p>
      </div>
      <div className={styles.info}>
        <h5>주제</h5>
        <p className={styles.title}>{data.title} </p>
        <h5>카테고리</h5>
        <p className={styles.categoryId}>{data.categoryId} </p>        
        <h5>지역</h5>
        <p className={styles.address}>{data.address} </p>
        <h5>내용</h5>
        <p className={styles.description}>{data.description} </p>
        <br></br>
      </div>

    </section>
    </>
  )
}

export default TalentDetail;
