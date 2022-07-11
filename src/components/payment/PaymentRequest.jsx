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
    // setContractStatus("PAID");
    postPayment();
  }

  const postPayment = async () => {
    try {
      const res = await axios.post(
        process.env.REACT_APP_PAYMENT_SERVER + "/payment",
        {
          contractId: data.id,
          amount: data.price
        }
      )
      console.log(res);
      window.alert("결제가 완료되었습니다.");
    } catch (e) {
      console.log(e);
      window.alert("결제오류가 발생했습니다.");
    }
    history.push({
      pathname: "/contractList",
      state: {}
    });

  }

  return (
    <section className={styles.paymentRequest}>
      <h2>결제 요청</h2>
      <section className={styles.paymentArea}>
        <h2 className={styles.brandNm}>T E S</h2>
        <h5>주제</h5>
        <p className={styles.input}>{data.title} </p>
        <h5>재능인</h5>
        <p className={styles.input}>{data.talentUserNm} </p>
        <h5>옵션ID</h5>
        <p className={styles.input}>{data.talentItemId} </p>
        <h5>승인일시</h5>
        <p className={styles.input}>{data.acceptedDateTime} </p>
        <h5>결제금액</h5>
        <p className={styles.input}>{data.price}원</p>

        
      </section>
      <div className={styles.buttonArea}>
      <Button className={styles.button} variant="primary" as="input" type="submit" value="결제하기" onClick={() => { onClick() }} />
      </div>
    </section>
  )

}

export default PaymentRequest;
