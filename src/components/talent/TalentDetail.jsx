import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import { UserContext } from '../../context/UserContext';
import styles from './TalentDetail.module.css';
import TalentProfile from './TalentProfile';

const TalentDetail = (props) => {

  const location = useLocation();
  const data = location.state;

  console.log(props);
  console.log(location.state);

  const [talentOption, setTalentOption] = useState([]);

  const {userInfo} = useContext(UserContext);
  console.log(userInfo);

  const popAlert = () => {
    if(userInfo.userType == "seller") {
      window.alert("재능인은 조회만 가능합니다.");    
    }
  }
  useEffect(()=>{
    popAlert();
  }, []);

  const getTalents = async () => {
    try {
      const res = await axios.get(
        // "http://clouddance.hrd-edu.cloudzcp.com/talent/talents"
        // "http://localhost:30090/talent/talents/detail/" + data.userId
        process.env.REACT_APP_BFF_SERVICE_SERVER+"/talents/detail/" + data.talentId
      );

      console.log("userId : " + data.userId);
      console.log("res.data.options : " + res.data.options[0].id);

      setTalentOption(res.data.options);

    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getTalents();
  }, []);

  return (
    <>
      <TalentProfile data={data} talentOption={talentOption}/>
    </>
  )
}

export default TalentDetail;
