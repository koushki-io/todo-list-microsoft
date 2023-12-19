import React, { useState } from 'react'
import  styles from "./addtask.module.css"
import DuoDate from './DuoDate';
import RemindMe from './RemindMe';
import Repeat from './Repeat';
import { useDispatch, useSelector } from 'react-redux';
import { AddTaskAction } from '../redux/action';
import { v4 } from 'uuid';
function AddTask({important,myDay,group,plaaned}) {
  const generateShortId = () => {
    const fullId = v4(); 
    const shortId = fullId.substr(0, 8); 
    return shortId;
  };
  const taskId=generateShortId()
const dispatch=useDispatch()
  const [changValue, setchangValue] = useState('')
  const [datetask, setdatetask] = useState({
    duoDate:plaaned?"Today":null,
    remindMe:null,
    repeat:null,
  })

  const submitHandler=(e)=>{
e.preventDefault()
if(changValue){
const myObj={
  group,
  step:[],
  duoDate:datetask.duoDate,
  remindMe:datetask.remindMe,
  repeat:datetask.repeat,
  name:changValue,
  myDay:myDay? true :false,
  important: important? true :false,
  completed:false,
  dropDown:false,
  id:taskId,
  note:"Add a not"
  
}
  setchangValue("")
  dispatch(AddTaskAction(myObj))
  setdatetask({
    duoDate:null,
    remindMe:null,
    repeat:null,
  })

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

          
            <DuoDate setdatetask={setdatetask} datetask={datetask}/>
            <RemindMe setdatetask={setdatetask} datetask={datetask} />
            <Repeat setdatetask={setdatetask}  datetask={datetask} />
          
          </div>
          <div className={styles.addButton}>
         <button type='submit'>Add</button>
          </div>

        </div>
    </form>
  )
}

export default AddTask
