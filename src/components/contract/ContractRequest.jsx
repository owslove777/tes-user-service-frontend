import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { useLocation } from "react-router-dom";
import ContractList from '../contract/ContractList';


const ContractRequest = () => {

  const location = useLocation();

  console.log("data2 : " + location.state.data);
  console.log("selectOption2 : " + location.state.selectOption);

  const [contract, setContract] = useState([]);
 
  const postTalents = async () => {

    setContract([
      {
        "id": 0,
        "talentId": 1,
        "talentItemId": location.state.selectOption,
        "talentUserId": location.state.data.userId,
        "talentUserNm": "랑랑",
        "userId": 3,
        "userNm": "jaden",
        "contractStatus": "PERFORMED",
        "requestDateTime": "2022-06-01 10:36:45",
        "acceptedDateTime": null,
        "rejectedDateTime": null,
        "performedDateTime": "2022-06-01 10:37:09",
        "canceledDateTime": null
      }
    ])
    try {
      // axios.post(
        // "http://clouddance.hrd-edu.cloudzcp.com/contract/contracts/"
        // "http://localhost:30100/contract/contracts/"
        // process.env.REACT_APP_CONTRACT_SERVER+"/contract/contracts/"
        // , contract
      // ) ;

      // console.log(res);
      window.alert("재능인에게 요청 완료");

    } catch (err) {
      // console.log(err);
      window.alert("재능인에게 요청 실패");
    }
  };
  useEffect(() => {
    postTalents();
  }, []);


  return (
    <ContractList />
  )

}

export default ContractRequest;
