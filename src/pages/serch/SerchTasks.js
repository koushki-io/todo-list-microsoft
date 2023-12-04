import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import TaskItem from '../../components/taskItem/TaskItem'
import { CloseDropDownAction, UpdateAction } from '../../components/redux/action'
import styles from './serchItem.module.css'

function SerchTasks() {
    const {name}=useParams()
let Tasks=useSelector(x=>x.Tasks)
const  dispatch=useDispatch()

Tasks=Tasks.filter(fil=>fil.name.trim().toLocaleLowerCase().includes(name.trim().toLocaleLowerCase()))



const scrollHandler=()=>{
    dispatch(CloseDropDownAction())
    dispatch(UpdateAction())
  }


  return (
    <div className={styles.parent}>
        <div className={styles.main}>
        <h1>Serch for :  {name}</h1>

        <div onScroll={scrollHandler} className={styles.tasks}>
        { Tasks.filter(task=>!task.completed).map((item,key)=><TaskItem key={key} data={item}   />)}
        </div>
        </div>
    </div>
  )
}

export default SerchTasks