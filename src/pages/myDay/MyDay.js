import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import styles from './myDay.module.css'
function MyDay({OpenCloseSideHandler}) {
  return (
    <div className={styles.myParent}>
      <div className={styles.header} onClick={OpenCloseSideHandler} ><MenuIcon/></div>

      MyDay
    </div>
  )
}

export default MyDay
