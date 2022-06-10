import React, { useState, useEffect } from 'react';
import TalentProduction from './TalentProduction';
import styles from './TalentProfile.module.css';

const TalentProfile = (props) => {

    const data = props.data;
    const talentOption = props.talentOption;
    console.log("data1 : " +data );
    console.log("talentOption1 : " +talentOption );

    // const [talentOption, setTalentOption] = useState([]);
    // console.log("props.talentOption : " + props.talentOption);
    // console.log("talentOption : " + talentOption);

    
    // useEffect(() => {
    //   setTalentOption(props.talentOption);
    // }, );
    

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
        <br></br>
        </div>
        <div>
          {talentOption.map((data) => (
            <TalentProduction 
              id={data.id} 
              talentId={data.talentId}
              dateTime={data.dateTime}
              price={data.price}
              status={data.status}
              />
          ))}
      </div>
    </section>
    </>
  )

}

export default TalentProfile;
