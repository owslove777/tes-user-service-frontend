import React from "react";
import { useEffect } from "react";
import axios from "axios";
import qs from "qs";
import { useHistory } from "react-router-dom";

const CheckUserType = userInfo => {

  const history = useHistory();

  const clickTalent = () => {
    try {
      axios(
        {
          url: '/user/users/'+userInfo.id,
          method: 'PUT',
          data: {
            "id": userInfo.id,
            "email": userInfo.email,
            "name": userInfo.name,
            "status": userInfo.status,
            "imageUrl": userInfo.imageUrl,
            "address": userInfo.address,
            "userType": "seller"
          },

          baseURL: 'http://clouddance.hrd-edu.cloudzcp.com',
          //withCredentials: true,
        }
        ).then(function (res) {
          console.log(res.data);
          history.push({
            pathname: "/home",
            state: { userInfo: userInfo }
          });
        });
    } catch (err) {
      console.log(err);
    }
  }

  const clickUser = () => {
    try {
      axios(
        {
          url: '/user/users/' + userInfo.id,
          method: 'PUT',
          data: {
            "id": userInfo.id,
            "email": userInfo.email,
            "name": userInfo.name,
            "status": userInfo.status,
            "imageUrl": userInfo.imageUrl,
            "address": userInfo.address,
            "userType": "user"
          },

          baseURL: 'http://clouddance.hrd-edu.cloudzcp.com',
          //withCredentials: true,
        }
      ).then(function (res) {
        console.log(res.data);
        history.push({
          pathname: "/home",
          state: { userInfo: userInfo }
        });
      });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <h2>재능인이십니까?</h2>
      <button onClick={clickTalent}>Yes</button>
      <button onClick={clickUser}>No</button>
    </>
  );
};

export default CheckUserType;
