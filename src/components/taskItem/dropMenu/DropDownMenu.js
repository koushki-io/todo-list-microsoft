import React, { useEffect, useRef } from 'react'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import LightModeIcon from '@mui/icons-material/LightMode';
import StarIcon from '@mui/icons-material/Star';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Notification from "../../../audio/mixkit-correct-answer-tone-2870 (mp3cut.net).mp3"

import DeleteIcon from '@mui/icons-material/Delete';
import styles from './dropDown.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { ChangeCompletedAction, ChangeImportantAction, ChangeMyDayAction, DeleteAction, OpenCloseRightSide, UpdateAction } from '../../redux/action';
function DropDownMenu({client,task}) {
const dispatch=useDispatch()



const deleteHandler=()=>{
  dispatch(DeleteAction(task.id))
  dispatch(OpenCloseRightSide(false))
  dispatch(UpdateAction())
 
}
const mayDayHandler=()=>{
  if (task.myDay) {
    dispatch(ChangeMyDayAction(task.id,false))
    
  }else{
    dispatch(ChangeMyDayAction(task.id,true))

  }
  dispatch(UpdateAction())

}
const  ChangeImportantHandler= ()=>{
  dispatch(ChangeImportantAction(task.id))
   dispatch(UpdateAction())

}

const chackedHandler =()=>{
  const audio = new Audio(Notification)
 if (!task.completed) {
   audio.play()
 }
 

  dispatch(ChangeCompletedAction(task.id))
dispatch(UpdateAction())

}

  return (
 
     <div 
    style={{left:`${client.x-125}px` ,top:`${client.y+5}px` }} 
    className={styles.parent_item} >

<div className={styles.itemMenu}  >

  

<div className={styles.item} onClick={mayDayHandler}>
<div  className={task.myDay?styles.deprecated:null }><LightModeIcon /></div> <span> {task.myDay? "Remove from My Day" : "Add to My Day"}</span>
</div>
<div className={styles.item} onClick={ChangeImportantHandler}>
 {task.important ? <StarBorderIcon /> : <StarIcon/>}  <span>{task.important?  "Remove from important": "Mark az important" }  </span>
</div>
<div className={styles.item} onClick={chackedHandler}>
{task.completed? <RadioButtonUncheckedIcon/>:<CheckCircleOutlineIcon/> } <span> {task.completed? "Mark az not completed" : "Mark az completed"}</span>
</div>

<div className={styles.duedate}>
<div className={styles.item} >
 <CheckCircleOutlineIcon/>  <span>Due today </span>
</div>
<div className={styles.item} >
 <CheckCircleOutlineIcon/>  <span>Due tomorrow </span>
</div>
<div className={styles.item} >
 <CheckCircleOutlineIcon/>  <span>Remove Due date </span>
</div>
</div>

<div className={styles.item} onClick={deleteHandler}>
<DeleteIcon style={{color:"red"}}/> <span>Delete</span>
</div>

</div>

   </div> 
  )
}

export default DropDownMenu