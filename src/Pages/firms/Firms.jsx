import React from "react";
import classes from "./Firms.module.css";
import htc from "../../imeges/img_firm/htc.png";
import huawei from "../../imeges/img_firm/huawei.png";
import iphone from "../../imeges/img_firm/iphone.png";
import motorola from "../../imeges/img_firm/motorola.png";
import nokia from "../../imeges/img_firm/nokia.png";
import vivo from "../../imeges/img_firm/vivo.png";



const Firms = () => {
 return(
    
    <div className={classes.fir} >
      <img className={classes.htc} src={htc} alt=""/>
      <img className={classes.huawei} src={huawei} alt=""/>
      <img className={classes.iphone} src={iphone} alt=""/>
      <img className={classes.motorola} src={motorola} alt=""/>
      <img className={classes.nokia} src={nokia} alt=""/>
      <img className={classes.vivo} src={vivo} alt=""/>
    </div>
    
 )
}

export default Firms;