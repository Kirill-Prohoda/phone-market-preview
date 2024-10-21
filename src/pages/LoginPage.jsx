import React, { useState } from "react";
import classes from "./LoginPage.module.css";

const ADMIN = "admin";
const PASSWORD = "1234";

const LoginPage = () => {
  const [email, setEmail] = useState("");

  const hendEmail = (d) => {
    setEmail(d.target.value);
  };

  const [password, setPassword] = useState("");

  const hendPassword = (d) => {
    setPassword(d.target.value);
  };

  function toLinkM() {
    window.location.assign("http://localhost:3000/home");
  }

  function toLinkP() {
    window.location.assign("http://localhost:3000/registration");
  }
  let notRightEmail = true;
  if (email === ADMIN) {
    notRightEmail = false;
  }

  let notRightPassword = true;
  if (password === PASSWORD) {
    notRightPassword = false;
  }

    function toLinkM() {
        window.location.assign('http://localhost:3000/home')
    }

    function toLinkP() {
        window.location.assign('http://localhost:3000/registration')
    }


    let isDisabled = notRightEmail || notRightPassword

    return (
        <div className={classes.wrapper}>
            <div className={classes.container}>
                <div className={classes.avatar}>

                </div>
                <div className={classes.window}>
                    <div >
                        <p className={classes.email}>E-mail</p>
                        <input value={email} onChange={hendEmail} className={classes.inEmail} />
                    </div>

                    <div>
                        <p className={classes.password}>Password</p>
                        <input value={password} onChange={hendPassword} className={classes.inPassword} />
                    </div>

                </div>
                <div className={classes.buttons}>
                    <button onClick={toLinkP} className={classes.create}>
                        CREATE ACCOUNT
                    </button>
                    <button disabled={isDisabled} onClick={toLinkM} className={classes.sign + ' ' + (isDisabled ? classes.sign__disabled : '')}>
                        SIGN IN
                    </button>
                </div>
            </div>
        </div>
     
  );
};

export default LoginPage;
