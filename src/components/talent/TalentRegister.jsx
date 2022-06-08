import React from 'react';
import { useEffect } from "react";
import axios from "axios";
import qs from "qs";
import { useHistory } from "react-router-dom";

const TalentRegister = (props) => {


  // const postTalent = async () => {
  //   const payload = qs.stringify({
  //     title : title,
      

  //   });
  //   try {
  //     const res = await axios.get(
  //       // "http://clouddance.hrd-edu.cloudzcp.com/talent/talents"
  //       "http://localhost:30090/talent/talents",
  //       payload
  //     );

  //     console.log(res);
  //     console.log(res.data);
  //     console.log(res.data.id);

  //     const ACCESS_TOKEN =res.data.accessToken;
  //     localStorage.setItem("token", ACCESS_TOKEN);

  //     if (res.data.userType) {
  //       history.push({
  //         pathname: "/home",
  //         state: { userInfo: res.data }
  //       });
  //     }
  //     else {
  //       history.push({
  //         pathname: "/checkUserType",
  //         state: { userInfo: res.data }
  //       });
  //     }

  //   } catch (err) {
  //     console.log(err);
  //     window.alert("로그인 실패");
  //     history.push("/login");
      
  //   }
  // };
  // useEffect(() => {
  //   postTalent();
  // }, []);



}

export default TalentRegister;
