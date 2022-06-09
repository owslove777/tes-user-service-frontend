import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import Styles from './TalentSearch.module.css'
import TalentInfo from './TalentInfo';

const TalentSearch = () => {

  const [talents, setTalents] = useState([]);
  const [url, setUrl] = useState("http://localhost:30090/talent/talents/");

  const cateRef = useRef();
  const addrRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    if (cateRef.current.value || addrRef.current.value)
      setUrl(`http://localhost:30090/talent/talents/${cateRef.current.value}?address=${addrRef.current.value}`)
    else
      setUrl("http://localhost:30090/talent/talents/");

    console.log(url);
  }

  const getTalents = async () => {
    try {
      const res = await axios.get(
        // "http://clouddance.hrd-edu.cloudzcp.com/talent/talents"
        url
      );

      console.log("res.data : " + res.data);
      console.log("talents1 : " + talents);

      if (Array.isArray(res.data)) {
        setTalents(res.data);
      } else {
        setTalents([res.data]);
      }
      console.log("talents2 : " + talents);

    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getTalents();
  }, [url]);


  return (
    <section className={Styles.talentSearch}>
      <div className={Styles.container}>
        <section className={Styles.talentSearchBox}>
          <h1 className={Styles.title}>재능인 조회</h1>
          <form onSubmit={onSubmit}>
            <input className={Styles.input} type="text" name="categoryId" placeholder="카테고리" ref={cateRef} />
            <input className={Styles.input} type="text" name="address" placeholder="주소" ref={addrRef} />
            <button
              className={Styles.button}
              type="submit">
              <img className={Styles.buttonImg} src="/images/search.png" alt="search" />
            </button>
          </form>
          {talents.map((data) => (
            <TalentInfo
              categoryId={data.categoryId}
              userId={data.userId}
              title={data.title}
              address={data.address}
            />
          ))}
        </section>
      </div>
    </section>

  );
}

export default TalentSearch;
