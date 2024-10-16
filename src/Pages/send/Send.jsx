import React, { useState } from "react";
import classes from "./Send.module.css"



const Send = () => {

const [value, setValue] = useState('')

 const handleChange =(e) => {
    setValue(e.target.value);
 }

function hendleClick(){
    alert({value, text:'Спасибо, что Вы с нами, Уважаемый', toString: function() {
        return `${this.value}: ${this.text}`
      }})
      console.log(value)
}

    return (
        <div className={classes.communicationString}>
            <div className={classes.window}>
            <input value={value} onChange={handleChange} className={classes.line}/>
            </div>
            <button onClick={hendleClick} className={classes.but}>SEND</button>


        </div>


    )
}

export default Send;