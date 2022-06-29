import React, { useContext, useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import qs from "qs";
import { useHistory, useLocation } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import styles from './Home.module.css';
import WelcomePage from "./WelcomePage";
import TalentList from "./TalentList";
import NavBarElement from "../navbar/NavBarElement";
import Sidebar from "../sidebar/Sidebar";
import { UserContext } from "../../context/UserContext";


const Home = () => {

  // const location = useLocation();

  // const userInfomation = useContext(UserContext);
  // console.log(location.state.userInfo);

  // const userInfo = (location.state.userInfo == null) ? userInfomation.userInfo : location.state.userInfo;
  // const { id, email, name, imageUrl, status, address } = location.state.userInfo;
  // const userType = (location.state.userType == null) ? userInfomation.userType : location.state.userType;

  // const userType = "seller";
  // const name = "Jaden"

  const { userInfo } = useContext(UserContext);
  let userType = null;

  if (userInfo.userType == "seller") userType = "재능인(seller)"
  else if(userInfo.userType == "user") userType = "일반인(user)"

  return (
    <section className={styles.home}>
      <div className={styles.container}>
        <div className={styles.imageArea}>
          <img className={styles.imageProfile} src={userInfo.imageUrl}></img>
        </div>
        <h2 className={styles.title}> <br></br>[{userType}] <br></br><br></br> {userInfo.name}님 환영합니다.</h2>
      </div>
    </section>
  );
};

export default Home;
