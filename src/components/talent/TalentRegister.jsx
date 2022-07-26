import React, { useRef, useEffect, useState } from 'react';
import axios from "axios";
import styles from "./TalentRegister.module.css"
import Button from 'react-bootstrap/Button';
import TalentInfo from './TalentInfo';
import useDidMountEffect from '../../utils/useDidMountEffect';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

const TalentRegister = () => {

  const { userInfo } = useContext(UserContext);
  const [talent, setTalent] = useState([]);
  const [register, setRegister] = useState([]);
  const [category, setCategory] = useState([]);

  const categoryRef = useRef();
  const addressRef = useRef();
  const titleRef = useRef();
  const descriptionRef = useRef();

  const [optionBox, setOptionBox] = useState([]);
  const [optionNum, setOptionNum] = useState(1);
  const optionDate = useRef([]);
  const optionTime = useRef([]);
  const optionPrice = useRef([]);
  const optionStatus = useRef([]);
  const [optionInfo, setOptionInfo] = useState([]);
  const [visible, setVisible] =useState(false);


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
        process.env.REACT_APP_BFF_SERVICE_SERVER + "/talents/user/" + userInfo.id
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

  const addOptionBox = () => {

    const tempArr = [...optionBox];
    tempArr.push(
      <li>
        
        {/* dateTime : <input type="text" name="dateTime" placeholder="일시" ref={el => (optionDateTime.current[optionNum] = el)} /> */}
        일시 <input className={styles.addOption} type="date" name="dateTime" placeholder="일시" ref={el => (optionDate.current[optionNum] = el)} />
        &nbsp;<input type="time" className={styles.addOption} name="dateTime" placeholder="일시" ref={el => (optionTime.current[optionNum] = el)} />
        &nbsp;&nbsp;&nbsp;금액 <input className={styles.addOption} type="text" name="price" placeholder="금액(원)" ref={el => (optionPrice.current[optionNum] = el)} />
        {/* 상태 : <input type="text" name="status" placeholder="상태" ref={el => (optionStatus.current[optionNum] = el)} /> */}
        &nbsp;&nbsp;&nbsp;상태 <select className={styles.addOption} ref={el => (optionStatus.current[optionNum] = el)}>
          <option value="ON_SALE" >ON_SALE</option>
          <option value="BEFORE_SALE" >BEFORE_SALE</option>
        </select>

      </li>);
    console.log(tempArr);
    setOptionBox(tempArr);
    setOptionNum(optionNum + 1);

  }

  const validationCheck = () => {

    let validation = true;

    if (!categoryRef.current.value) {
      window.alert("카테고리를 입력하세요.")
      validation = false;
    } else if (!addressRef.current.value) {
      window.alert("활동지역을 입력하세요.")
      validation = false;
    } else if (!titleRef.current.value) {
      window.alert("주제를 입력하세요.")
      validation = false;
    } else if (!titleRef.current.value) {
      window.alert("주제를 입력하세요.")
      validation = false;
    } else if (!descriptionRef.current.value) {
      window.alert("상세내용을 입력하세요.")
      validation = false;
    }

    return validation;

  }

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("spot1");
    if (!validationCheck()) return;
    console.log("spot2");
    setOption();
  }

  const setOption = () => {
    console.log("spot3");
    let tempOption = [];
    for (let i = 1; i < optionNum; i++) {
      console.log("spot4");
      console.log(optionDate.current[i].value);
      console.log(optionTime.current[i].value);
      const newOption = {
        "dateTime": optionDate.current[i].value + " " + optionTime.current[i].value + ":00",
        "id": 0,
        "price": optionPrice.current[i].value,
        "status": optionStatus.current[i].value,
        "talentId": 0
      }
      tempOption = [...tempOption, newOption]
      console.log("tempOption");
      console.log(tempOption);
    }
    setOptionInfo(tempOption);
  }

  useDidMountEffect(() => {
    setRegister(
      {
        "id": 0,
        "userId": userInfo.id,
        "categoryId": categoryRef.current.value,
        "address": addressRef.current.value,
        "title": titleRef.current.value,
        "description": descriptionRef.current.value,
        "options": optionInfo
      }
    )
  }, [optionInfo]);

  const postTalents = async () => {
    console.log("optionInfo");
    console.log(optionInfo);
    console.log("register");
    console.log(register);
    try {
      const res = await axios.post(
        // "http://clouddance.hrd-edu.cloudzcp.com/talent/talents"
        // "http://localhost:30090/talent/talents/"
        process.env.REACT_APP_TALENT_SERVER + "/talents/"
        , register
      );
      console.log(res);
      window.alert("재능 등록 완료");
      setVisible(false);
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
        <h2 className={styles.pageTitle}>재능 등록</h2>
        <div className={styles.buttonArea}>
          <Button className={styles.button} variant="primary" onClick={() => {
            setVisible(!visible);
          }}>
            신규등록+
          </Button>
        </div>
        {visible &&
        <div className={styles.registerArea}>
          <form className={styles.info} onSubmit={onSubmit}>
            <p>재능인 : {userInfo.name}  [ID : {userInfo.id}] </p>
            {/* <p>카테고리 : <input type="text" name="categoryId" placeholder="카테고리" ref={categoryRef} /></p> */}
            <div>카테고리</div>
            <select className={styles.input} ref={categoryRef}>
              <option defaultValue="" value="" ></option>
              {category.map((option) => (
                <option
                  key={option.categoryId}
                  value={option.categoryId}
                >{option.categoryName}</option>
              ))}
            </select>
            <div>활동지역</div>
            <input className={styles.input} type="text" name="address" placeholder="주소" ref={addressRef} />
            <div>주제</div>
            <input className={styles.input} type="text" name="title" placeholder="주제" ref={titleRef} />
            <div>상세내용</div>
            <textArea className={styles.input} type="text" name="description" placeholder="상세내용" ref={descriptionRef} />
            <div className={styles.addButton}>
            <Button  variant="outline-primary" onClick={addOptionBox} >추가 +</Button>
            </div>
            <ul> {optionBox} </ul>
            <div >
            <Button className={styles.regiButton} as="input" type="submit" value="등록하기" />
            </div>
          </form>
        </div>
        }
        <h4 className={styles.subTitle}> 나의 등록 리스트</h4>
        <div className={styles.talentList}>          
          {talent.map((data) => (
            <TalentInfo
              key={data.id}
              categoryId={data.categoryId}
              userId={data.userId}
              title={data.title}
              address={data.address}
              description={data.description}
              options={data.options}
              userName={data.userName}
              categoryName={data.categoryName}
              root="Register"
            />
          ))}
        </div>
      </section>
    </>
  )
}

export default TalentRegister;
