import React from 'react';
import { useHistory } from "react-router-dom";

const Logout = (props) => {

  const history = useHistory();
  
  console.log("test1 : " + localStorage.getItem("token"));
  localStorage.setItem("token", null);
  console.log("test2 : " + localStorage.getItem("token"));

  history.push("/login");
}

export default Logout;
