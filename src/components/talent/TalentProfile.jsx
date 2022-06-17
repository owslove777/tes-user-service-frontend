import React, { useState, useEffect } from 'react';
import styles from './TalentProfile.module.css';

import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';

const TalentProfile = (props) => {

  const data = props.data;
  const talentOption = props.talentOption;

  console.log("data1 : " + data);
  console.log("talentOption1 : " + talentOption);

  const [selectOption, setSelectOption] = useState(0);

  const history = useHistory();

  function handleClickOption(e) {
    // e.preventDefault();
    setSelectOption(e.currentTarget.value);

    console.log("test2 : " + talentOption.id);
    console.log("test3 : " + e.currentTarget.value);
    console.log("selectOption : " + selectOption);
  }

  function requestContract() {
    console.log("test4 : " + selectOption);

    history.push({
      pathname: "/contractRequest",
      state: { data: data, selectOption: selectOption }
    });
    {console.log("request_data : "+ data.userId)};
    {console.log("request_selectOption : "+ selectOption)};

  }

  return (
    <>
      <section className={styles.talentProfile}>
        <h1>재능인 프로필</h1>
        <div className={styles.profile}>
          <img className={styles.avartar} src="/images/default_profile.png" alt="profile photo" />
          <p className={styles.userId}>재능인 [ {data.userId} ] </p>
        </div>
        <div className={styles.info}>
          <h5>주제</h5>
          <p className={styles.title}>{data.title} </p>
          <h5>카테고리</h5>
          <p className={styles.categoryId}>{data.categoryId} </p>
          <h5>지역</h5>
          <p className={styles.address}>{data.address} </p>
          <h5>내용</h5>
          <p className={styles.description}>{data.description} </p>
          <h5>요청 재능 선택</h5>
          {talentOption.map(data => (
            <p>
              <input
                type="radio"
                value={data.id}
                checked={Number(selectOption) === data.id}
                onChange={handleClickOption}
                disabled={data.status == "ON_SALE" ? false : true}
              ></input> 옵션ID : {data.id} | 일시 : {data.dateTime} | 가격 : {data.price} | 상태 : {data.status}
              {console.log("selectOps2 : " + selectOption)}
              {console.log("data.id2 : " + data.id)}
            </p>
          ))}
          <br></br>
        </div>
        {/* <Dropdown.Menu show>
          <Dropdown.Header>재능 상품 선택 리스트</Dropdown.Header>
          {talentOption.map(data =>
            <Dropdown.Item eventKey={data.id} onClick={(e) => handleClickOption(data.id, e)}>
              옵션ID : {data.id} | 일시 : {data.dateTime} | 가격 : {data.price} | 상태 : {data.status}
            </Dropdown.Item>
          )}
        </Dropdown.Menu> */}

        <Button className={styles.button} as="input" type="submit" value="요청하기" onClick={requestContract}/>
      </section>
    </>
  )
}

export default TalentProfile;
