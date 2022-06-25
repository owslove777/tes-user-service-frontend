import React from 'react';
import styles from './StarRatingResultInfo.module.css';
import { useHistory } from "react-router-dom";
import axios from 'axios';


const StarRatingResultInfo = ({ categoryId, userId, title, rating, root }) => {


    //  function onClick(e) {
    //   e.preventDefault();
    //   console.log("title (StarRatingResultInfo) : " + title);
    // }

  return (
 //   <li className={styles.starRatingResultInfo} onClick={onClick}>
      <li className={styles.starRatingResultInfo}>
      <img className={styles.avartar} src="/images/default_profile.png" alt="profile photo" />
      <div className={styles.info}>
        <h1 className={styles.title}>{title} </h1>
        <p className={styles.categoryId}>카테고리 : {categoryId} </p>
        <p className={styles.userId}>재능인 : {userId} </p>
        <p className={styles.rating}>평점 : {rating} </p>
        <br></br>
      </div>
    </li>

  )

};

export default StarRatingResultInfo;
