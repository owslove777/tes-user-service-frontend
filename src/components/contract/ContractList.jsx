import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styles from './ContractList.module.css'

const ContractList = () => {

  const [contracts, setContracts] = useState([]);


  const getContracts = async () => {

    try {
      const res = await axios.get(
        // "http://clouddance.hrd-edu.cloudzcp.com/contract/contracts/"
        // "http://localhost:30100/contract/contracts/"
        process.env.REACT_APP_CONTRACT_SERVER+"/contract/contracts/"
      );

      console.log(res);

      setContracts([res.data]);

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
        <div>
          {contracts.map((data) => (
           <>
           {data[0].talentUserNm}
           </>
          ))}
        </div>
      </section>
    </>
  )
}

export default ContractList;
