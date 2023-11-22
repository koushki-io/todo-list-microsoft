import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import DeleteIcon from '@mui/icons-material/Delete';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import LightModeIcon from '@mui/icons-material/LightMode';
import CloseIcon from '@mui/icons-material/Close';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { useDispatch, useSelector } from 'react-redux';
import { ChangeCompletedAction, ChangeImportantAction, ChangeMyDayAction, DeleteAction, OpenCloseRightSide, UpdateAction } from '../redux/action';
import  CheckBox  from '../taskItem/checkBox/CheckBox';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import styles from './rightSide.module.css'
import DuoDate from '../AddTask/DuoDate';
import RemindMe from '../AddTask/RemindMe';
import Repeat from '../AddTask/Repeat';
import { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Notification from "../../audio/mixkit-correct-answer-tone-2870 (mp3cut.net).mp3"




export default function PersistentDrawerRight() {
  const theme = useTheme();
const {show : Open}=useSelector(x=>x.rightSide)
const {task}=useSelector(x=>x.rightSide)
const UPDATE=useSelector(x=>x.update)
const [widthBox, setwidthBox] = useState(300);
useEffect(() => {
  setwidthBox(Open?300:0)
}, [UPDATE]);




const dispatch= useDispatch()



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
    <>{task.name && <div style={{width:widthBox,marginRight:!Open?"-300px":"0"}} className={styles.rightSide}>
    
    <div className={styles.headerParent} >
            <div className={styles.BoxLeft}>

<CheckBox checked={task.completed} chackedHandler={chackedHandler}  />
<span>{task.name}</span>
            </div>
            <div className={styles.BoxRight}>

{task.important?  <StarIcon style={{color:"blue"}} onClick={ChangeImportantHandler} />  : <StarBorderIcon style={{color:"blue"}} onClick={ChangeImportantHandler}/>}

            </div>


          </div>
          
        <div  className={styles.addMyDay}  >
       <div onClick={addMyDay}  style={{width:"100%"}}>
       <LightModeIcon inRightSide={true}/>
          <span>Add to My Day</span>
       </div>
      
           {task.myDay ? <span onClick={removeMyDay} style={{cursor:"pointer",color:"#c1c1c1"}}><CloseIcon style={{fontSize:"20px"}}/></span>: null }
        </div>

        <div ref={listItem} className={styles.listItem}>

            <RemindMe inRightSide={true}/>
        </div>
        <div ref={listItem} className={styles.listItem}>
        <DuoDate inRightSide={true} />

        </div>
        <div ref={listItem} className={styles.listItem}>
        <Repeat inRightSide={true}/>


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
