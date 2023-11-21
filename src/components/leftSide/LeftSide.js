import React, { useState } from 'react'
import styles from './leftSIde.module.css'
import MenuIcon from '@mui/icons-material/Menu';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import LightModeIcon from '@mui/icons-material/LightMode';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router-dom';
function LeftSide({showSide,OpenCloseSideHandler}) {
  
  // ["My Day","Important","Planned","Assigned to me","Tasks"]
  const [menuList, setmenuList] = useState([
    {name: 'My Day',path:'myday',icon:<LightModeIcon className={styles.icons}/>,count:5 },
    {name: 'Important',path:'important',icon:<StarBorderIcon className={styles.icons}/>  ,count:5},
    {name: 'Planned',path:'planned',icon:<CalendarMonthIcon className={styles.icons}/> ,count:5},
    {name: 'Assigned to me',path:'assignedMe',icon:<PersonOutlineIcon className={styles.icons}/> ,count:5},
    {name: 'Tasks',path:'tasks',icon:<HomeIcon className={styles.icons}/> ,count:5}
  ])
  const navigate = useNavigate()
  const pathHandler =(path)=>{
    navigate(`./${path}`)
  }
  return (
    <div className={showSide ? styles.parent :styles.parentOff }>
      <div className={styles.header} onClick={OpenCloseSideHandler} ><MenuIcon/></div>
      <div className={styles.menu}>
        { menuList.map((item)=>
      <div key={item.name} 
      onClick={()=>pathHandler(item.path)} 
      className={styles.menuItem}>
        {item.icon} 
      <span>{item.name}</span> 
      <span>{item.count}</span> 
      </div>)
      }
  
      </div>
      <div className={styles.borderBox} >
      <div className={styles.border} ></div>
      </div>
      <div>new</div>

    </div>
  )
}

export default LeftSide
