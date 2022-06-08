import React from "react";
import { Link } from "react-router-dom";

import SidebarItem from "./SidebarItem";
import Styles from "./Sidebar.module.css"

const Sidebar = (props) => {

  const menus = [
    { name: "Main", path: "#" },
    { name: "Talent", path: "/talentSearch" },
    { name: "Profile", path: "#" }
  ];

  return (
    <div className={Styles.sidebar}>
      {menus.map((menu, index) => {
        return (
          <Link to={menu.path} key={index}>
            <SidebarItem
              menu={menu}
            />
          </Link>
        );
      })}
    </div>
  );
}

export default Sidebar;
