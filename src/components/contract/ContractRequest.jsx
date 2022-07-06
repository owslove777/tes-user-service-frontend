import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useLocation } from "react-router-dom";
import { UserContext } from '../../context/UserContext';
import todayTime from '../../utils/todayTime';

const ContractRequest = () => {

  const location = useLocation();
  const history = useHistory();
  const { userInfo } = useContext(UserContext);

  let contract = {};

  const postContracts = async () => {

    contract =
    {
      "id": 0,
      "talentId": location.state.selectOption.talentId,
      "talentItemId": location.state.selectOption.id,
      "talentUserId": location.state.data.userId,
      "talentUserNm": null, //정보없음.
      "userId": userInfo.id,
      "userNm": userInfo.name,
      "contractStatus": "ACCEPT_REQUESTED",
      "requestDateTime": todayTime(),
      "acceptedDateTime": null,
      "rejectedDateTime": null,
      "performedDateTime": location.state.selectOption.dateTime,
      "canceledDateTime": null,
      "title": location.state.data.title,
      "price": location.state.selectOption.price,
      "address": location.state.data.address
    }

    console.log("contract");
    console.log(contract);
    console.log("userInfo");
    console.log(userInfo);
    console.log("ocation.state.data");
    console.log(location.state.data);
    console.log("location.state.selectOption");
    console.log(location.state.selectOption);

    try {
      const res = axios.post(
        // "http://clouddance.hrd-edu.cloudzcp.com/contract/contracts/"
        // "http://localhost:30100/contract/contracts/"
        process.env.REACT_APP_CONTRACT_SERVER + "/contracts/"
        , contract
      );
      console.log(res);
      window.alert("재능인에게 요청 완료");

      history.push("/contractList")

    } catch (err) {
      console.log(err);
      window.alert("재능인에게 요청 실패");
    }
  };
  useEffect(() => {
    postContracts();
  }, []);

  return null;

}

export default ContractRequest;
