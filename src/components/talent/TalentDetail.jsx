import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import styles from './TalentDetail.module.css';
import TalentProfile from './TalentProfile';

const TalentDetail = (props) => {

  const location = useLocation();
  const data = location.state;

  console.log(props);
  console.log(location.state);

  const [talentOption, setTalentOption] = useState([]);

  

  const getTalents = async () => {
    try {
      const res = await axios.get(
        // "http://clouddance.hrd-edu.cloudzcp.com/talent/talents"
        // "http://localhost:30090/talent/talents/detail/" + data.userId
        process.env.REACT_APP_TALENT_SERVER+"/talent/talents/detail/" + data.userId
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
