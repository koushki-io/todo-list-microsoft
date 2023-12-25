import * as React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import LightModeIcon from '@mui/icons-material/LightMode';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from 'react-redux';
import { ChangeCompletedAction, ChangeImportantAction, ChangeMyDayAction, ChangeNoteAction, DeleteAction, OpenCloseRightSide, StepTaskActon, UpdateAction } from '../redux/action';
import  CheckBox  from '../taskItem/checkBox/CheckBox';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import styles from './rightSide.module.css'
import DuoDate from './duoDate/DuoDate';
import RemindMe from './duoDate/RemindMe';
import Repeat from './duoDate/Repeat';
import { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Notification from "../../audio/mixkit-correct-answer-tone-2870 (mp3cut.net).mp3"

import { v4 } from 'uuid';
import StepsBox from './StepsBox';




export default function PersistentDrawerRight() {
const {show : Open}=useSelector(x=>x.rightSide)
const {task}=useSelector(x=>x.rightSide)
const UPDATE=useSelector(x=>x.update)

const [widthBox, setwidthBox] = useState(300);
const [Note, setNote] = useState(task.note)


useEffect(() => {
  setwidthBox(Open?300:0)
  setNote(task.note)
}, [UPDATE]);
const dispatch= useDispatch()


const changeNote=(e)=>{
  setNote(e.target.value)
}
const saveNote=(e)=>{
  dispatch(ChangeNoteAction(task.id,Note))
}



const generateShortId = () => {
  const fullId = v4(); 
  const shortId = fullId.substr(0, 8); 
  return shortId;
};

const stepId=generateShortId()
const [changValue, setchangValue] = useState('')

const addStepHandler=(e)=>{
e.preventDefault()
const step={
  name:changValue,
  completed:false,
  id:stepId
}


setchangValue("")
dispatch(StepTaskActon(task.id,step))

}






const chackedHandler =()=>{
  const audio = new Audio(Notification)
 if (!task.completed) {
   audio.play()
 }
 

  dispatch(ChangeCompletedAction(task.id))
dispatch(UpdateAction())

}
  const handleDrawerClose = () => {
    dispatch(OpenCloseRightSide(false))

  };
  const  ChangeImportantHandler= ()=>{
    dispatch(ChangeImportantAction(task.id))
     dispatch(UpdateAction())

  }
  const deleteHandler=()=>{
    dispatch(DeleteAction(task.id))
    dispatch(UpdateAction())
    handleDrawerClose()
    
    
  }
  const removeMyDay=()=>{
    dispatch(ChangeMyDayAction(task.id,false))
  }
  
  const addMyDay=()=>{
 dispatch(ChangeMyDayAction(task.id,true))

 
  
  }

  const listItem=useRef()


  return (
    <>{task.name && <div 
     style={{width:widthBox,marginRight:!Open?"-300px":"0"}}
      className={styles.rightSide}>
    
    <div className={styles.headerParent} >
      <div  className={styles.detilesItem}>

            <div className={styles.BoxLeft}>

<CheckBox checked={task.completed} chackedHandler={chackedHandler}  />
<span>{task.name}</span>
            </div>
            <div className={styles.BoxRight}>
           {task.important?
             <StarIcon style={{color:"blue"}} onClick={ChangeImportantHandler} />  :
              <StarBorderIcon style={{color:"blue"}} onClick={ChangeImportantHandler}/>}
            </div>
      </div>

      
   



          </div>
        <div className={styles.scrollMenu}>
        {

task.step.map(step =><StepsBox key={step.id} step={step} taskId={task.id} styles={styles}/>)
}


      <form onSubmit={addStepHandler} className={styles.formParent}>
        <div className={styles.boxInput} >
            <span>+</span>
            <input type="text" value={changValue} onChange={(e)=>setchangValue(e.target.value)} placeholder='Add a Step' name='addstep'/>
        </div>
       {changValue.length ? <button type='submit'>Add</button> :null}
        </form>
                    
        <div  className={styles.addMyDay}  >
       <div onClick={addMyDay}  style={{width:"100%"}}>
       <LightModeIcon />
          <span>Add to My Day</span>
       </div>
      
           {task.myDay ? <span onClick={removeMyDay} style={{cursor:"pointer",color:"#c1c1c1"}}><CloseIcon style={{fontSize:"20px"}}/></span>: null }
        </div>

         <div ref={listItem} className={styles.listItem}>

            <RemindMe task={task}/>
        </div>
        <div ref={listItem} className={styles.listItem}>
        <DuoDate task={task} />

        </div>
        <div ref={listItem} className={styles.listItem}>
        <Repeat task={task}/>


        </div> 


        <div className={styles.note}>
        
        <textarea
        value={Note}
        onChange={changeNote}
        onBlur={saveNote}
        name="w3review" rows="2" cols="2">
       
</textarea>
        </div>
        {/* ////////////////// */}
        </div>
      
            
       


       
      <div className={styles.boxFooter}>
          <div>    
              <ChevronRightIcon  onClick={handleDrawerClose}/>
                <DeleteIcon   onClick={deleteHandler} style={{color:"red",padding:"10px" , cursor:"pointer"}} />
                 </div>
      </div>
        
                
    
    </div>

   

    }
    </>
  );
}
