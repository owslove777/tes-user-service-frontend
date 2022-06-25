import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ContractInfo from './ContractInfo';
import styles from './ContractList.module.css'

const ContractList = () => {

  const [contracts, setContracts] = useState([]);

  const getContracts = async () => {
    try {
      const res = await axios.get(
        // "http://clouddance.hrd-edu.cloudzcp.com/contract/contracts/"
        // "http://localhost:30100/contract/contracts/"
        process.env.REACT_APP_CONTRACT_SERVER + "/contract/contracts/"
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
  }, []);

  return (
    <>
      <section className={styles.contractList}>
        <h1>계약 목록 확인</h1>
        <div className={styles.listBox}>
          {contracts.map((data) => (
            <ContractInfo
              key={data.id}
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
          ))}
        </div>
      </section>
    </>
  )
}

export default ContractList;
