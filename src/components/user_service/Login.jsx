import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';

const Login = props => {

  const REST_API_KEY = process.env.REACT_APP_REST_API_KEY;
  const REDIRECT_URI = process.env.REACT_APP_SERVER+"/oauth/kakao/callback";
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;


  return (
    <>
    <section>
      <Header />
      <section>
        <h1>Login</h1>
        <a href={KAKAO_AUTH_URL}><img src="kakao_login.png" id="kakao-login-btn"/></a>
      </section>
      <Footer />
    </section>
    </>
  );  
};

export default Login;
