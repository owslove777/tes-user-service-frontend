import axios from 'axios';
import React, { useEffect, useState } from 'react';

import styles from './StarRatingList.module.css'
import StarRatingInfo from './StarRatingInfo';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

const StarRatingList = () => {

  const [starRatings, setStarRatings] = useState([]);
  const { userInfo } = useContext(UserContext);

  let uriInfo = null;

  if (userInfo.userType == 'seller') {
    uriInfo = 'talent-user'
  } else if (userInfo.userType == 'user') {
    uriInfo = 'user'
  }

  const getStarRatings = async () => {

    try {
      const res = await axios.get(
        // "http://clouddance.hrd-edu.cloudzcp.com/contract/contracts/"
        // "http://localhost:30100/contract/contracts/"
        // process.env.REACT_APP_TALENT_SERVER+"/talents/"
        // process.env.REACT_APP_TALENT_SERVER + "/talents/user/" + userInfo.id
        // process.env.REACT_APP_CONTRACT_SERVER + "/contracts/user/"+userInfo.id
        process.env.REACT_APP_CONTRACT_SERVER + "/contracts/" + uriInfo + "/" + userInfo.id
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


  return (<>
    <section className={styles.starRatingList}>
      <h2> 나의 별점 리스트</h2>
      <div className={styles.listBox}>
        {starRatings.map((data) => (
          <StarRatingInfo
            key={data.id}
            talentId={data.talentId}
            talentUserId={data.talentUserId}
            talentUserNm={data.talentUserNm}
            userId={data.userId}
            userNm={data.userNm}
            title={data.title}
            price={data.price}
            contractStatus={data.contractStatus}
            address={data.address}
            // description={data.description}
            root="Register"
          />
        ))}

      </div>
    </section>


  </>)
}

export default StarRatingList;
