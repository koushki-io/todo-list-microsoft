import React, { useEffect, useRef } from 'react'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import AddTaskIcon from '@mui/icons-material/AddTask';

import DeleteIcon from '@mui/icons-material/Delete';
import styles from './dropDown.module.css'
import { useDispatch } from 'react-redux';
import { DeleteAction } from '../../../redux/action';
function DropDownMenu({client,id}) {
const dispatch=useDispatch()
const deleteHandler=()=>{
  dispatch(DeleteAction(id))
}
  return (
 
     <div 
    style={{left:`${client.x-125}px` ,top:`${client.y+5}px` }} 
    className={styles.parent_item} >

<div className={styles.itemMenu}  >

<div className={styles.item}>
<StarBorderIcon /><span> Mark az important </span>
</div>
<div className={styles.item}>
<AddTaskIcon/> <span>Mark az completed</span>
</div>

<div className={styles.item} onClick={deleteHandler}>
<DeleteIcon style={{color:"red"}}/> <span>Delete</span>
</div>

</div>

   </div> 
  )
}

export default DropDownMenu