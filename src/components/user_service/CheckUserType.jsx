import React from "react";
import { useState } from "react";
import axios from "axios";
import { useHistory, useLocation } from "react-router-dom";

const CheckUserType = () => {

  const history = useHistory();
  const location = useLocation();

  const { id, email, name, imageUrl, status, address, userType } = location.state.userInfo;
  const [state, setState] = useState({ selectUserType: null });

  console.log(location.state.userInfo);

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
          baseURL: 'http://localhost:30080',
          //withCredentials: true,
        }
      ).then(function (res) {
        console.log(res.data);
        window.alert("회원가입을 축하드립니다.");
        history.push({
          pathname: "/home",
          state: { userInfo: location.state.userInfo, userType: state.selectUserType }
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
      <ul>
        <h2>재능인이십니까?</h2>
        <button onClick={clickTalent}>Yes</button>
        <button onClick={clickUser}>No</button>
      </ul>
    </>
  );
};

export default CheckUserType;
