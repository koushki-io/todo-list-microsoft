import React from 'react'
import styles from './taskItem.module.css'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';

function TaskItem({data}) {
    const [checked, setChecked] = React.useState(true);
  
    const handleChange = (event) => {
      setChecked(event.target.checked);
    };
  
  return (
    <div className={styles.parent}>

<div className={styles.leftSide}>
        <div className={styles.checkbox_wrapper_31}>
  <input type="checkbox"/>
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
    <StarBorderIcon/>
    <StarIcon/>



</div>


    </div>
  )
}

export default TaskItem