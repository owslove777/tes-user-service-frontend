import axios from 'axios';
import React, { useContext, useEffect, useRef, useState } from 'react';
import styles from './TalentSearch.module.css'
import TalentInfo from './TalentInfo';

const TalentSearch = () => {

  const [talents, setTalents] = useState([]);
  // const [url, setUrl] = useState("http://localhost:30090/talent/talents/");
  const [url, setUrl] = useState(process.env.REACT_APP_TALENT_SERVER + "/talents/");
  const [category, setCategory] = useState([]);

  const [checkCategory, setCheckCategory] = useState();
  const addrRef = useRef();

  const handleClickOption = (e) => {
    setCheckCategory(e.target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    if (checkCategory)
      setUrl(process.env.REACT_APP_TALENT_SERVER + `/talents/category/${checkCategory}?address=${addrRef.current.value}`)
    else if (!checkCategory && addrRef.current.value)
      window.alert("지역검색시, 카테고리는 필수로 입력해주세요.");
    else
      setUrl(process.env.REACT_APP_TALENT_SERVER + "/talents/");


    console.log(url);
  }

  const getTalentCategory = async () => {
    try {
      const res = await axios.get(
        process.env.REACT_APP_TALENT_SERVER + '/category'
      )
      console.log("res");
      console.log(res.data);
      setCategory(res.data);
    } catch (e) {

    }
  }
  useEffect(() => {
    getTalentCategory();
  }, []);

  const getTalents = async () => {
    try {
      const res = await axios.get(
        // "http://clouddance.hrd-edu.cloudzcp.com/talent/talents"
        url
      );

      console.log("res.data : " + JSON.stringify(res.data));

      if (Array.isArray(res.data)) {
        setTalents(res.data);
      } else {
        setTalents([res.data]);
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
          {/* <input className={styles.input} type="text" name="categoryId" placeholder="카테고리(필수)" ref={cateRef} /> */}
          <select onChange={e => handleClickOption(e)}>
            <option defaultValue="">카테고리</option>
            {category.map((option) => (
              <option
                key={option.categoryId}
                value={option.categoryId}
              >{option.categoryName}</option>
            ))}
          </select>
          <input className={styles.input} type="text" name="address" placeholder="지역(선택)" ref={addrRef} />
          <button
            className={styles.button}
            type="submit">
            <img className={styles.buttonImg} src="/images/search.png" alt="search" />
          </button>
        </form>
        <div className={styles.talentList}>
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
