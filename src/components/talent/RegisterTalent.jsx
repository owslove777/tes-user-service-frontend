import React from "react";
import { useEffect } from "react";
import axios from "axios";
import qs from "qs";
import { useHistory } from "react-router-dom";

const RegisterTalent = () => {

  return (
    <>
    <form>
      <div>
        재능 : <input name="talentType" />
      </div>
      <button className="submit-talent" type="submit">확인</button>      
    </form>
    </>
  );
};

export default RegisterTalent;
