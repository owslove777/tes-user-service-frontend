import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import styles from './MyPage.module.css';

const MyPage = () => {

  const { userInfo } = useContext(UserContext);
  const [myPageInfo, setMyPageInfo] = useState([]);

  console.log("userInfo");
  console.log(userInfo);

  let showActivity = [];
  let showLink = null;

  if (userInfo.userType == "seller") {
    showActivity[0] = <span className={styles.description}>마지막 업데이트 일시 : {myPageInfo.lastServiceDate} </span>
    showActivity[1] = <span className={styles.description}>받은요청 종료 건수 : {myPageInfo.userRequestCntDone} </span>
    showActivity[2] = <span className={styles.description}>총 받은요청 건수 : {myPageInfo.userRequestCntTotal} </span>
    showActivity[3] = <span className={styles.description}>총 별점 개수 : {myPageInfo.myServiceCnt} </span>
    showActivity[4] = <span className={styles.description}>총 별점 평균 : {myPageInfo.myServiceRate} </span>
    showLink = <Link className={styles.description} to="/talentRegister">재능등록내역</Link>

  } else if (userInfo.userType == "user") {
    showActivity[0] = <span className={styles.description}>마지막 업데이트 일시 : {myPageInfo.lastServiceDate} </span>
    showActivity[1] = <span className={styles.description}>요청의뢰 종료 건수 : {myPageInfo.myRequestCntDone}</span>
    showActivity[2] = <span className={styles.description}>총 요청의뢰 건수 : {myPageInfo.myRequestCntTotal} </span>
  }
  const getMyPage = async () => {
    try {
      const res = await axios.get(
        process.env.REACT_APP_MY_PAGE_SERVER + "/mypage/user/" + userInfo.id
      )
      console.log(res.data);
      setMyPageInfo(res.data);
    }
    catch (e) {
      console.log(e)
    }
  }
  useEffect(() => {
    getMyPage();
  }, []);

  return (
    <>
      <section className={styles.myPage}>
        <div className='pageTitle'>
          <h2>마이페이지</h2>
        </div>
        <div className={styles.imageArea}>
          <img className={styles.imageProfile} src={userInfo.imageUrl}></img>
          <div className={styles.userInfo}>
            <p>이름 : {userInfo.name} </p>
            <p>계정 : {userInfo.id} </p>
            <p>타입 : {userInfo.userType} </p>
          </div>
        </div>
        <div className={styles.infoArea}>
          <div className={styles.subTitle}>
            <h4>활동 요약</h4>
          </div>
          {showActivity}
          <div className={styles.subTitle}>
            <h4>활동 내역</h4>
          </div>
          {showLink}
          <Link className={styles.description} to="/contractList">계약내역</Link>
          <Link className={styles.description} to="/starRatingList">별점내역</Link>
          <div className={styles.subTitle}>
            <h4>설정</h4>
          </div>
          <Link className={styles.description} to="#">공지사항</Link>
          <Link className={styles.description} to="#">TES안내</Link>
          <Link className={styles.description} to="#">TES버전</Link>
        </div>

      </section>
    </>
  )

}

export default MyPage;
