import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import styles from './TalentList.module.css';


import TalentInfo from './TalentInfo';

const TalentList = () => {

  const inputRef = useRef();
  
  const [categoryId, setCategoryId] = useState(1);
  const [address, setAddress] = useState(0);

  const handleSearch = () => {
    const value = inputRef.current.value;
    setCategoryId(value);
    console.log("value : " +categoryId);
  };
  
  const onClick = () => {
    handleSearch();
  }

  const onKeyPress = event => {
    if(event.key === 'Enter') {
      handleSearch();
    }
    
  }

    
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
      <section className={styles.talentList}>
        <h1 className={styles.title}>Talent List</h1>
        <input className={styles.input} type="search" placeholder="Search..." onKeyPress={onKeyPress} />
        <button 
          ref={inputRef}
          className={styles.button} 
          type="submit" 
          onClick={onClick}>
          <img className={styles.buttonImg} src="/images/search.png" alt="search" />
        </button>
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
