import React, { useState, useEffect, useContext } from 'react';
import styles from './TalentProfile.module.css';

import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';

const TalentProfile = (props) => {

  const data = props.data;
  const talentOption = props.talentOption;

  console.log("data1 : " + data);
  console.log("talentOption1 : " + talentOption);

  const [selectOption, setSelectOption] = useState([]);
  const history = useHistory();
  const {userInfo} = useContext(UserContext);
  const [buttonOnoff, setButtonOnoff] = useState(false);

  let button = null;

  if (userInfo.userType == "user" & buttonOnoff) { // user이면서 요청재능 선택시, 버튼 활성화
    button = <Button className={styles.button} as="input" type="submit" value="요청하기" onClick={requestContract} />
  } else { // 그외 비활성화
    button = <Button className={styles.button} as="input" type="submit" value="요청하기" onClick={requestContract} disabled />
  }

  const handleClickOption = (optionData, e) => {
    // e.preventDefault();
    setSelectOption(optionData);
    setButtonOnoff(true);

    console.log("test2 : " + talentOption.id);
    console.log("test3 : " + e.currentTarget.value);
    console.log("test4 : ");
    console.log(optionData);

    console.log("selectOption : " + optionData);

  }

  function requestContract() {
    console.log("test5 : " + selectOption);

    history.push({
      pathname: "/contractRequest",
      state: { data: data, selectOption: selectOption }
    });
    { console.log("request_data : " + data.userId) };
    { console.log("request_selectOption : " + selectOption) };

  }

  return (
    <>
      <section className={styles.talentProfile}>
        <div className={styles.pageTitle}>
          <h2>재능인 프로필</h2>
        </div>
        <div className={styles.profile}>
          <img className={styles.avartar} src="/images/default_profile.png" alt="profile photo" />
          <p className={styles.userId}>재능인 "{data.userName}" [{data.userId}] </p>
        </div>
        <section className={styles.info}>
          <h5>주제</h5>
          <p className={styles.title}>{data.title} </p>
          <h5>카테고리</h5>
          <p className={styles.categoryId}>{data.categoryName} </p>
          <h5>지역</h5>
          <p className={styles.address}>{data.address} </p>
          <h5>내용</h5>
          <p className={styles.description}>{data.description} </p>
          <h5>요청 재능 선택</h5>
          <div className={styles.input}>
          {talentOption.map((optionData) => (
            <p key={optionData.id}>
              <input                
                type="radio"
                value={optionData.id}
                checked={Number(selectOption.id) === optionData.id}
                onChange={e => handleClickOption(optionData, e)}
                disabled={optionData.status == "ON_SALE" ? false : true}
              ></input> 옵션ID : {optionData.id} | 일시 : {optionData.dateTime} | 가격 : {optionData.price} | 상태 : {optionData.status}
              {console.log("selectOps2 : ")}
              {console.log(selectOption)}
              {console.log("optionData.id2 : " + optionData.id)}
            </p>
          ))}
          </div>
          <br></br>
        </section>
        {/* <Button className={styles.button} as="input" type="submit" value="요청하기" onClick={requestContract}/> */}
        {button}
      </section>
    </>
  )
}

export default TalentProfile;
