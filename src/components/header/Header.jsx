import React from "react";
import classes from './Header.module.css'
import Logo from "../../images/Logo";


const Header = () => {

    return (
        <div className={classes.header} >
            <div className={classes.logo_name}>
                <Logo />
                PHONE STORE
            </div>
            <nav className={classes.navigation}>
                <ul className={classes.list}>
                    <li><a href="" className={classes.link}>CATALOGUE</a></li>
                    <li><a href="" className={classes.link}>FASHION</a></li>
                    <li><a href="" className={classes.link}>FAVORITE</a></li>
                    <li><a href="" className={classes.link}>LIFESTYLE</a></li>
                    <li><a href="" className={classes.link} id={classes.sign_up}>SIGN UP</a></li>
                </ul>
            </nav>
        </div>
    )
}
export default Header;