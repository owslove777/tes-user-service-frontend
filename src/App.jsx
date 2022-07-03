import styles from "./App.module.css";
import Auth from "./components/user_service/Auth";
import CheckUserType from "./components/user_service/CheckUserType";
import TalentRegister from "./components/talent/TalentRegister";
import TalentSearch from "./components/talent/TalentSearch";
import TalentList from "./components/talent/TalentList";
import TalentDetail from "./components/talent/TalentDetail.jsx";
import Home from "./components/talent/Home";
import Login from "./components/user_service/Login";
import NavBarElement from "./components/navbar/NavBarElement";
import ContractRequest from "./components/contract/ContractRequest";
import Logout from "./components/user_service/Logout";


import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import ContractList from "./components/contract/ContractList";
import StarRatingList from "./components/star_rating/StarRatingList";
import StarRatingRegister from "./components/star_rating/StarRatingRegister";
import StarRatingSearch from "./components/star_rating/StarRatingSearch";
import ContractDetail from "./components/contract/ContractDetail";
import PaymentRequest from "./components/payment/PaymentRequest";

import React, { useContext, useState } from 'react';

import { UserContext } from './context/UserContext';

function App() {

  const [userInfo, setUserInfo] = useState([]);
  let navBar = null;

  if (userInfo.id) {
    navBar = (
      <div className={styles.nav}>
        <NavBarElement />
      </div>
    )
  }

  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      <Router>
        {navBar}
        <div className={styles.app}>
          <Switch>
            <Route exact path={["/", '/login']}>
              <Login />
            </Route>
            <Route path="/logout">
              <Logout />
            </Route>
            <Route path="/oauth/kakao/callback">
              <Auth />
            </Route>
            <Route path="/checkUserType">
              <CheckUserType />
            </Route>
            <Route path="/home">
              {userInfo.id ? <Home /> : <Redirect to="/login" />}
            </Route>
            <Route path="/talentSearch">
              {userInfo.id ? <TalentSearch /> : <Redirect to="/login" />}
            </Route>
            <Route path="/talentList">
              {userInfo.id ? <TalentList /> : <Redirect to="/login" />}
            </Route>
            <Route path="/talentDetail">
              {userInfo.id ? <TalentDetail /> : <Redirect to="/login" />}
            </Route>
            <Route path="/talentRegister">
              {userInfo.id ? <TalentRegister /> : <Redirect to="/login" />}
            </Route>
            <Route path="/contractRequest">
              {userInfo.id ? <ContractRequest /> : <Redirect to="/login" />}
            </Route>
            <Route path="/contractList">
              {userInfo.id ? <ContractList /> : <Redirect to="/login" />}
            </Route>
            <Route path="/contractDetail">
              {userInfo.id ? <ContractDetail /> : <Redirect to="/login" />}
            </Route>
            <Route path="/paymentRequest">
              {userInfo.id ? <PaymentRequest /> : <Redirect to="/login" />}
            </Route>
            <Route path="/starRatingList">
              {userInfo.id ? <StarRatingList /> : <Redirect to="/login" />}
            </Route>
            <Route path="/starRatingRegister">
              {userInfo.id ? <StarRatingRegister /> : <Redirect to="/login" />}
            </Route>
            <Route path="/starRatingSearch">
              {userInfo.id ? <StarRatingSearch /> : <Redirect to="/login" />}
            </Route>
          </Switch>
        </div>
      </Router>
    </UserContext.Provider>
  );
}
export default App;
