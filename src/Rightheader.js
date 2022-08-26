import React from "react";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
// import { Logincontext } from "../context/Contextprovider";
import { makeStyles } from "@material-ui/core";
import "./rightheader.css";
import { Divider } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";

const usestyle = makeStyles({
  component: {
    marginTop: 10,
    marginRight: "-50px",
    width: "300px",
    padding: 50,
    height: "300px",
  },
});

const Rightheader = ({ userlog, logclose }) => {
  const imgd = "/india.png";

  //   onst { account, setAccount } = useContext(Logincontext);c

  //  this is left drawer bt name is right header

  return (
    <div>
      <div className="rightheader">
        <div className="right_nav">
          {/* {account ? ( */}
          {/* <Avatar className="avtar2" title={account.fname.toUpperCase()}> */}
          {/* {account.fname[0].toUpperCase()} */}
          {/* </Avatar> */}
          {/* ) : ( */}
          {/* <Avatar className="avtar" /> */}
          {/*  */}
          {/* {account ? <h3>Hello, {account.fname.toUpperCase()}</h3> : ""} */}
        </div>
        <div className="nav_btn" onClick={() => logclose()}>
          <div>
            <h3 className="nav_header">Digital Content & Devices</h3>
            <div className="nav_list_wrapper">
              <p className="nav_list"> Amazon Music </p>
              <i class="fa-solid fa-chevron-right"></i>
            </div>
            <div className="nav_list_wrapper">
              <p className="nav_list">Kindle E-readers & Books</p>
              <i class="fa-solid fa-chevron-right"></i>
            </div>
            <div className="nav_list_wrapper">
              <p className="nav_list">Appstore for Android</p>
              <i class="fa-solid fa-chevron-right"></i>
            </div>
          </div>
          <Divider style={{ width: "100%", marginLeft: -20 }} />
          <div>
            <h3 className="nav_header">Shop By Department </h3>
            <div className="nav_list_wrapper">
              <p className="nav_list"> Electronics </p>
              <i class="fa-solid fa-chevron-right"></i>
            </div>
            <div className="nav_list_wrapper">
              <p className="nav_list">Computers</p>
              <i class="fa-solid fa-chevron-right"></i>
            </div>
            <div className="nav_list_wrapper">
              <p className="nav_list"> Smart Home</p>
              <i class="fa-solid fa-chevron-right"></i>
            </div>
            <div className="nav_list_wrapper">
              <p className="nav_list"> Arts & Crafts</p>
              <i class="fa-solid fa-chevron-right"></i>
            </div>
            <p className="nav_list"> See All</p>
          </div>
          <Divider style={{ width: "100%", marginLeft: -20 }} />
          <div>
            <h3 className="nav_header">Programs & Features</h3>
            <div className="nav_list_wrapper">
              <p className="nav_list"> Gift Cards </p>
              <i class="fa-solid fa-chevron-right"></i>
            </div>
            <div className="nav_list_wrapper">
              <p className="nav_list">#FoundItOnAmazon</p>
              <i class="fa-solid fa-chevron-right"></i>
            </div>
            <div className="nav_list_wrapper">
              <p className="nav_list">Amazon Live</p>

              <i class="fa-solid fa-chevron-right"></i>
            </div>
            <div className="nav_list_wrapper">
              <p className="nav_list">International Shopping</p>
              <i class="fa-solid fa-chevron-right"></i>
            </div>

            <p className="nav_list"> See All</p>
          </div>
          <Divider style={{ width: "100%", marginLeft: -20 }} />
          <div>
            <h3 className="nav_header">Help & Settings</h3>
            <div className="nav_list_wrapper">
              <p className="nav_list">Your Account</p>
            </div>

            <div className="nav_list_wrapper">
              <p className="nav_list">English </p>
            </div>

            <div className="nav_list_wrapper">
              <p className="nav_list">United States</p>
            </div>

            <div className="nav_list_wrapper">
              <p className="nav_list">Customer Service</p>
            </div>

            <p className="nav_list"> Sign In</p>
            <i class="fa-solid fa-xmark-large"></i>
          </div>
        </div>
      </div>
      <i class="fa-solid fa-xmark-large"></i>
      <i class="fa-solid fa-xmark-large"></i>
    </div>
  );
};

export default Rightheader;
