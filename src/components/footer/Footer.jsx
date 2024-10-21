import React from "react";
import classes from "./Footer.module.css"


const Footer = () => {

    return (
      <div className={classes.wrapper}>
          <div className={classes.left}>
              <p className={classes.fashion}>FASHION</p>
              <p className={classes.complete}>Complete your style with awesome clothes from us</p>
              <div className={classes.buttons}>
                <button className={classes.facebook}></button>
                <button className={classes.instagram}></button>
                <button className={classes.twitter}></button>
                <button className={classes.vkontakte}></button>
              </div>
          </div>
          <div className={classes.right}>
              <ul className={classes.lists}>
                  <div>
                      <li><a href="" className={classes.brighter}>Company</a></li>
                      <li><a href="" className={classes.dim}>About</a></li>
                      <li><a href="" className={classes.dim}>Contact us</a></li>
                      <li><a href="" className={classes.dim}>Support</a></li>
                      <li><a href="" className={classes.dim}>Careers</a></li>
                  </div>
                  <div>
                      <li><a href="" className={classes.brighter}>Quick Link</a></li>
                      <li><a href="" className={classes.dim}>Share Location</a></li>
                      <li><a href="" className={classes.dim}>Orders Tracking</a></li>
                      <li><a href="" className={classes.dim}>Size Guide</a></li>
                      <li><a href="" className={classes.dim}>FAQs</a></li>
                  </div>
                  <div>
                      <li><a href="" className={classes.brighter}>Legal</a></li>
                      <li><a href="" className={classes.dim}>Terms & conditions</a></li>
                      <li><a href="" className={classes.dim}>Privacy Policy</a></li>
                  </div>
              </ul>
          </div>
      </div>
    )
}

export default Footer;