import React, { useContext } from "react";
import { useState } from "react";
import axios from "axios";
import { useHistory, useLocation } from "react-router-dom";
import styles from "./CheckUserType.module.css";
import { UserContext } from "../../context/UserContext";

const CheckUserType = () => {

  const history = useHistory();
  // const location = useLocation();

  const { userInfo } = useContext(UserContext);
  const { id, email, name, imageUrl, status, address, userType } = userInfo;
  const [state, setState] = useState({ selectUserType: null }); // 불필요여부 확인 및 let
 
  console.log(userInfo);

  const signIn = () => {

    console.log("selectUserType : " + state.selectUserType);
    try {
      axios(
        {
          url: '/user/users/' + id,
          method: 'PUT',
          data: {
            "id": id,
            "email": email,
            "name": name,
            "status": status,
            "imageUrl": imageUrl,
            "address": address,
            "userType": state.selectUserType
          },

          // baseURL: 'http://clouddance.hrd-edu.cloudzcp.com',
          // baseURL: 'http://localhost:30080',
          baseUrl: process.env.REACT_APP_USER_SERVICE_SERVER
          //withCredentials: true,
        }
      ).then(function (res) {
        console.log(res.data);
        window.alert("회원가입을 축하드립니다.");
        history.push({
          pathname: "/home",
          state: { userInfo: userInfo, userType: state.selectUserType }
        });
      });
    } catch (err) {
      console.log(err);
    }
  }

  const clickTalent = () => {
    setState((previousState) => {
      previousState.selectUserType = "seller";
      return previousState;
    });
    signIn();
  }

  const clickUser = () => {
    setState((previousState) => {
      previousState.selectUserType = "user";
      return previousState;
    });
    signIn();
  }

  return (
    <>
      <div className={styles.checkUserType}>
        <div className={styles.containerA}>
          <h1> 간편 회원가입 </h1>
        </div>
        <div className={styles.containerB}>
          <h2>'재능인' 인가요?</h2>
          <ul >
            <button className={styles.button} onClick={clickTalent}>Yes</button>
            <button className={styles.button} onClick={clickUser}>No</button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default CheckUserType;
