import React, { useContext } from "react";
import { useState } from "react";
import axios from "axios";
import { useHistory, useLocation } from "react-router-dom";
import styles from "./CheckUserType.module.css";
import { UserContext } from "../../context/UserContext";

const CheckUserType = () => {

  const history = useHistory();
  // const location = useLocation();

  const { userInfo, setUserInfo } = useContext(UserContext);
  const { id, email, name, imageUrl, status, address, userType } = userInfo;
  // const [state, setState] = useState({ selectUserType: null }); // 불필요여부 확인 및 let
  let selectUserType = null;

  console.log(address);
  console.log(userInfo);

  const signIn = async () => {

    const data = {
      "id": id,
      "email": email,
      "name": name,
      "status": status,
      "imageUrl": imageUrl,
      "address": address,
      "userType": selectUserType
    };

    console.log("selectUserType : " + selectUserType);
    try {
      const res = await axios.put(
        process.env.REACT_APP_USER_SERVICE_SERVER + '/user/users/' + id,
        data
      );
      console.log(res.data);
      setUserInfo(res.data);
      window.alert("회원가입을 축하드립니다.");
      history.push({
        pathname: "/home",
        state: {}
      })
    } catch (err) {
      console.log(err);
    }
  }

  const clickTalent = () => {
    // setState((previousState) => {
    //   previousState.selectUserType = "seller";
    //   return previousState;
    // });
    selectUserType = "seller";
    signIn();
  }

  const clickUser = () => {
    // setState((previousState) => {
    //   previousState.selectUserType = "user";
    //   return previousState;
    // });
    selectUserType = "user";
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
