import React, { useState, useEffect } from "react";
import "./Navbar.css";
import SidebarData from "../SidebarData";
import MenuIcon from "../../Assets/menu.png";
import Desktop from "../../Assets/desktop_icon.png"

const Navbar = () => {
  // Creating states for navbar toggling
  const [isOpen, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(undefined);
  console.log(activeMenu);
 
  //  function for resizing window
  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const openHandler = () => {
    setOpen((prev) => !prev);
  };

  useEffect(() => {
    if (screenSize <= 800) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  // if the menu is not active following function will work
  return !activeMenu ? (
    <>
      <div className="mobile-menu">
        <div className="mobileMenu-left">
          <button className="menuBtn" onClick={openHandler}>
            <img src={MenuIcon} />
          </button>
          Assignment
        </div>
        <button>toggle</button>
      </div>
      {isOpen && <ul className="SideBarList-menu">
        <button onClick={()=>setOpen(false)}>
            cross
        </button>
        {SidebarData.map((val, key) => {
          return (
            <li
              key={key}
              className="row"
              onClick={() => {
                window.location.pathname = val.link;
              }}
            >
              <div id="icon">
                <img src={val.icon} />
              </div>
              <div id="title">{val.title}</div>
            </li>
          );
        })}
      </ul> }
    </>
  ) : (
    <div className="SideBar">
      {/* Maping the navbar items */}
      <ul className="SideBarList">
        {SidebarData.map((val, key) => {
          return (
            <li
              key={key}
              className="row"
              onClick={() => {
                window.location.pathname = val.link;
              }}
            >
              <div id="icon">
                <img src={val.icon} />
              </div>
              <div id="title">{val.title}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Navbar;
