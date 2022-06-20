import React from 'react';
import styles from './TalentInfo.module.css';
import { useHistory } from "react-router-dom";
import axios from 'axios';


const TalentInfo = ({ categoryId, userId, title, address, description, options, root }) => {
  
  const history = useHistory();

  function onClick(e) {
    e.preventDefault();
    console.log("categoryId : " + categoryId);
    if (root == "Search") {
      history.push({
        pathname: "/talentDetail",
        state: { categoryId: categoryId, userId: userId, title: title, address: address, description: description, options: options }
      });
    }
  }

  return (
    <li className={styles.talentInfo} onClick={onClick}>
      <img className={styles.avartar} src="/images/default_profile.png" alt="profile photo" />
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
