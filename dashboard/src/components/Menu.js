import React , {useState}from "react";

import {Link} from "react-router-dom";

const Menu = () => {
  const[selectedMenu, setSelectedMenu]=useState(0);
  const[isProfileDropdownOpen, setisProfileDropdownOpen]=useState(false);

  const handleMenuClick=(index)=>setSelectedMenu(index);
  const handleProfileClick=(index)=>setisProfileDropdownOpen(!isProfileDropdownOpen);

  const menuClass="menu";
  const activeMenuClass="menu selected";
  return (
    <div className="menu-container">
      <img src="logo (1).png" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link style={{textDecoration:"none"}} to='/' onClick ={()=>handleMenuClick(0)}>
            <p classname={selectedMenu===0 ? activeMenuClass:menuClass}>Dashboard</p></Link>
          </li>
          <li>
          <Link style={{textDecoration:"none"}} to='/Orders' onClick ={()=>handleMenuClick(1)}>
          <p classname={selectedMenu===1? activeMenuClass:menuClass}>Orders</p></Link>
          </li>
          <li>
          <Link style={{textDecoration:"none"}} to='/Holdings' onClick ={()=>handleMenuClick(2)}>
          <p classname={selectedMenu===2? activeMenuClass:menuClass}>Holdings</p></Link>
          </li>
          <li>
          <Link style={{textDecoration:"none"}} to='/Positions' onClick ={()=>handleMenuClick(3)}>
          <p classname={selectedMenu===3 ? activeMenuClass:menuClass}>Positions</p></Link>
          </li>
          <li>
          <Link style={{textDecoration:"none"}} to='/Funds' onClick ={()=>handleMenuClick(4)}>
          <p classname={selectedMenu===4 ? activeMenuClass:menuClass}>Funds</p></Link>
          </li>
          <li>
          <Link style={{textDecoration:"none"}} to='/Apps' onClick ={()=>handleMenuClick(5)}>
          <p classname={selectedMenu===5 ? activeMenuClass:menuClass}>Apps</p></Link>
          </li>
        </ul>
        <hr />
         <div className="profile" onclick={handleProfileClick}>
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>
        
        </div>
      </div>

  );
};

export default Menu;