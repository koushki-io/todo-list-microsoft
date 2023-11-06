import React, { useState } from 'react'
import styles from './leftSIde.module.css'
import MenuIcon from '@mui/icons-material/Menu';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import LightModeIcon from '@mui/icons-material/LightMode';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import HomeIcon from '@mui/icons-material/Home';
function LeftSide() {
  const [menuList, setmenuList] = useState(["My Day","Important","Planned","Assigned to me","Tasks"])
  return (
    <div className={styles.parent}>
      <div className={styles.header} ><MenuIcon/></div>
      <div className={styles.menu}>
        <div className={styles.menuItem}><LightModeIcon/> <span>My Day</span> </div>
        <div className={styles.menuItem}><StarBorderIcon/> <span>Important</span> </div>
        <div className={styles.menuItem}><CalendarMonthIcon/> <span>Planned</span> </div>
        <div className={styles.menuItem}><PersonOutlineIcon/> <span>Assigned to me</span> </div>
        <div className={styles.menuItem}><HomeIcon/> <span>Tasks</span> </div>
        
      </div>
      <div className={styles.border} >border</div>
      <div>new</div>

    </div>
  )
}

export default LeftSide
