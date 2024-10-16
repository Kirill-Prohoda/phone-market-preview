import React from "react";
import classes from "./Feedbeck.module.css"
import Send from "../send/Send";

const Feedbeck = () => {

    return (
        <div className={classes.fon}>
            <div className={classes.tx}>
                <ul className={classes.list}>
                    <li className={classes.join}><p>JOIN SHOPPING COMMUNITY TO </p></li>
                    <li className={classes.join}><p>GET MONTHLY PROMO</p></li>
                    <li className={classes.type}><p>Type your email down below and be young wild generation</p></li>
                </ul>
                    <Send/>
            </div>
        </div>
    )
}

export default Feedbeck;