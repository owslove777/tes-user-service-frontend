import React from "react";
import { useEffect } from "react";
import axios from "axios";
import qs from "qs";
import { useHistory } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import styles from './Home.module.css';


const Home = userInfo => {

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
        <h2>환영합니다.</h2>
      </div>
      <Footer />
    </section>
  );
};

export default Home;
