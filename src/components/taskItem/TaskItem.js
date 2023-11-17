import React,{useEffect, useRef, useState} from 'react'
import styles from './taskItem.module.css'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import { ChangeImportantAction,TaskRightSide,ChangeCompletedAction, ChangeDropDownAction, CloseDropDownAction, UpdateAction, OpenCloseRightSide } from '../../redux/action';
import { useDispatch } from 'react-redux';
import DropDownMenu from './dropMenu/DropDownMenu';

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

  const clickHandler =()=>{
    dispatch(OpenCloseRightSide(true))
    dispatch(TaskRightSide(data))



  }

  window.onclick = function(event) {
 
    closeDropdown()
  }
  document.addEventListener("scroll",closeDropdown)



 const parentRef = useRef()
  window.oncontextmenu = function(event) {
    if (event.target.className !== parentRef.current.className) {
      closeDropdown()
    }

    }

  
  return (
   <div>
     <div className={styles.parent_item_list} onClick={clickHandler} ref={parentRef} onContextMenu={onContextMenuHandler}>
{data.dropDown &&  <DropDownMenu client={client} id={data.id} />}


<div className={styles.leftSide}>
        <div className={styles.checkbox_wrapper_31}>
  <input type="checkbox" checked={data.completed} onChange={chackedHandler}  />
  <svg viewBox="0 0 35.6 35.6">
    <circle className={styles.background} cx="17.8" cy="17.8" r="17.8"></circle>
    <circle className={styles.stroke} cx="17.8" cy="17.8" r="14.37"></circle>
    <polyline className={styles.check} points="11.78 18.12 15.55 22.23 25.17 12.87"></polyline>
  </svg>
        </div>


  


 <div classNam={styles.taskContent}>
        <div className={styles.title}>
            <span>{data.name}</span>
        </div>
        <div className={styles.task}>
            <span>Task</span>
        </div>

 </div>

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