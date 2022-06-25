import React, { useRef, useEffect, useState } from 'react';
import axios from "axios";
import { useHistory ,useLocation } from "react-router-dom";
import styles from "./StarRatingRegister.module.css"
import Button from 'react-bootstrap/Button';


  const StarRatingRegister = () => {

  const location = useLocation();
  const data = location.state;
  const history = useHistory();

  console.log("data (StarRatingRegister) : " + JSON.stringify(data));

  const [register, setRegister] = useState([]);

  const titleRef = useRef();
  const ratingRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();

    setRegister(
      {
        "id": 0,
        "userId": data.userId,
        "categoryId": data.categoryId,
        "title": "요가",
        "description" : ratingRef.current.value,
        "options": []
      }
    )

    console.log(ratingRef.current.value)
    alert("리뷰가 등록되었습니다");

  }


  const postStarRatings = async () => {
    try {
      const res = await axios.post(
        // "http://clouddance.hrd-edu.cloudzcp.com/talent/talents"
        // "http://localhost:30090/talent/talents/"
        process.env.REACT_APP_STAR_RATING_SERVER+"/talent/talents/" // url변경
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
      <h1 className={styles.title}>별점 등록</h1>
      <div className={styles.starRatingList}>
      <h4></h4>
        <form className={styles.info} onSubmit={onSubmit}>
          <p>재능인ID : {data.userId}  </p>
          <p>카테고리 : {data.categoryId} </p>
          <p>주제 : {data.title} </p>
          <label>별점 : </label>
          <select className={styles.select} ref={ratingRef}>
            <option value="1"> 1 </option>
            <option value="2"> 2 </option>
            <option value="3"> 3 </option>
            <option value="4"> 4 </option>
            <option value="5"> 5 </option>
          </select>
          <p />
          <Button className={styles.button} as="input" type="submit" value="등록하기" />
        </form>
      </div>




    </section>


  </>)


}

export default StarRatingRegister;
