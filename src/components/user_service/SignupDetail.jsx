import React from "react";
import { useEffect } from "react";
import axios from "axios";
import qs from "qs";
import { useHistory } from "react-router-dom";

const SignupDetail = () => {

  return (
    <form>
      <div>
        주소 : <input name="address" />
      </div>
      <div>
        전화번호 : <input name="telNum" />
      </div>
      <button type="submit">확인</button>      
    </form>

  );
};

export default SignupDetail;
