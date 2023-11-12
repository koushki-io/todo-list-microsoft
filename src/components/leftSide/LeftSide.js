import React, { useState } from 'react'
import styles from './leftSIde.module.css'
import MenuIcon from '@mui/icons-material/Menu';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import LightModeIcon from '@mui/icons-material/LightMode';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import HomeIcon from '@mui/icons-material/Home';
function LeftSide({showSide,OpenCloseSideHandler}) {
  

  const [menuList, setmenuList] = useState(["My Day","Important","Planned","Assigned to me","Tasks"])
  return (
    <div className={showSide ? styles.parent :styles.parentOff }>
      <div className={styles.header} onClick={OpenCloseSideHandler} ><MenuIcon/></div>
      <div className={styles.menu}>
        <div className={styles.menuItem}><LightModeIcon className={styles.icons}/> <span>My Day</span> </div>
        <div className={styles.menuItem}><StarBorderIcon className={styles.icons}/> <span>Important</span> </div>
        <div className={styles.menuItem}><CalendarMonthIcon className={styles.icons}/> <span>Planned</span> </div>
        <div className={styles.menuItem}><PersonOutlineIcon className={styles.icons}/> <span>Assigned to me</span> </div>
        <div className={styles.menuItem}><HomeIcon className={styles.icons} /> <span>Tasks</span> </div>
        
      </div>
      <div className={styles.borderBox} >
      <div className={styles.border} ></div>
      </div>
      <div>new</div>

    </div>
  )
}

export default LeftSide
