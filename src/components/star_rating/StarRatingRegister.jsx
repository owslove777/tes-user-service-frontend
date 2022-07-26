import React, { useRef, useEffect, useState } from 'react';
import axios from "axios";
import { useHistory ,useLocation } from "react-router-dom";
import styles from "./StarRatingRegister.module.css"
import Button from 'react-bootstrap/Button';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import todayTime from '../../utils/todayTime';


  const StarRatingRegister = () => {

  const location = useLocation();
  const data = location.state;
  const history = useHistory();


  console.log("data (StarRatingRegister) : " + JSON.stringify(data));

  const [register, setRegister] = useState([]);
  const {userInfo} = useContext(UserContext); //추가

  const titleRef = useRef();
  const ratingRef = useRef();
  const commentRef = useRef();



  const onSubmit = (e) => {
    e.preventDefault();

    setRegister(
      {
        "id": 0,
        "talentId": data.talentId,
        "title": data.title,
        "rate" : ratingRef.current.value,
        "comment" : commentRef.current.value,
        "requestUserId": userInfo.id,
        "sellerId": data.userId,
        "rateDate": todayTime()
      }
    )

    console.log("requestUserId" , userInfo.id)
    console.log("sellerId" , data.userId)
    console.log("rateDate" , todayTime())
    alert("리뷰가 등록되었습니다");

  }


  const postStarRatings = async () => {
    try {
      const res = await axios.post(
        // "http://clouddance.hrd-edu.cloudzcp.com/talent/talents"
        // "http://localhost:30090/talent/talents/"
        process.env.REACT_APP_STAR_RATING_SERVER+"/star-rate/"
        , register
      );

      console.log("postStarRatings(res.status)======" + res.status);
      if(res.status==200){
            history.push({ pathname: "/starRatingSearch" });
      }

    } catch (err) {
      console.log("err(res.status)======" );
      console.log(err);
    }

  };


  useEffect(() => {
    postStarRatings();
    }, [register]);


  return ( <>
    <section className={styles.starRatingRegister}>
      <h2 className={styles.title}>별점 등록</h2>
      <div className={styles.starRatingList}>
        <form className={styles.info} onSubmit={onSubmit}>
          <p>재능ID : {data.talentId} </p>
          <p>재능명 : {data.title} </p>
          <div>별점 : </div>
          <select className={styles.select} ref={ratingRef}>
            <option value="1"> 1 </option>
            <option value="2"> 2 </option>
            <option value="3"> 3 </option>
            <option value="4"> 4 </option>
            <option value="5"> 5 </option>
          </select>
          <div>리뷰</div>
          <textarea type="text" className={styles.comment} name="comment" placeholder="리뷰를 남겨주세요" ref={commentRef} />
          <p />
          <Button className={styles.button} as="input" type="submit" value="등록하기" />
        </form>
      </div>
    </section>


  </>)


}

export default StarRatingRegister;
