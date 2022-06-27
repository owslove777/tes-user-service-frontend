import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import ContractInfo from './ContractInfo';
import styles from './ContractList.module.css'
import { UserContext } from '../../context/UserContext';
import { ContractContext } from '../../context/ContractContext';

const ContractList = () => {

  const [contracts, setContracts] = useState([]);
  const [contractStatusContext, setContractStatusContext] = useState();
  const { userInfo } = useContext(UserContext);

  let uriInfo = null;

  if(userInfo.userType == 'seller') {
    uriInfo = 'talent-user'
  } else if(userInfo.userType == 'user') {
    uriInfo = 'user'
  }

  const getContracts = async () => {
    try {
      const res = await axios.get(
        // "http://clouddance.hrd-edu.cloudzcp.com/contract/contracts/"
        // "http://localhost:30100/contract/contracts/"
        process.env.REACT_APP_CONTRACT_SERVER + "/contract/contracts/"+uriInfo+"/"+userInfo.id
      );
      console.log(res);

      if (Array.isArray(res.data)) {
        setContracts(res.data);
      } else {
        setContracts([res.data]);
      }

    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getContracts();
  }, [contractStatusContext]);

  return (
    <>

      <section className={styles.contractList}>
        <h1>계약 목록 확인</h1>
        <h4>[{userInfo.userType}]</h4>
        <div className={styles.listBox}>
          {contracts.map((data) => (
            <ContractContext.Provider value={{ contractStatusContext, setContractStatusContext }}>
              <ContractInfo
                key={data.id}
                id={data.id}
                talentId={data.talentId}
                talentItemId={data.talentItemId}
                talentUserId={data.talentUserId}
                talentUserNm={data.talentUserNm}
                userId={data.userId}
                userNm={data.userNm}
                contractStatus={data.contractStatus}
                requestDateTime={data.requestDateTime}
                acceptedDateTime={data.acceptedDateTime}
                rejectedDateTime={data.rejectedDateTime}
                performedDateTime={data.performedDateTime}
                canceledDateTime={data.canceledDateTime}
              />
            </ContractContext.Provider>
          ))}
        </div>
      </section>

    </>
  )
}

export default ContractList;
