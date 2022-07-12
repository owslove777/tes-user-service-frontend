import { Badge } from 'react-bootstrap';
import React from 'react';
import styles from './ContractInfo.module.css';
import { useHistory } from 'react-router-dom';
import ContractStatus from './ContractStatus';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import { ContractContext } from '../../context/ContractContext';

const ContractInfo = ({
  id,
  talentId,
  talentItemId,
  talentUserId,
  talentUserNm,
  userId,
  userNm,
  contractStatus,
  requestDateTime,
  acceptedDateTime,
  rejectedDateTime,
  performedDateTime,
  canceledDateTime,
  title,
  price,
  address }) => {

  const history = useHistory();
  const { contractStatusContext, setContractStatusContext } = useContext(ContractContext);
  const { userInfo } = useContext(UserContext);

  console.log(userInfo)

  function onClick(e) {
    e.preventDefault();
    console.log("talentId : " + talentId);
    console.log("contractStatus : " + contractStatus);

    if (userInfo.userType == "seller") { // 재능인 처리 가능 상태
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
            canceledDateTime: canceledDateTime,
            title: title,
            price: price,
            address
          }
        });
      }
      else if (contractStatus == "PAID") {
        if (window.confirm("계약내용을 수행하셨습니까?")) {
          console.log("id");
          console.log(id);
          try {
            ContractStatus(id, "PERFORMED");
            setContractStatusContext("PERFORMED")
            window.alert("수행 완료")
          } catch (e) {
            console.log(e)
          }

        } else {
          try {
            ContractStatus(id, "CANCELED");
            setContractStatusContext("CANCELED")
            window.alert("취소 완료")
          } catch (e) {
            console.log(e)
          }
        }
      }
    }
    else if (userInfo.userType == "user") { //일반인 처리 가능 상태
      console.log("price");
      console.log(price);
      if (contractStatus == "ACCEPTED") {
        if (window.confirm("결제를 진행하시겠습니까?")) {
          history.push({
            pathname: "/paymentRequest",
            state: { 
              id: id, 
              title: title, 
              talentUserNm: talentUserNm,
              talentItemId: talentItemId, 
              acceptedDateTime: acceptedDateTime, 
              price: price }
          });
        }
      }
    }
  }

  let drawContractStatus;
  let drawButton;

  if (contractStatus == "ACCEPT_REQUESTED") { //사용자 요청
    if(userInfo.userType == "seller"){
      drawContractStatus = <Badge bg="primary">{contractStatus}</Badge>
      drawButton = <Badge bg="primary"> &gt;&gt;요청내용 확인하기</Badge>
    }
    else if(userInfo.userType == "user")
      drawContractStatus = <Badge bg="primary">{contractStatus}</Badge>
  }
  else if (contractStatus == "ACCEPTED") {    //재능인 수락
    if(userInfo.userType == "seller")
      drawContractStatus = <Badge bg="success">{contractStatus}</Badge>
    else if(userInfo.userType == "user"){
      drawContractStatus = <Badge bg="success">{contractStatus} </Badge>    
      drawButton = <Badge bg="success"> &gt;&gt;결제하기</Badge>
    }
  }
  else if (contractStatus == "REJECTED") {    //재능인 거절
    drawContractStatus = <Badge bg="danger">{contractStatus}</Badge>
  }
  else if (contractStatus == "PAID") {        //사용자 결제완료
    if(userInfo.userType == "seller"){
      drawContractStatus = <Badge bg="warning">{contractStatus} </Badge>
      drawButton = <Badge bg="warning"> &gt;&gt;수행여부 확인하기</Badge>
    }
    else if(userInfo.userType == "user")
      drawContractStatus = <Badge bg="warning">{contractStatus}</Badge>
  }
  else if (contractStatus == "PERFORMED") {   //수행됨
    drawContractStatus = <Badge bg="secondary">{contractStatus}</Badge>
  }
  else if (contractStatus == "CANCELED") {    //취소됨
    drawContractStatus = <Badge bg="dark">{contractStatus}</Badge>
  }
  else {
    drawContractStatus = <Badge bg="info">null</Badge>
  }

  return (
    <li className={styles.contractInfo} onClick={onClick}>
      <img className={styles.avartar} src="/images/default_profile.png" alt="profile photo" />
      <div className={styles.info}>
        <h1 className={styles.title}>{title} </h1>
        <p className={styles.talentId}>재능ID : {talentId} </p>
        <p className={styles.talentUserNm}>재능인명 : {talentUserNm} [ID : {talentUserId}]</p>
        <p className={styles.price}>요청금액 : {price}</p>
        <p className={styles.userNm}>요청인명 : {userNm} [ID : {userId}]</p>
        </div><div className={styles.info}>
        <p className={styles.requestDateTime}>요청일시 : {requestDateTime}</p>
        <p className={styles.badgeStyle}>{drawContractStatus}</p>
        <p className={styles.badgeStyle}>{drawButton}</p>
        <br></br>
      </div>
    </li>
  )
}

export default ContractInfo;
