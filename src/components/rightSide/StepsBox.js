import  CheckBox  from '../taskItem/checkBox/CheckBox'
import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch } from 'react-redux';
import { StepTaskChangeCopletedActon, StepTaskChangeNameActon, StepTaskDeleteActon, UpdateAction } from '../redux/action';
import Notification from "../../audio/mixkit-correct-answer-tone-2870 (mp3cut.net).mp3"

export default function StepsBox({step,styles,taskId}) {
    const [inputVlue, setinputVlue] = useState(step.name)

    const dispatch=useDispatch()
    const changeNameStepHandler=(e)=>{
        e.preventDefault()
        
        }
        const chackedHandler =()=>{
            const audio = new Audio(Notification)
           if (!step.completed) {
             audio.play()
           }
           dispatch(StepTaskChangeCopletedActon(taskId,step.id))
           dispatch(UpdateAction())

        }
        const changeHandler=(e)=>{
            setinputVlue(e.target.value)
        }
        const onBlurHandler=(e)=>{
            dispatch(StepTaskChangeNameActon(taskId,step.id,inputVlue))
        }
        const deleteHandler=(e)=>{
            dispatch(StepTaskDeleteActon(taskId,step.id))
           dispatch(UpdateAction())

        }
     
        
  return (
    <div className={styles.stepBox}>

    <form onSubmit={changeNameStepHandler} style={{display:"flex"}} className={styles.stepItem}>
      <CheckBox checked={step.completed} chackedHandler={chackedHandler}  />
      <div  className={styles.inputBox}>
    <input  onBlur={onBlurHandler} style={{background:"none"}} type='text'name='stepItem' onChange={changeHandler} value={inputVlue}/>
       <button onClick={deleteHandler} type='button' style={{background:"none"}}>
       <CloseIcon  style={{fontSize:"20px"}}/>
       </button>
      </div>
     

    </form>
   
 
  

  </div>
  )
}
