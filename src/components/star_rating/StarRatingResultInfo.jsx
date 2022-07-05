import React from 'react';
import styles from './StarRatingResultInfo.module.css';
import { useHistory } from "react-router-dom";
import axios from 'axios';


const StarRatingResultInfo = ({ talentId, title, rating, comment, requestUserId, rateDate,root }) => {


    //  function onClick(e) {
    //   e.preventDefault();
    //   console.log("title (StarRatingResultInfo) : " + title);
    // }

  return (
 //   <li className={styles.starRatingResultInfo} onClick={onClick}>
      <li className={styles.starRatingResultInfo}>
      <img className={styles.avartar} src="/images/default_profile.png" alt="profile photo" />
      <div className={styles.info}>
        <h1 className={styles.title}> {title} </h1>
        <p className={styles.talentId}>재능ID : {talentId} </p>
        <p className={styles.requestUserId}>리뷰자ID : {requestUserId} </p>
        <p className={styles.rating}>별점 : {rating} </p>
        <p className={styles.comment}>리뷰 : {comment} </p>
        <p className={styles.rateDate}>리뷰등록일자 : {rateDate} </p>
        <br></br>
      </div>
    </li>

  )

};

export default StarRatingResultInfo;
