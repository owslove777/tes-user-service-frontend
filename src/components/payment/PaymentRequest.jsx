import axios from 'axios';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router-dom';
import useDidMountEffect from '../../utils/useDidMountEffect';
import styles from './PaymentRequest.module.css';

const PaymentRequest = (props) => {

  const history = useHistory();
  const [contractStatus, setContractStatus] = useState();
  const location = useLocation();
  const data = location.state;

  console.log(data);

  const onClick = () => {
    setContractStatus("PAID");
  }

  const postPayment = async () => {
    // try {
    //   const res = await axios.post(

    //   )
    // }

  }

  const putContractStatus = async () => {
    try {
      const res = await axios.put(
        // "http://clouddance.hrd-edu.cloudzcp.com/talent/talents"
        // "http://localhost:30090/talent/talents/"
        process.env.REACT_APP_CONTRACT_SERVER + "/contracts/" + data.id + "/" + contractStatus
      )
      console.log(res);
      window.alert("결제가 완료되었습니다.");
    } catch (err) {
      console.log(err);
      window.alert("결제오류가 발생했습니다.");
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
    <section className={styles.paymentRequest}>
      <h1>결제 요청</h1>
      <h5>주제</h5>
      <p className={styles.title}>{data.title} </p>
      <h5>재능인</h5>
      <p className={styles.description}>{data.talentUserNm} </p>
      <h5>옵션ID</h5>
      <p className={styles.description}>{data.talentItemId} </p>
      <h5>승인일시</h5>
      <p className={styles.description}>{data.acceptedDateTime} </p>
      <h5>결제금액</h5>
      <p className={styles.description}>{data.price}원</p>
      <Button variant="primary" className={styles.acceptButton} as="input" type="submit" value="결제하기" onClick={() => { onClick() }} />
    </section>
  )

}

export default PaymentRequest;
