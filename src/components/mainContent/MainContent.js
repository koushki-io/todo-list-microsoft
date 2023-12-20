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
import { CloseDropDownAction, SortTaskAction, UpdateAction } from '../redux/action';
import SortComp from "../../components/mainContent/SortComp";



function MainContent({OpenCloseSideHandler,
  openClose,
  Tasks,
  name,
  Icon,important,
  myDay,
  group
}) {

  const today = moment();
  const formattedDate = today.format('MMMM Do'); 
  const dayOfWeek = format(new Date(), 'EEEE');
const update=useSelector(x=>x.update)
const  dispatch=useDispatch()

const completeTasks=Tasks.filter(task=>task.completed)
const NocompleteTasks=Tasks.filter(task=>!task.completed)


const scrollHandler=()=>{
  dispatch(CloseDropDownAction())
  dispatch(UpdateAction())
}

const sortImportnt=()=>{
  dispatch(SortTaskAction("important"))
  dispatch(UpdateAction())
}
const sortAlphabetical=()=>{
  dispatch(SortTaskAction("alphabetical"))
  dispatch(UpdateAction())
}
const sortDoudate=()=>{
  dispatch(SortTaskAction("Doudate"))
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
        { name=="My Day"?<div className={styles.date}>
        <span>{dayOfWeek} { formattedDate}</span>
        </div> :null}
        


      
       </div>
       <div className={styles.rightSide}>
       <SortComp sortDoudate={sortDoudate} sortAlphabetical={sortAlphabetical} sortImportnt={sortImportnt}/>
        
       </div>
       
        </div>
        <div className={styles.main} >
          
        {name!=="Completed"? <AddTask plaaned={name=="Planned"?true:false} group={group}  important={important} myDay={myDay}/>:null}
        
          <div onScroll={scrollHandler} className={styles.tasks}>
          { NocompleteTasks.map((item,key)=><TaskItem key={key} data={item}   />)}
          { name=="Completed"? completeTasks.map((item,key)=><TaskItem key={key} data={item}   />):null}
           <br/>
           {name=="Completed"? null: completeTasks.length ? <Acordion  tasks={completeTasks}/>: null}
         
          </div>
        
        
   
        </div>

    </div>
  )
}

export default MainContent
