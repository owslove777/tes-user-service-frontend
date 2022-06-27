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


import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import ContractList from "./components/contract/ContractList";
import PrivateRoute from "./components/user_service/PrivateRoute";
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
              <Home />
            </Route>
            {/* <PrivateRoute path="/home">
              <Home />
            </PrivateRoute> */}
            <Route path="/talentSearch">
              <TalentSearch />
            </Route>
            <Route path="/talentList">
              <TalentList />
            </Route>
            <Route path="/talentDetail">
              <TalentDetail />
            </Route>
            <Route path="/talentRegister">
              <TalentRegister />
            </Route>
            <Route path="/contractRequest">
              <ContractRequest />
            </Route>
            <Route path="/contractList">
              <ContractList />
            </Route>
            <Route path="/contractDetail">
              <ContractDetail />
            </Route>
            <Route path="/paymentRequest">
              <PaymentRequest />
            </Route>
          </Switch>
        </div>
      </Router>
    </UserContext.Provider>
  );
}
export default App;
