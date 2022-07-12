import React from 'react';
import styles from './TalentInfo.module.css';
import { useHistory } from "react-router-dom";
import axios from 'axios';


const TalentInfo = ({ categoryId, userId, title, address, description, options, talentId, userName, categoryName, root }) => {
  
  const history = useHistory();

  function onClick(e) {
    e.preventDefault();
    console.log("categoryId : " + categoryId);
    if (root == "Search") {
      history.push({
        pathname: "/talentDetail",
        state: { categoryId: categoryId, userId: userId, title: title, address: address, description: description, options: options, talentId: talentId, userName: userName, categoryName: categoryName }
      });
    }
  }

  return (
    <li className={styles.talentInfo} onClick={onClick}>
      <img className={styles.avartar} src="/images/default_profile.png" alt="profile photo" />
      <div className={styles.info}>
        <h1 className={styles.title}>{title} </h1>
        <p className={styles.categoryId}>카테고리 : {categoryName} </p>
        <p className={styles.userId}>재능인명 : {userName} [ID : {userId}] </p>
        <p className={styles.address}>활동지역 : {address} </p>
        <br></br>
      </div>
    </li>

  )

};

export default TalentInfo;
