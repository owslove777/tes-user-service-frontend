import React from "react";
import { useEffect } from "react";
import axios from "axios";
import qs from "qs";
import { useHistory } from "react-router-dom";

const CheckUserType = () => {

  const history = useHistory();

  function clickTalent(){
    history.replace("/registerTalent");
  }

  function clickCustom(){
    history.replace("/signupDetail"); 
  }
  
  return (
    <>
      <h2>재능인이십니까?</h2>
      <button onClick={clickTalent}>Yes</button>
      <button onClick={clickCustom}>No</button>

    </>
  );
};

export default CheckUserType;
