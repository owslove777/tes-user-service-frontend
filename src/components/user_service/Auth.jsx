import React, { useContext } from "react";
import { useEffect } from "react";
import axios from "axios";
import qs from "qs";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

const Auth = () => {

  const history = useHistory();
  const code = new URL(window.location.href).searchParams.get("code");

  const {userInfo, setUserInfo} = useContext(UserContext);

  const getToken = async () => {
    const payload = qs.stringify({
      code: code
    });
    try {
      console.log("spot1");
      // access token 가져오기
      const res = await axios.get(
        // "http://clouddance.hrd-edu.cloudzcp.com/user/users/login/kakao?code=" + code,
          // "http://localhost:30080/users/login/kakao?code="+code,
          process.env.REACT_APP_USER_SERVICE_SERVER+"/user/users/login/kakao?code="+code,             // 백엔드 URL정보(임의)
        payload
      );

      console.log(res.data);

      setUserInfo(res.data);

      const ACCESS_TOKEN =res;
      console.table(ACCESS_TOKEN);
      localStorage.setItem("token", ACCESS_TOKEN);
      console.log("test4 : " + localStorage.getItem("token"));

      if (res.data.userType) {
        // history.push({
        //   pathname: "/home",
        //   state: { userInfo: res.data }
        // });
        history.push("/home");
      }
      else {
        // history.push({
        //   pathname: "/checkUserType",
        //   state: { userInfo: res.data }
        // });
        history.push("/checkUserType");
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
