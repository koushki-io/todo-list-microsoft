import React,{useEffect, useRef, useState} from 'react'
import styles from './taskItem.module.css'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import { ChangeImportantAction,TaskRightSide,ChangeCompletedAction, ChangeDropDownAction, CloseDropDownAction, UpdateAction, OpenCloseRightSide } from '../redux/action';
import { useDispatch } from 'react-redux';
import DropDownMenu from './dropMenu/DropDownMenu';
import  CheckBox  from './checkBox/CheckBox';
import Notification  from "../../audio/mixkit-correct-answer-tone-2870 (mp3cut.net).mp3"
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LoopIcon from '@mui/icons-material/Loop';







function TaskItem({data}) {

const dispatch=useDispatch()
const [client, setclient] = useState(0);


useEffect(() => {
  closeDropdown()
}, [])


const onContextMenuHandler=(e)=>{
e.preventDefault()
setclient({x:e.clientX,y:e.clientY})
dispatch(ChangeDropDownAction(data.id))
dispatch(UpdateAction())




}


  const  ChangeImportantHandler= ()=>{
    dispatch(ChangeImportantAction(data.id))
     dispatch(UpdateAction())

  }

  const chackedHandler =()=>{
    const audio = new Audio(Notification)
    if (!data.completed) {
     
      audio.play()
    }
    
    dispatch(ChangeCompletedAction(data.id))
dispatch(UpdateAction())

  }
  
  const closeDropdown =()=>{
    dispatch(CloseDropDownAction(data.id))
dispatch(UpdateAction())

}
// document.addEventListener("scroll",closeDropdown)

  const clickHandler =()=>{
    dispatch(OpenCloseRightSide(true))
    dispatch(TaskRightSide(data))



  }

  window.onclick = function(event) {
 
    closeDropdown()
  }




 const parentRef = useRef()
  // window.oncontextmenu = function(event) {
  //   if (event.target.className !== parentRef.current.className) {
  //     closeDropdown()
  //   }

  //   }

 const countStep=data.step.length
 const countCopletedStep=data.step.filter(item=>item.completed).length
  return (
   <div>
     <div 
     className={styles.parent_item_list}   onContextMenu={onContextMenuHandler}  ref={parentRef} >
{data.dropDown &&  <DropDownMenu  client={client} task={data} show={data.dropDown} />}


<div className={styles.leftSide}>

<CheckBox checked={data.completed}  chackedHandler={chackedHandler} />
   


 <div className={styles.taskContent}   onClick={clickHandler}>
        <div className={styles.title}>
            <span>{data.name}</span>
          
        </div>
  
      <div className={styles.douDate}>
      <div className={styles.task}>
            <span>Task </span>
            {countStep? <h4 > . {countCopletedStep} of {countStep} </h4> :null}.
        
        </div>
             {data.duoDate?<div className={styles.douDateItem}>
               <CalendarMonthIcon style={{fontSize:"20px"}}/> {data.duoDate}
               </div>:null}  
               {data.remindMe?<div className={styles.douDateItem}>
               <NotificationsNoneIcon style={{fontSize:"20px"}}/>  {data.remindMe}
                </div>:null}
                {data.repeat?<div className={styles.douDateItem}>
                <LoopIcon style={{fontSize:"20px"}}/>  {data.repeat}

               </div>:null}
               
 
           </div>
      


 </div>

</div>
<div className={styles.centerSide}   onClick={clickHandler}   > 

</div>
<div className={styles.rightSide}>
   {data.important?  <StarIcon onClick={ChangeImportantHandler} />  : <StarBorderIcon onClick={ChangeImportantHandler}/>
    }



</div>


    </div>
   </div>
  )
}

export default TaskItem