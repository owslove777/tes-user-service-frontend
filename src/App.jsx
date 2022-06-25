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
import StarRatingList from "./components/star_rating/StarRatingList";
import StarRatingRegister from "./components/star_rating/StarRatingRegister";
import StarRatingSearch from "./components/star_rating/StarRatingSearch";

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
          <Route path="/logout">
            <Logout />
          </Route>
          <Route path="/oauth/kakao/callback">
            <Auth />
          </Route>
          <Route path="/checkUserType">
            <CheckUserType />
          </Route>
          {/* <Route path="/home">
            <Home />
          </Route> */}
          <PrivateRoute path="/home">
            <Home />
          </PrivateRoute>
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
          <Route path="/starRatingList">
            <StarRatingList />
          </Route>
          <Route path="/starRatingRegister">
            <StarRatingRegister />
          </Route>
          <Route path="/starRatingSearch">
            <StarRatingSearch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;
