import React, { useEffect, useRef } from 'react'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import AddTaskIcon from '@mui/icons-material/AddTask';

import DeleteIcon from '@mui/icons-material/Delete';
import styles from './dropDown.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { DeleteAction, DeleteListAction, DeleteTaskInList, OpenCloseRightSide, UpdateAction } from '../../redux/action';
import { useNavigate } from 'react-router-dom';
function DropDownMenu({client,path,CloseDropDoun}) {
const dispatch=useDispatch()
const navigate=useNavigate()

const {task}=useSelector(x=>x.rightSide)

const deleteHandler=()=>{
  dispatch(DeleteListAction(path))
  dispatch(DeleteTaskInList(path))
  dispatch(UpdateAction(path))

  navigate("/tasks")

  CloseDropDoun()
  dispatch(OpenCloseRightSide(false))



}
  return (
 
     <div 
    style={{left:`${client.x}px` ,top:`${client.y-40}px` }} 
    className={styles.parent_item} >

<div className={styles.itemMenu}  >

{/* <div className={styles.item}>
<StarBorderIcon /><span> Mark az important </span>
</div>
<div className={styles.item}>
<AddTaskIcon/> <span>Mark az completed</span>
</div> */}

<div className={styles.item} onClick={deleteHandler}>
<DeleteIcon style={{color:"red"}}/> <span>Delete</span>
</div>

</div>

   </div> 
  )
}

export default DropDownMenu