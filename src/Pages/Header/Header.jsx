import React from "react";
import classes from './Header.module.css'
import Logo from "../../imeges/Logo";


const Header = () => {

    return (
        <div className={classes.header} >
            <div className={classes.logo_name}>
                <Logo />
                PHONE STORE
            </div>
            <nav className={classes.navigation}>
                <ul>
                    <li><a href="">CATALOGUE</a></li>
                    <li> <a href="">FASHION</a></li>
                    <li><a href="">FAVORITE</a></li>
                    <li> <a href="">LIFESTYLE</a></li>
                    <li><a href="" className={classes.sign_up}>SIGN UP</a></li>
                </ul>
            </nav>
        </div>
    )
}
export default Header;