import React from "react";
import { useEffect } from "react";
import axios from "axios";
import qs from "qs";
import { useHistory } from "react-router-dom";

const Auth = () => {
  // const REST_API_KEY = process.env.REACT_APP_REST_API_KEY;
  // const REDIRECT_URI = process.env.REACT_APP_SERVER+"/kakao/oauth/kakao/callback";
  // const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;

  const code = new URL(window.location.href).searchParams.get("code");

  const history = useHistory();

  const getToken = async () => {
    const payload = qs.stringify({
      // grant_type: "authorization_code",
      // client_id: REST_API_KEY,
      // redirect_uri: REDIRECT_URI,
      code: code,
      // client_secret: CLIENT_SECRET,
    });
    try {
      console.log("spot1");
      // access token 가져오기
      const res = await axios.get(
        // "https://kauth.kakao.com/oauth/token",
        "http://clouddance.hrd-edu.cloudzcp.com/user/users/login/kakao?code="+code,
        // "http://localhost:8080/users/login/kakao?code="+code,             // 백엔드 URL정보(임의)
        payload
      );
      console.log("res");
      if(res.data.userType){
        history.replace("/mainHome");
      }
      else{
        history.replace("/checkUserType");
      }


    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getToken();
  }, []);
  return null;
};

export default Auth;
