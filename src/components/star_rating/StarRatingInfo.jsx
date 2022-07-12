import React from 'react';
import styles from './StarRatingInfo.module.css';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

// const StarRatingInfo = ({ talentId, userId, title, description, root }) => {
const StarRatingInfo = ({ talentId, talentUserId, talentUserNm, userId, userNm, title, price, contractStatus, address, root }) => {

  const history = useHistory();
  const { userInfo } = useContext(UserContext);

  function onClick(e) {
    e.preventDefault();
    console.log("title (StarRatingInfo) : " + title);
    if (userInfo.userType == "user") {
      if (contractStatus != "PERFORMED") {
        window.alert("수행완료(PERFORMED)된 계약건에 대해서만 별점등록이 가능합니다.")
      } else {        
        if (root == "Register") {
          history.push({
            pathname: "/starRatingRegister",
            state: { talentId: talentId, userId: userId, title: title }
          });
        }
      }
    } else if (userInfo.userType == "seller") {
      window.alert("별점등록은 일반인만 가능합니다.")
    }

  }

  return (
    <li className={styles.starRatingInfo} onClick={onClick}>
      <img className={styles.avartar} src="/images/default_profile.png" alt="profile photo" />
      <div className={styles.info}>
        <p className={styles.title}> {title} </p>
        <p className={styles.talentUserNm}>재능인 : {talentUserNm} [{talentId}] </p>
        <p className={styles.address}>지역 : {address} </p>
        <p className={styles.price}>가격 : {price} </p>
        <p className={styles.contractStatus}>진행상태 : {contractStatus} </p>

        {/* <p className={styles.description}>소개 : {description} </p> */}
        <br></br>
      </div>
    </li>

  )

};

export default StarRatingInfo;
