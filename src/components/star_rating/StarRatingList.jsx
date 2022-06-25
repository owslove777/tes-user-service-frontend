import axios from 'axios';
import React, { useEffect, useState } from 'react';

import styles from './StarRatingList.module.css'
import StarRatingInfo from './StarRatingInfo';

const StarRatingList = () => {

  const [starRatings, setStarRatings] = useState([]);


  const getStarRatings = async () => {

    try {
      const res = await axios.get(
        // "http://clouddance.hrd-edu.cloudzcp.com/contract/contracts/"
        // "http://localhost:30100/contract/contracts/"
        process.env.REACT_APP_STAR_RATING_SERVER+"/talent/talents/"
      );

      console.log("res.data : " + JSON.stringify(res.data));
      console.log("-----------");

      setStarRatings(res.data);
      console.log("starRatings :" + JSON.stringify(starRatings));

    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getStarRatings();
  }, [])

  console.log("starRatings (useEffect):" + JSON.stringify(starRatings));
  ;


  return ( <>
    <section className={styles.starRatingList}>
        <h4> 재능 리스트</h4>
        <div>
        {starRatings.map((data) => (
          <StarRatingInfo
          key={data.id}
          categoryId={data.categoryId}
          userId={data.userId}
          title={data.title}
          root="Register"
          />
        ))}

      </div>
    </section>


  </>)
}

export default StarRatingList;
