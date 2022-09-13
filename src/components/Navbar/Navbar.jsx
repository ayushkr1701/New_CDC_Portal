import React from "react";
import "./style.css";
const Navbar = () => {
  return (
    <>
      <div className="sidebar close">
        <div className="logo-details">
          <i className="bx bxl-cplus-plus"> </i>
          <span className="logo_name"> IIT CDC</span>
        </div>
        <ul className="nav-links">
          <li>
            <a href="./">
              <i className="bx bx-grid-alt"> </i>
              <span className="link_name">Dashboard</span>
            </a>
            <ul className="sub-menu">
              <li>
                <a  className="link_name" href="./">HTML</a>
              </li>
              <li>
                <a href="./">React</a>
              </li>
              <li>
                <a href="./">Card Design</a>
              </li>
            </ul>
          </li>

          <li>
            <div className="icon-link">
              <a href="./">
                <i className="bx bx-collection"> </i>
                <span className="link_name">Category</span>
              </a>
              <i className="bx bxs-chevron-down arrow"></i>
            </div>
            <ul className="sub-menu">
              <li>
                <a  className="link_name" href="./">Web Developer</a>
              </li>
              <li>
                <a href="./">App Developer</a>
              </li>
              <li>
                <a href="./">Ios Developer</a>
              </li>
            </ul>
          </li>

          <li>
            <div className="icon-link">
              <a href="./">
                <i className="bx bx-collection"> </i>
                <span className="link_name">Posts</span>
              </a>
              <i className="bx bxs-chevron-down"></i>
            </div>
            <ul className="sub-menu">
              <li>
                <a  className="link_name" href="./">HTML</a>
              </li>
              <li>
                <a href="./">React</a>
              </li>
              <li>
                <a href="./">Card Design</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
};
export default Navbar;