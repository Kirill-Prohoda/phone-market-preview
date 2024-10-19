import React from "react";
import classes from './LoginPage.module.css'



const LoginPage = () => {

    return (
        <div className={classes.wrapper}>
            <div className={classes.container}>
                <div className={classes.avatar}>

                </div>
                <div className={classes.window}>
                   <div >
                    <p className={classes.email}>E-mail</p>
                    <input className={classes.inEmail}/>
                    </div>

                   <div>
                    <p className={classes.password}>Password</p>
                    <input className={classes.inPassword}/>
                    </div>
                  
                </div>
<div className={classes.buttons}>
    <button className={classes.create}>
CREATE ACCOUNT
    </button>
    <button className={classes.sign}>
SIGN IN
    </button>
</div>
            </div>
        </div>
    )
}


export default LoginPage;