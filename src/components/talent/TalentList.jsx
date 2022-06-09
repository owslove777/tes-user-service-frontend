import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import styles from './TalentList.module.css';


import TalentInfo from './TalentInfo';

const TalentList = () => {

   
  const [talents, setTalents] = useState([]);

  const getTalents = async () => {
    try {
      const res = await axios.get(
        // "http://clouddance.hrd-edu.cloudzcp.com/talent/talents"
          "http://localhost:30090/talent/talents/" //+categoryId
      );

      console.log("res.data : " + res.data);
      setTalents(res.data);
      console.log("talents : " + talents);

    } catch (err) {
      console.log(err);    
    }
  };
  useEffect(() => {
    getTalents();
  }, []);

  return (
      <section>

        {talents.map((data) => (
              <TalentInfo
                categoryId = {data.categoryId}
                userId = {data.userId}
                title = {data.title}
                address = {data.address}
              />
          ))}
      </section>
  );
      
};

export default TalentList;
