import React, { useRef } from 'react'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import AddTaskIcon from '@mui/icons-material/AddTask';

import DeleteIcon from '@mui/icons-material/Delete';
import styles from './dropDown.module.css'
function DropDownMenu({client,show}) {

    window.oncontextmenu = function(event) {
        //  dropDown.current.style.visibility="hidden"
        
         }

  return (
    <div  style={{left:`${client.x-125}px` ,top:`${client.y+5}px` ,visibility:show?"visible":"hidden" }} className={styles.parent_item}>
<div className={styles.itemMenu}>

<div className={styles.item}>
<StarBorderIcon /><span> Mark az important </span>
</div>
<div className={styles.item}>
<AddTaskIcon/> <span>Mark az completed</span>
</div>

<div className={styles.item}>
<DeleteIcon style={{color:"red"}}/> <span>Delete</span>
</div>

</div>

    </div>
  )
}

export default DropDownMenu