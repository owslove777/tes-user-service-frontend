import axios from 'axios';
import React, { useContext, useEffect, useRef, useState } from 'react';
import styles from './TalentSearch.module.css'
import TalentInfo from './TalentInfo';

const TalentSearch = () => {

  const [talents, setTalents] = useState([]);
  // const [url, setUrl] = useState("http://localhost:30090/talent/talents/");
  const [url, setUrl] = useState(process.env.REACT_APP_TALENT_SERVER+"/talents/");

  const cateRef = useRef();
  const addrRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    if (cateRef.current.value)
      setUrl(process.env.REACT_APP_TALENT_SERVER+`/talents/category/${cateRef.current.value}?address=${addrRef.current.value}`)
    else if (!cateRef.current.value && addrRef.current.value)
      window.alert("검색시, 카테고리는 필수로 입력해주세요.");
    else
      setUrl(process.env.REACT_APP_TALENT_SERVER+"/talents/");

    console.log(url);
  }

  const getTalents = async () => {
    try {
      const res = await axios.get(
        // "http://clouddance.hrd-edu.cloudzcp.com/talent/talents"
        url
      );

      console.log("res.data : " + JSON.stringify(res.data));
      console.log("talents1 : " + JSON.stringify(talents));

      if (Array.isArray(res.data)) {
        setTalents(res.data);
        console.log("if====== : " + talents);
      } else {
        setTalents([res.data]);
        console.log("2 ");
      }
      console.log("talents2 : " + JSON.stringify(talents));

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
            <input className={styles.input} type="text" name="categoryId" placeholder="카테고리(필수)" ref={cateRef} />
            <input className={styles.input} type="text" name="address" placeholder="주소(선택)" ref={addrRef} />
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
                key={data.id}
                categoryId={data.categoryId}
                userId={data.userId}
                title={data.title}
                address={data.address}
                description={data.description}
                options={data.options}
                talentId={data.id}
                root="Search"
              />
            ))}
          </div>
      </div>
    </section>

  );
}

export default TalentSearch;
