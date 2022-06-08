import React from "react";
import { useEffect } from "react";
import axios from "axios";
import qs from "qs";
import { useHistory } from "react-router-dom";

const Auth = () => {

  const history = useHistory();
  const code = new URL(window.location.href).searchParams.get("code");

  const getToken = async () => {
    const payload = qs.stringify({
      code: code
    });
    try {
      console.log("spot1");
      // access token 가져오기
      const res = await axios.get(
        // "http://clouddance.hrd-edu.cloudzcp.com/user/users/login/kakao?code=" + code,
          "http://localhost:30080/users/login/kakao?code="+code,             // 백엔드 URL정보(임의)
        payload
      );

      console.log(res);
      console.log(res.data);
      console.log(res.data.id);

      const ACCESS_TOKEN =res.data.accessToken;
      localStorage.setItem("token", ACCESS_TOKEN);

      if (res.data.userType) {
        history.push({
          pathname: "/home",
          state: { userInfo: res.data }
        });
      }
      else {
        history.push({
          pathname: "/checkUserType",
          state: { userInfo: res.data }
        });
      }

    } catch (err) {
      console.log(err);
      window.alert("로그인 실패");
      history.push("/login");
      
    }
  };
  useEffect(() => {
    getToken();
  }, []);
  return null;
};

export default Auth;
