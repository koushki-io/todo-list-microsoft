import React, { useEffect, useRef, useState } from 'react'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import LightModeIcon from '@mui/icons-material/LightMode';
import StarIcon from '@mui/icons-material/Star';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Notification from "../../../audio/mixkit-correct-answer-tone-2870 (mp3cut.net).mp3"
import TodayIcon from '@mui/icons-material/Today';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import EventBusyIcon from '@mui/icons-material/EventBusy';



import DeleteIcon from '@mui/icons-material/Delete';
import styles from './dropDown.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { ChangeCompletedAction, ChangeImportantAction, ChangeMyDayAction, ChangedouDate, DeleteAction, OpenCloseRightSide, UpdateAction } from '../../redux/action';
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
const dropD=useRef()
const chackedHandler =()=>{
  const audio = new Audio(Notification)
 if (!task.completed) {
   audio.play()
 }
 

  dispatch(ChangeCompletedAction(task.id))
dispatch(UpdateAction())

}
const [offsetStyle, setOffsetStyle] = useState({left:client.x-125,top:client.y+125})
const [flags, setflags] = useState(false)
const douDatahandler =(value)=>{
  dispatch(ChangedouDate(task.id,"duoDate",value))

}


const heightDrop=255

useEffect(()=>{
  setflags(false)
 
},[client.y])
useEffect(()=>{
 
  const hp=document.body.offsetHeight -client.y


    if (heightDrop>=hp) {
      setOffsetStyle({left:`${client.x-125}px` ,top:`${client.y - heightDrop -5}px`  })
    }else{
      setOffsetStyle({left:`${client.x-125}px` ,top:`${client.y+5}px`  })
  
    }
  
  


    setflags(true)


},[client.y])





  return (
 <div style={{visibility:flags?"visible":"hidden"}}>
    <div 
     ref={dropD}
    style={offsetStyle} 
    className={styles.parent_item} >

<div className={styles.itemMenu} >

  

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
<div className={styles.item} onClick={()=>douDatahandler("Today")}  >
 <TodayIcon/>  <span>Due today </span>
</div>
<div className={styles.item} onClick={()=>douDatahandler("Tomorrow")}  >
 <KeyboardArrowRightIcon/>  <span>Due tomorrow </span>
</div>
{task.duoDate? <div className={styles.item} onClick={()=>douDatahandler(null)} >
 <EventBusyIcon/>  <span>Remove Due date </span>
</div> : null}
</div>
<div className={styles.item} onClick={deleteHandler}>
<DeleteIcon style={{color:"red"}}/> <span>Delete</span>
</div> 


</div>

   </div> 
 </div>
   
  )
}

export default DropDownMenu