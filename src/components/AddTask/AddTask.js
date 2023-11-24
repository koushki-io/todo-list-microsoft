import React, { useState } from 'react'
import  styles from "./addtask.module.css"
import DuoDate from './DuoDate';
import RemindMe from './RemindMe';
import Repeat from './Repeat';
import { useDispatch, useSelector } from 'react-redux';
import { AddTaskAction } from '../redux/action';
import { v4 } from 'uuid';
function AddTask({important,myDay}) {
  const generateShortId = () => {
    const fullId = v4(); 
    const shortId = fullId.substr(0, 8); 
    return shortId;
  };
  const taskId=generateShortId()
const dispatch=useDispatch()
  const [changValue, setchangValue] = useState('')

  const submitHandler=(e)=>{
e.preventDefault()
if(changValue){
const myObj={
  step:[],
  name:changValue,
  myDay:myDay? true :false,
  important: important? true :false,
  completed:false,
  dropDown:false,
  id:taskId
}
  setchangValue("")
  dispatch(AddTaskAction(myObj))

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
