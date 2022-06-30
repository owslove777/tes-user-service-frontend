import React from 'react';
import styles from './StarRatingInfo.module.css';
import { useHistory } from "react-router-dom";
import axios from 'axios';


const StarRatingInfo = ({ talentId, userId, title, description , root }) => {

  const history = useHistory();

  function onClick(e) {
    e.preventDefault();
    console.log("title (StarRatingInfo) : " + title);
        if (root == "Register") {
          history.push({
            pathname: "/starRatingRegister",
            state: { talentId: talentId, userId: userId, title: title }
          });
        }

  }

  return (
    <li className={styles.starRatingInfo} onClick={onClick}>
      <img className={styles.avartar} src="/images/default_profile.png" alt="profile photo" />
      <div className={styles.info}>
        <p className={styles.title}> {title} </p>
        <p className={styles.talentId}>재능 : {talentId} </p>
        <p className={styles.userId}>재능인 : {userId} </p>
        <p className={styles.description}>소개 : {description} </p>
        <br></br>
      </div>
    </li>

  )

};

export default StarRatingInfo;
