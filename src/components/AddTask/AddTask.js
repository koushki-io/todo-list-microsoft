import React from 'react'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LoopIcon from '@mui/icons-material/Loop';
import  styles from "./addtask.module.css"
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import DuoDate from './DuoDate';
import RemindMe from './RemindMe';
import Repeat from './Repeat';
function AddTask() {
  return (
    <div className={styles.parent}>
        <div className={styles.boxInput} >
            <span>+</span>
            <input type="text" placeholder='Add a task' name='addTask'/>
        </div>
        <div className={styles.boxFooter} >
          <div className={styles.item}>

          
            <DuoDate/>
            <RemindMe/>
            <Repeat/>


          {/* 
          
          <Tooltip title="Repeat">
      <IconButton>
      <LoopIcon className={styles.icon}/>
       
      </IconButton>
    </Tooltip>
           */}
          
          </div>
          <div className={styles.addButton}>
         <button>Add</button>
          </div>

        </div>
    </div>
  )
}

export default AddTask
