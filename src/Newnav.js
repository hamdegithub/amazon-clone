import React from "react";
import "./newnav.css";
import { useState } from "react";

import MenuIcon from "@mui/icons-material/Menu";
import Rightheader from "./Rightheader";

import { makeStyles } from "@material-ui/core";
import { Drawer, IconButton, List, ListItem } from "@mui/material";

const usestyle = makeStyles({
  component: {
    marginTop: 10,
    marginRight: "-50px",
    width: "300px",
    padding: 50,
    height: "300px",
  },
});

const Newnav = () => {
  const [dropen, setDropen] = useState(false);

  // for drawer

  const handelopen = () => {
    setDropen(true);
  };

  const handleClosedr = () => {
    setDropen(false);
  };

  // const getText = (text) => {
  //   setText(text);
  //   setLiopen(false);
  // };

  return (
    <div className="new_nav">
      <div className="nav_data">
        <div className="left_data">
          <p>
            <IconButton className="hamburgur" onClick={handelopen}>
              <MenuIcon style={{ color: "#fff" }} />
            </IconButton>{" "}
            <Drawer open={dropen} onClose={handleClosedr}>
              <Rightheader />
            </Drawer>
            All
          </p>
          <p>Today's Deals</p>
          <p>Customer Service</p>
          <p>Registry</p>
          <p>Gift Cards</p>
          <p>Sell</p>
        </div>
      </div>
    </div>
  );
};

export default Newnav;
