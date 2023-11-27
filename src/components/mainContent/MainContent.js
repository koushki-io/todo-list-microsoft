import React, { useEffect, useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import LightModeIcon from '@mui/icons-material/LightMode';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import styles from './mainContent.module.css'
import moment from 'moment';


import { format } from 'date-fns';
import AddTask from '../../components/AddTask/AddTask';
import TaskItem from '../taskItem/TaskItem';
import Acordion from '../Acordion/Acordion';
import { useDispatch, useSelector } from 'react-redux';
import { CloseDropDownAction, UpdateAction } from '../redux/action';



function MainContent({OpenCloseSideHandler,openClose,Tasks,name,Icon,important,myDay,group}) {

  const today = moment();
  const formattedDate = today.format('MMMM Do'); 
  const dayOfWeek = format(new Date(), 'EEEE');
const update=useSelector(x=>x.update)
const  dispatch=useDispatch()

const completeTasks=Tasks.filter(task=>task.completed)


const scrollHandler=()=>{
  dispatch(CloseDropDownAction())
  dispatch(UpdateAction())
}

  return (
    <div className={styles.myParent}>
      <div className={styles.header}>
       <div className={styles.leftSide}>
        <div className={styles.item}>
        { openClose?<div className={styles.icons}>
         {Icon}
        </div>
        :
        <MenuIcon className={styles.MenuIcon} onClick={OpenCloseSideHandler}/> 
 
        }
        <span >{name}</span> 
        <MoreHorizIcon className={styles.icons}/>
        </div>
        <div className={styles.date}>
        <span>{dayOfWeek} { formattedDate}</span>
        </div>
        


      
       </div>
       <div className={styles.rightSide}></div>
       
        </div>
        <div className={styles.main} >
        <AddTask group={group}  important={important} myDay={myDay}/>
          <div onScroll={scrollHandler} className={styles.tasks}>
          { Tasks.filter(task=>!task.completed).map((item,key)=><TaskItem key={key} data={item}   />)}
           <br/>
           {completeTasks.length ? <Acordion  tasks={completeTasks}/>: null}
         
          </div>
        
        
   
        </div>

    </div>
  )
}

export default MainContent
