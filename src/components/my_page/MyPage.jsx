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
    showActivity[0] = <p>마지막 업데이트 일시 : {myPageInfo.lastServiceDate} </p>
    showActivity[1] = <p>받은요청 종료 건수 : {myPageInfo.userRequestCntDone} </p>
    showActivity[2] = <p>총 받은요청 건수 : {myPageInfo.userRequestCntTotal} </p>
    showActivity[3] = <p>총 별점 개수 : {myPageInfo.myServiceCnt} </p>
    showActivity[4] = <p>총 별점 평균 : {myPageInfo.myServiceRate} </p>
    showLink = <Link to="/talentRegister">재능등록내역</Link>

  } else if (userInfo.userType == "user") {
    showActivity[0] = <p>마지막 업데이트 일시 : {myPageInfo.lastServiceDate} </p>
    showActivity[1] = <p>요청의뢰 종료 건수 : {myPageInfo.myRequestCntDone}</p>
    showActivity[2] = <p>총 요청의뢰 건수 : {myPageInfo.myRequestCntTotal} </p>
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
          {showActivity}
          <h4>활동 내역</h4>
          {showLink}
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
