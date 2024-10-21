import React from "react";
import classes from "./Catalog.module.css";

const Catalog = () => {
  return (
    <div className={classes.catalog}>
      <div className={classes.maintex}>
        <p className={classes.with}>LET'S</p>
        <p>EXPLOER</p>
        <p className={classes.orage}>UNIQUE</p>
        <p>COLOTHES.</p>
      </div>
      <div className={classes.live}>
        <p>Live for infiluetial and innovative fashion</p>
      </div>
      <div className={classes.shop}>
        <a href="" className={classes.shopNow}>
          Shop Now
        </a>
      </div>
    </div>
  );
};

export default Catalog;
