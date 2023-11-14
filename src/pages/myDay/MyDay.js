import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import LightModeIcon from '@mui/icons-material/LightMode';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import styles from './myDay.module.css'
import moment from 'moment';

import { format } from 'date-fns';
import AddTask from '../../components/AddTask/AddTask';
import TaskItem from '../../components/taskItem/TaskItem';
import Acordion from '../../components/Acordion/Acordion';

function MyDay({OpenCloseSideHandler,openClose}) {

  const today = moment();
  const formattedDate = today.format('MMMM Do'); 
  const dayOfWeek = format(new Date(), 'EEEE');
const [data, setdata] = useState({
  name:"madi"
})
const [DATA, setDATA] = useState([])

  return (
    <div className={styles.myParent}>
      <div className={styles.header}>
       <div className={styles.leftSide}>
        <div className={styles.item}>
        { openClose?
        <LightModeIcon className={styles.icons}/> :
        <MenuIcon className={styles.MenuIcon} onClick={OpenCloseSideHandler}/> 
 
        }
        <span >My Day</span> 
        <MoreHorizIcon className={styles.icons}/>
        </div>
        <div className={styles.date}>
        <span>{dayOfWeek} { formattedDate}</span>
        </div>
        


      
       </div>
       <div className={styles.rightSide}></div>
       
        </div>

        <div className={styles.main} >
        <AddTask data={DATA} setData={setDATA}/>
        
        {
        
        DATA.map((item,key)=><TaskItem key={key} data={item} />)
        }
    <br/>
        <Acordion/>
        </div>

    </div>
  )
}

export default MyDay
