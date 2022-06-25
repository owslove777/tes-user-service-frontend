import React from 'react';
import styles from './StarRatingInfo.module.css';
import { useHistory } from "react-router-dom";
import axios from 'axios';


const StarRatingInfo = ({ categoryId, userId, title, root }) => {

  const history = useHistory();

  function onClick(e) {
    e.preventDefault();
    console.log("title (StarRatingInfo) : " + title);
        if (root == "Register") {
          history.push({
            pathname: "/starRatingRegister",
            state: { categoryId: categoryId, userId: userId, title: title }
          });
        }

  }

  return (
    <li className={styles.starRatingInfo} onClick={onClick}>
      <img className={styles.avartar} src="/images/default_profile.png" alt="profile photo" />
      <div className={styles.info}>
        <h1 className={styles.title}>{title} </h1>
        <p className={styles.categoryId}>카테고리 : {categoryId} </p>
        <p className={styles.userId}>재능인 : {userId} </p>
        <br></br>
      </div>
    </li>

  )

};

export default StarRatingInfo;
