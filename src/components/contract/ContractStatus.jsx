import axios from 'axios';
import React from 'react';

const ContractStatus = async(id, contractStatus) => {
  await axios.put(
    process.env.REACT_APP_CONTRACT_SERVER + "/contracts/"+id+"/"+contractStatus
  )
}

export default ContractStatus;
