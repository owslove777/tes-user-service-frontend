import "./App.css";
import Auth from "./components/Auth";
import CheckUserType from "./components/CheckUserType";
import RegisterTalent from "./components/RegisterTalent";
import SignupDetail from "./components/SignupDetail";
import MainHome from "./components/MainHome";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const REST_API_KEY = process.env.REACT_APP_REST_API_KEY;
  const REDIRECT_URI = process.env.REACT_APP_SERVER+"/oauth/kakao/callback";
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  return (
    <Router>
    <div className="App">
      <Switch>
        <Route exact path="/">
          <h1>
            <a href={KAKAO_AUTH_URL}><img src="kakao_login.png" id="kakao-login-btn"/></a>
          </h1>
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
        <Route path="/mainHome">
          <MainHome />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}
export default App;
