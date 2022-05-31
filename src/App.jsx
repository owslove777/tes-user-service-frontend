import "./App.css";
import Auth from "./components/user_service/Auth";
import CheckUserType from "./components/user_service/CheckUserType";
import RegisterTalent from "./components/talent/RegisterTalent";
import SignupDetail from "./components/user_service/SignupDetail";
import Home from "./components/talent/Home";
import Login from "./components/user_service/Login";

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function App() {

  return (
    <Router>
    <div className="App">
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
        <Route path="/registerTalent">
          <RegisterTalent />
        </Route>
        <Route path="/signupDetail">
          <SignupDetail />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}
export default App;
