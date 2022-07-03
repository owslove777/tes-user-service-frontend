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
        <h1 >마이페이지</h1>
        <div className={styles.imageArea}>
          <img className={styles.imageProfile} src={userInfo.imageUrl}></img>
          <div className={styles.useInfo}>
          <p>{userInfo.name} </p>
          <p>{userInfo.id} </p>
          <p>{userInfo.userType} </p>
          </div>
        </div>
        <div className={styles.infoArea}>
          <h4>활동 요약</h4>
          <p>id : {myPageInfo.id} </p>
          <p>lastServiceDate : {myPageInfo.lastServiceDate} </p>
          <p>myRequestCntDone : {myPageInfo.myRequestCntDone}</p>
          <p>myRequestCntTotal : {myPageInfo.myRequestCntTotal} </p>
          <p>myServiceCnt : {myPageInfo.myServiceCnt} </p>
          <p> myServiceRate : {myPageInfo.myServiceRate} </p>
          <p>userRequestCntDone : {myPageInfo.userRequestCntDone} </p>
          <p>userRequestCntTotal : {myPageInfo.userRequestCntTotal} </p>
          <h4>활동 내역</h4>
          <Link to="/talentRegister">재능등록내역</Link>
          <Link to="/contractList">계약내역</Link>
          <Link to="/starRatingList">별점내역</Link>
          <h4>설정</h4>
          <Link to="#">공지사항</Link>
          <Link to="#">TES안내</Link>
          <Link to="#">TES버전</Link>
        </div>

      </section>
    </>
  )

}

export default MyPage;
