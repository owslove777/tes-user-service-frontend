import { Badge } from 'react-bootstrap';
import React from 'react';
import styles from './ContractInfo.module.css';
import { useHistory } from 'react-router-dom';

const ContractInfo = ({
  id,
  talentItemId,
  talentId,
  talentUserId,
  talentUserNm,
  userId,
  userNm,
  contractStatus,
  requestDateTime,
  acceptedDateTime,
  rejectedDateTime,
  performedDateTime,
  canceledDateTime }) => {

  const history = useHistory();

  function onClick(e) {
    e.preventDefault();
    console.log("talentId : " + talentId);
    console.log("contractStatus : " + contractStatus);
    //재능인 조건 추가 필요
    // if (contractStatus == "PERFORMED") {
      console.log("contractStatus : " + contractStatus);
      if (contractStatus == "ACCEPT_REQUESTED") {
      history.push({
        pathname: "/contractDetail",
        state: { 
          id: id, 
          talentItemId: talentItemId, 
          talentId: talentId, 
          talentUserId: talentUserId, 
          talentUserNm: talentUserNm, 
          userId: userId, 
          userNm: userNm,
          contractStatus: contractStatus,
          requestDateTime: requestDateTime,
          acceptedDateTime: acceptedDateTime,
          rejectedDateTime: rejectedDateTime,
          performedDateTime: performedDateTime,
          canceledDateTime: canceledDateTime
        }
      });
    }
    else if (contractStatus == "ACCEPTED") {
      if(window.confirm("결제를 진행하시겠습니까?")){
        history.push({
          pathname: "/paymentRequest",
          state: {}
        });
      }
    }    
  }

  let setContractStatus;

  if (contractStatus == "BEFORE_CONTRACT") {
    setContractStatus = <Badge bg="warning">{contractStatus}</Badge>
  }
  else if (contractStatus == "ACCEPT_REQUESTED") {
    setContractStatus = <Badge bg="primary">{contractStatus}</Badge>
  }
  else if (contractStatus == "ACCEPTED") {
    setContractStatus = <Badge bg="success">{contractStatus} &gt;&gt; 결제하기</Badge>
  }
  else if (contractStatus == "REJECTED") {
    setContractStatus = <Badge bg="danger">{contractStatus}</Badge>
  }
  else if (contractStatus == "PERFORMED") {
    setContractStatus = <Badge bg="secondary">{contractStatus}</Badge>
  }
  else if (contractStatus == "CANCELED") {
    setContractStatus = <Badge bg="light">{contractStatus}</Badge>
  }
  else {
    setContractStatus = <Badge bg="dark">null</Badge>
  }

  return (
    <li className={styles.contractInfo} onClick={onClick}>
      <img className={styles.avartar} src="/images/default_profile.png" alt="profile photo" />
      <div className={styles.info}>
        <h1 className={styles.title}>Title : {talentId} </h1>
        <p className={styles.talentItemId}>재능옵션 : {talentItemId}</p>
        <p className={styles.talentUserNm}>재능인명 : {talentUserNm} </p>
        <p className={styles.userNm}>요청인명 : {userNm} </p>
        <p className={styles.requestDateTime}>요청일시 : {requestDateTime}</p>
        <p className={styles.badgeStyle}>{setContractStatus}</p>
        <br></br>
      </div>
    </li>
  )
}

export default ContractInfo;
