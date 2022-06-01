import React from "react";
import { useEffect } from "react";
import axios from "axios";
import qs from "qs";
import { useHistory, useLocation } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import styles from './Home.module.css';


const Home = userInfo => {

  const location = useLocation();

  const { id, email, name, imageUrl, status, address } = location.state.userInfo;
  const userType = (location.state.userType == null) ? location.state.userInfo.userType : location.state.userType ;


  useEffect(() => {
    // const requestOptions = {
    //   method: 'GET',
    //   redirect: 'follow',
    // };

    // fetch(
    //   'http://clouddance.hrd-edu.cloudzcp.com/talents'

    // )
    // .then(response => response.json())
    // .then(result => console.log(result))
    // .catch(error => console.log('error', error));
  })

  return (
    <section className={styles.home}>
      <Header />
      <div className={styles.container}>
        <h2>[{userType}] {name}님 환영합니다.</h2>
      </div>
      <Footer />
    </section>
  );
};

export default Home;
