import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import styles from './TalentSearch.module.css'
import TalentInfo from './TalentInfo';

const TalentSearch = () => {

  const [talents, setTalents] = useState([]);
  // const [url, setUrl] = useState("http://localhost:30090/talent/talents/");
  const [url, setUrl] = useState(process.env.REACT_APP_TALENT_SERVER+"/talent/talents/");

  const cateRef = useRef();
  const addrRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    if (cateRef.current.value || addrRef.current.value)
      setUrl(process.env.REACT_APP_TALENT_SERVER+`/talent/talents/category/${cateRef.current.value}?address=${addrRef.current.value}`)
    else
      setUrl(process.env.REACT_APP_TALENT_SERVER+"/talent/talents/");

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
    <section className={styles.talentSearch}>
      <div className={styles.talentSearchBox}>
          <h1 className={styles.title}>재능인 조회</h1>
          <form onSubmit={onSubmit}>
            <input className={styles.input} type="text" name="categoryId" placeholder="카테고리" ref={cateRef} />
            <input className={styles.input} type="text" name="address" placeholder="주소" ref={addrRef} />
            <button
              className={styles.button}
              type="submit">
              <img className={styles.buttonImg} src="/images/search.png" alt="search" />
            </button>
          </form>
          <div className={styles.talentList}>
          {/* <TalentInfo categoryId={talents[0].categoryId} /> */}
            {talents.map((data) => (
              <TalentInfo
                categoryId={data.categoryId}
                userId={data.userId}
                title={data.title}
                address={data.address}
                description={data.description}
                options={data.options}
                root="Search"
              />
            ))}
          </div>
      </div>
    </section>

  );
}

export default TalentSearch;
