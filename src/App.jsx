import styles from "./App.module.css";
import Auth from "./components/user_service/Auth";
import CheckUserType from "./components/user_service/CheckUserType";
import TalentRegister from "./components/talent/TalentRegister";
import TalentSearch from "./components/talent/TalentSearch";
import TalentList from "./components/talent/TalentList";
import TalentDetail from "./components/talent/TalentDetail.jsx";
import SignupDetail from "./components/user_service/SignupDetail";
import Home from "./components/talent/Home";
import Login from "./components/user_service/Login";
import NavBarElement from "./components/navbar/NavBarElement";


import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function App() {

  return (
    <Router> 
      <div className={styles.nav}>
        <NavBarElement />
      </div>
      <div className={styles.app}>
        <Switch>
          <Route exact path={["/", '/login']}>
            <Login />
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
          <Route path="/signupDetail">
            <SignupDetail />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;
