import axios from 'axios';
import React, { useEffect, useState } from 'react';

import styles from './StarRatingSearch.module.css'
import StarRatingResultInfo from './StarRatingResultInfo';

const StarRatingSearch = () => {

  const [starRatings, setStarRatings] = useState([]);

  const getStarRatings = async () => {

    try {
      const res = await axios.get(
        // "http://clouddance.hrd-edu.cloudzcp.com/contract/contracts/"
        // "http://localhost:30100/contract/contracts/"
        process.env.REACT_APP_STAR_RATING_SERVER+"/star-rates/" // url 변경
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
    <section className={styles.starRatingSearch}>
        <h2> 전체 별점 리스트</h2>
        <div className={styles.listBox}>
        {starRatings.map((data) => (
          <StarRatingResultInfo
          key={data.id}
          talentId={data.talentId}
          title={data.title}
          rating={data.rate}
          comment={data.comment}
          requestUserId={data.requestUserId}
          rateDate={data.rateDate}
          root="Search"
          />
        ))}
        </div>
    </section>


  </>)
}

export default StarRatingSearch;
