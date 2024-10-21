import React from "react";
import classes from "./Feedbeck.module.css";
import Send from "../send/Send";

const Feedbeck = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.tx}>
        <div className={classes.list}>
          <p className={classes.join}>JOIN SHOPPING COMMUNITY TO </p>
          <p className={classes.join}>GET MONTHLY PROMO</p>
          <p className={classes.type}>
            Type your email down below and be young wild generation
          </p>
        </div>
        <Send />
      </div>
    </div>
  );
};

export default Feedbeck;
