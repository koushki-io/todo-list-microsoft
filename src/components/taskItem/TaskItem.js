import React,{useEffect, useRef, useState} from 'react'
import styles from './taskItem.module.css'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import { ChangeImportantAction,TaskRightSide,ChangeCompletedAction, ChangeDropDownAction, CloseDropDownAction, UpdateAction, OpenCloseRightSide } from '../redux/action';
import { useDispatch } from 'react-redux';
import DropDownMenu from './dropMenu/DropDownMenu';
import  CheckBox  from './checkBox/CheckBox';

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
  window.oncontextmenu = function(event) {
    if (event.target.className !== parentRef.current.className) {
      closeDropdown()
    }

    }

  
  return (
   <div>
     <div className={styles.parent_item_list}  >
{data.dropDown &&  <DropDownMenu client={client} id={data.id} show={data.dropDown} />}


<div className={styles.leftSide}>

<CheckBox checked={data.completed}  chackedHandler={chackedHandler} />
   


 <div className={styles.taskContent}>
        <div className={styles.title}>
            <span>{data.name}</span>
        </div>
        <div className={styles.task}>
            <span>Task</span>
        </div>

 </div>

</div>
<div className={styles.centerSide} onClick={clickHandler} onContextMenu={onContextMenuHandler}  ref={parentRef}  > 

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