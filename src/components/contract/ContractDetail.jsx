import { Button } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import styles from './ContractDetail.module.css';
import axios from 'axios';
import useDidMountEffect from '../../utils/useDidMountEffect';

const ContractDetail = (props) => {

  const history = useHistory();
  const location = useLocation();
  const data = location.state;

  console.log(props);
  console.log(location.state);

  const [contractStatus, setContractStatus] = useState();

  function onClick(status) {
    console.log(status);
    setContractStatus(status);
    console.log(contractStatus);
  }

  const putContractStatus = async () => {
    try {
      const res = await axios.put(
        // "http://clouddance.hrd-edu.cloudzcp.com/talent/talents"
        // "http://localhost:30090/talent/talents/"
        process.env.REACT_APP_CONTRACT_SERVER + "/contracts/"+data.id+"/" + contractStatus
      )
      console.log(res);
      if (contractStatus == "ACCEPTED") window.alert("요청을 수락하셨습니다.");
      else if (contractStatus == "REJECTED") window.alert("요청을 거절하셨습니다.");
    } catch (err) {
      console.log(err);
      window.alert("오류가 발생했습니다.");
    }
    history.push({
      pathname: "/contractList",
      state: {}
    });
  };
  useDidMountEffect(() => {
    putContractStatus();
  }, [contractStatus]);

  return (
    <>
      <section className={styles.contractDetail}>
        <h1>'{data.userNm}'님의 요청서 상세</h1>
        <div className={styles.info}>
          <h5>주제</h5>
          <p className={styles.title}>{data.talentId} </p>
          <h5>요청인</h5>
          <p className={styles.categoryId}>{data.userNm} </p>
          <h5>지역</h5>
          <p className={styles.address}>{data.address} </p>
          <h5>요청옵션</h5>
          <p className={styles.description}>{data.talentItemId} </p>
          <h5>요청일시</h5>
          <p className={styles.description}>{data.requestDateTime} </p>
        </div>
        <Button variant="primary" className={styles.acceptButton} as="input" type="submit" value="수락하기" onClick={() => { onClick("ACCEPTED") }} />
        <Button variant="secondary" className={styles.rejectButton} as="input" type="submit" value="거절하기" onClick={() => { onClick("REJECTED") }} />
      </section>
    </>
  )
}

export default ContractDetail;
