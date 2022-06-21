import axios from 'axios';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import useDidMountEffect from '../utils/useDidMountEffect';
import styles from './PaymentRequest.module.css';

const PaymentRequest = (props) => {

  const history = useHistory();
  const [contractStatus, setContractStatus] = useState();

  const onClick = () => {
    setContractStatus("BEFORE_CONTRACT");
  }

  const putContractStatus = async () => {
    try {
      const res = await axios.put(
        // "http://clouddance.hrd-edu.cloudzcp.com/talent/talents"
        // "http://localhost:30090/talent/talents/"
        process.env.REACT_APP_CONTRACT_SERVER + "/contract/contracts/1/" + contractStatus
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
      <Button variant="primary" className={styles.acceptButton} as="input" type="submit" value="결제하기" onClick={() => { onClick() }} />
    </section>
  )

}

export default PaymentRequest;
