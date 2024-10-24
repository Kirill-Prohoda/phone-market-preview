import React, { useEffect, useState } from "react";
import classes from './RegPage.module.css'




const ADMIN = 'admin'
const PASSWORD = '1234'

const RegPage = () => {
    




    const [email, setEmail] = useState('')

    const hendEmail = (d) => {
        setEmail(d.target.value)
    }
    
    
    
    
    const [password, setPassword] = useState('')
    
    const hendPassword = (d) => {
        setPassword(d.target.value)
        
    }
    
    
    
    const [age, setAge] = useState('')

    const hendAge = (d) => {
        setAge(d.target.value)
       
    }
    function toLink() {
        window.location.assign('http://localhost:3000/')
    }

<<<<<<< HEAD
<<<<<<< HEAD
  
=======
=======
>>>>>>> d09a8ed104d960706d926dd4fc1d9522f1ba821e
   const toReg = async () => {
  await  fetch('http://localhost:4000/reg', {
        method:'POST',
        headers:{ "Content-Type": "application/json"},

        body: JSON.stringify({
        login: email,
        pass: password,
        age: age, 
        })

        })
        .then((data) => data.json())
        .then((data) => {
           if(data.status){
            toLink()
          }
        
    })
    


   }
<<<<<<< HEAD
>>>>>>> e8d746e (PHO-12 Создал регистрацию)
=======
>>>>>>> d09a8ed104d960706d926dd4fc1d9522f1ba821e
    return (
        <div className={classes.wrapper}>
            <div className={classes.container}>
                <div className={classes.window}>
                    <div >
                        <p className={classes.email}>E-mail</p>
                        <input value={email} onChange={hendEmail} className={classes.inEmail} />
                    </div>

                    <div>
                        <p className={classes.Age}>Age</p>
                        <input type="number" value={age} onChange={hendAge} className={classes.inAge}/>
                    </div>

                    <div>
                        <p className={classes.password}>Password</p>
                        <input value={password} onChange={hendPassword} className={classes.inPassword} />
                    </div>

                </div>

                <div className={classes.buttons}>
<<<<<<< HEAD
<<<<<<< HEAD
                    <button  onClick={toLink} className={classes.confirm}>
=======
=======
>>>>>>> d09a8ed104d960706d926dd4fc1d9522f1ba821e
                    <button  onClick={toLink} className={classes.login}>
                    login
                    </button>
                    <button  onClick={toReg} className={classes.confirm}>
<<<<<<< HEAD
>>>>>>> e8d746e (PHO-12 Создал регистрацию)
=======
>>>>>>> d09a8ed104d960706d926dd4fc1d9522f1ba821e
                    CONFIRM
                    </button>
                </div>
            </div>
        </div>
    )
}


export default RegPage;