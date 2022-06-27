import React, { useRef, useEffect, useState } from 'react';
import axios from "axios";
import styles from "./TalentRegister.module.css"
import Button from 'react-bootstrap/Button';
import TalentInfo from './TalentInfo';
import useDidMountEffect from '../../utils/useDidMountEffect';

const TalentRegister = () => {

  const [talent, setTalent] = useState([]);
  const [register, setRegister] = useState([]);

  const userIdRef = useRef();
  const categoryIdRef = useRef();
  const addressRef = useRef();
  const titleRef = useRef();
  const descriptionRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();

    setRegister(
      {
        "id": 0,
        "userId": userIdRef.current.value,
        "categoryId": categoryIdRef.current.value,
        "address": addressRef.current.value,
        "title": titleRef.current.value,
        "description": descriptionRef.current.value,
        "options": [
          {
            "dataTime": null,
            "id": 0,
            "price": 0,
            "status": "BEFORE_SALE",
            "talentId": 0
          }
        ]
      }
    )
  }

  const getTalents = async () => {
    try {
      const res = await axios.get(
        // "http://clouddance.hrd-edu.cloudzcp.com/talent/talents"
        // "http://localhost:30090/talent/talents/user/2251212836"
        process.env.REACT_APP_TALENT_SERVER + "/talent/talents/user/2251212836"
      );

      if (Array.isArray(res.data)) {
        setTalent(res.data);
      } else {
        setTalent([res.data]);
      }
      console.log("res :" + res.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getTalents();
  }, []);

  const postTalents = async () => {
    try {
      const res = await axios.post(
        // "http://clouddance.hrd-edu.cloudzcp.com/talent/talents"
        // "http://localhost:30090/talent/talents/"
        process.env.REACT_APP_TALENT_SERVER + "/talent/talents/"
        , register
      );
      console.log(res);
    } catch (err) {
      console.log(err);
    }
    getTalents();
  };
  useDidMountEffect(() => {
    postTalents();
  }, [register]);

  return (
    <>
      <section className={styles.talentRegister}>
        <h1 className={styles.title}>재능 등록</h1>
        <div className={styles.talentList}>
          <h4> 신규 등록</h4>
          <form className={styles.info} onSubmit={onSubmit}>
            <p>재능인ID (Temp) : <input type="text" name="userId" placeholder="재능인ID" ref={userIdRef} /> </p>
            <p>카테고리 : <input type="text" name="categoryId" placeholder="카테고리" ref={categoryIdRef} /></p>
            <p>활동지역 : <input type="text" name="address" placeholder="주소" ref={addressRef} /></p>
            <p>주제 : <input type="text" name="title" placeholder="주제" ref={titleRef} /></p>
            <p>상세내용 : <input type="text" name="description" placeholder="상세내용" ref={descriptionRef} /></p>
            <p />
            <Button as="input" type="submit" value="등록하기" />
          </form>
        </div>
        <div className={styles.talentList}>
          <h4> 나의 등록 리스트</h4>
          {talent.map((data) => ( 
            <TalentInfo
              key={data.id}
              categoryId={data.categoryId}
              userId={data.userId}
              title={data.title}
              address={data.address}
              description={data.description}
              options={data.options}
              root="Register"
            />
          ))}
        </div>
      </section>
    </>
  )
}

export default TalentRegister;
