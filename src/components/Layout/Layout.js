import { useState } from "react";
import LeftSide from "../leftSide/LeftSide";
import Navabr from "../navbar/Navabr";
import styles from './layout.module.css'
import { useNavigate } from "react-router-dom";
import RightSide from "../rightSide/RightSide";




function Layout(props) {

  return (
    <div className={styles.parent} >
      <div className={styles.navbar}>

          <Navabr/>
      </div>
<div className={styles.main}>
    <div className={styles.leftSide}>
          <LeftSide  countTasks={props.countTasks} showSide={props.openClose}  OpenCloseSideHandler={props.OpenCloseSideHandler} />
      </div>
 
          
  <div className={props.openClose? styles.content: styles.contentSideOff}>
         {props.children}
     </div>
     <div className={styles.rightSide}>
    <RightSide/>
      </div>
</div>
    </div>
  );
}

export default Layout
