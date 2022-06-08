import React, { useState } from "react";
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


const Home = () => {

  const location = useLocation();

  const { id, email, name, imageUrl, status, address } = location.state.userInfo;
  const userType = (location.state.userType == null) ? location.state.userInfo.userType : location.state.userType ;



  return (
    <section className={styles.home}>
      <Header/>
      {/* <NavBarElement talents={talents}/> */}
      
      <div className={styles.container}>
        <Sidebar userType={userType} name={name}/>
        <WelcomePage userType={userType} name={name}/>
        {/* <TalentList /> */}
      </div>
      <Footer />
    </section>
  );
};

export default Home;
