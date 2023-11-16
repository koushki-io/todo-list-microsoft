import React,{useRef, useState} from 'react'
import styles from './taskItem.module.css'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import { ChangeImportantAction,ChangeCompletedAction } from '../../redux/action';
import { useDispatch } from 'react-redux';
import DropDownMenu from './dropMenu/DropDownMenu';

function TaskItem({data,update}) {

const dispatch=useDispatch()
const [client, setclient] = useState(0);
const [showDropMenu, setshowDropMenu] = useState(false);

const onContextMenuHandler=(e)=>{
e.preventDefault()
setclient({x:e.clientX,y:e.clientY})
setshowDropMenu(true)

}


  const  ChangeImportantHandler= ()=>{
    dispatch(ChangeImportantAction(data.id))
    update(last=>last+1)

  }

  const chackedHandler =()=>{
    dispatch(ChangeCompletedAction(data.id))
    update(last=>last+1)

  }



    // window.oncontextmenu = function(event) {
    //   setshowDropMenu(false)


    //   }


 

  
  return (
    <div className={styles.parent}  onContextMenu={onContextMenuHandler}>
<DropDownMenu client={client} show={showDropMenu} setShow={setshowDropMenu}/>


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
  )
}

export default TaskItem