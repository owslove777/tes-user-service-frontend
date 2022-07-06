import React, { useRef, useEffect, useState } from 'react';
import axios from "axios";
import styles from "./TalentRegister.module.css"
import Button from 'react-bootstrap/Button';
import TalentInfo from './TalentInfo';
import useDidMountEffect from '../../utils/useDidMountEffect';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

const TalentRegister = () => {

  const [talent, setTalent] = useState([]);
  const [register, setRegister] = useState([]);
  const [category, setCategory] = useState([]);
  const { userInfo } = useContext(UserContext);

  const categoryRef = useRef();
  const addressRef = useRef();
  const titleRef = useRef();
  const descriptionRef = useRef();


  const validationCheck = () => {

    let validation = true;

    if(!categoryRef.current.value){
      window.alert("카테고리를 입력하세요.")
      validation = false;
    }else if(!addressRef.current.value){
      window.alert("활동지역을 입력하세요.")
      validation = false;
    }else if(!titleRef.current.value){
      window.alert("주제를 입력하세요.")
      validation = false;
    }else if(!titleRef.current.value){
      window.alert("주제를 입력하세요.")
      validation = false;
    }else if(!descriptionRef.current.value){
      window.alert("상세내용을 입력하세요.")
      validation = false;
    }

    return validation;

  }

  const onSubmit = (e) => {
    e.preventDefault();

    if(!validationCheck()) return ;

    setRegister(
      {
        "id": 0,
        "userId": userInfo.id,
        "categoryId": categoryRef.current.value,
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

  const getTalentCategory = async () => {
    try {
      const res = await axios.get(
        process.env.REACT_APP_TALENT_SERVER + '/category'
      )
      console.log("res");
      console.log(res.data);
      setCategory(res.data);
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    getTalentCategory();
  }, []);

  const getTalents = async () => {
    try {
      const res = await axios.get(
        // "http://clouddance.hrd-edu.cloudzcp.com/talent/talents"
        // "http://localhost:30090/talent/talents/user/2251212836"
        process.env.REACT_APP_TALENT_SERVER + "/talents/user/" + userInfo.id
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
        process.env.REACT_APP_TALENT_SERVER + "/talents/"
        , register
      );
      console.log(res);
      window.alert("재능 등록 완료");
    } catch (err) {
      console.log(err);
      window.alert("재능 등록 오류");
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
            <p>재능인 : {userInfo.name}  [ID : {userInfo.id}] </p>
            {/* <p>카테고리 : <input type="text" name="categoryId" placeholder="카테고리" ref={categoryRef} /></p> */}
            <span>카테고리 : </span>
            <select ref={categoryRef}>
              <option defaultValue="" value="" ></option>
              {category.map((option) => (
                <option
                  key={option.categoryId}
                  value={option.categoryId}
                >{option.categoryName}</option>
              ))}
            </select>
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
