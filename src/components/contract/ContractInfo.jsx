import { Badge } from 'react-bootstrap';
import React from 'react';
import styles from './ContractInfo.module.css';
import { useHistory } from 'react-router-dom';
import ContractStatus from './ContractStatus';

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
    else if (contractStatus == "PAID") { //ContractInfo가 re-redering이 필요.. => 날짜도 찍고 하려면 추가 Component 필요할듯..
      if(window.confirm("계약내용을 수행하셨습니까?")){
        ContractStatus("1", "PERFORMED");
      }else{
        ContractStatus("1", "REJECTED");
      }
    }
  }

  let setContractStatus;

  if (contractStatus == "ACCEPT_REQUESTED") { //사용자 요청
    setContractStatus = <Badge bg="primary">{contractStatus}</Badge>
  }
  else if (contractStatus == "ACCEPTED") {    //재능인 수락
    setContractStatus = <Badge bg="success">{contractStatus} &gt;&gt; 결제하기</Badge>
  }
  else if (contractStatus == "REJECTED") {    //재능인 거절
    setContractStatus = <Badge bg="danger">{contractStatus}</Badge>
  }
  else if (contractStatus == "PAID") {        //사용자 결제완료
    setContractStatus = <Badge bg="warning">{contractStatus}</Badge>
  }
  else if (contractStatus == "PERFORMED") {   //수행됨
    setContractStatus = <Badge bg="secondary">{contractStatus}</Badge>
  }
  else if (contractStatus == "CANCELED") {    //취소됨
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
