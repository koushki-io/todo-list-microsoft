import React, { useState } from 'react'
import  styles from "./addtask.module.css"
import DuoDate from './DuoDate';
import RemindMe from './RemindMe';
import Repeat from './Repeat';
function AddTask({data,setData}) {
  const [changValue, setchangValue] = useState('')
  const submitHandler=(e)=>{
e.preventDefault()
if(changValue){

  setchangValue("")
  setData([{name:changValue},...data])
}
  }
  return (
    <form onSubmit={submitHandler} className={styles.parent}>
        <div className={styles.boxInput} >
            <span>+</span>
            <input type="text" value={changValue} onChange={(e)=>setchangValue(e.target.value)} placeholder='Add a task' name='addTask'/>
        </div>
        <div className={styles.boxFooter} >
          <div className={styles.item}>

          
            <DuoDate/>
            <RemindMe/>
            
            <Repeat/>
          
          </div>
          <div className={styles.addButton}>
         <button type='submit'>Add</button>
          </div>

        </div>
    </form>
  )
}

export default AddTask
