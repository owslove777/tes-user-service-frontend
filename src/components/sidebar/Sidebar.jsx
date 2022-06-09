import React, {useState} from "react";
import { Link } from "react-router-dom";

import SidebarItem from "./SidebarItem";
import Styles from "./Sidebar.module.css"
import { useLocation } from "react-router-dom";

const Sidebar = (props) => {

  // const location = useLocation();

  // const [userType, setUserType] = useState();
  // setUserType(props.userType);
  // const [userInfo, setUserInfo] = useState([]);
  // setUserInfo(props.userInfo);

  const menus = [
    { name: "Main", path: "/home" },
    { name: "Talent", path: "/talentSearch" },
    { name: "Profile", path: "/emptyPage" }
  ];

  return (
    <div className={Styles.sidebar}>
      {menus.map((menu, index) => {
        return (
          <Link to={menu.path} key={index} state={{userType:props.userType, userInfo:props.userInfo}}>
            {/* {console.log("userType1 : " + props.userType)}
            {console.log("userType1 : " + userType)}
            {console.log("userType_location : " + props.userInfo.id)} */}
            <SidebarItem menu={menu}/>
          </Link>
          
        );
      })}
    </div>
  );
}

export default Sidebar;
