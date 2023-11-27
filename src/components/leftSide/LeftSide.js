import React, { useState } from 'react'
import styles from './leftSIde.module.css'
import MenuIcon from '@mui/icons-material/Menu';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import LightModeIcon from '@mui/icons-material/LightMode';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AddNewListAction } from '../redux/action';
function LeftSide({showSide,OpenCloseSideHandler,countTasks}) {

// ["My Day","Important","Planned","Assigned to me","Tasks"]
const [menuList, setmenuList] = useState([
{name: 'My Day',path:'myday',icon:<LightModeIcon className={styles.icons}/> },
{name: 'Important',path:'important',icon:<StarBorderIcon className={styles.icons}/>},
{name: 'Planned',path:'planned',icon:<CalendarMonthIcon className={styles.icons}/> },
{name: 'Assigned to me',path:'assignedMe',icon:<PersonOutlineIcon className={styles.icons}/> },
{name: 'Tasks',path:'tasks',icon:<HomeIcon className={styles.icons}/> }
])


const newList=useSelector(x=>x.newList)

console.log(newList);



const [inputValue, setInputValue ] =useState("")
const changValueHandler=(e)=>{
setInputValue(e.target.value)
}

const navigate = useNavigate()
const dispatch = useDispatch()


const pathHandler =(path)=>{
navigate(`./${path}`)
}
return (
<div className={showSide ? styles.parent :styles.parentOff }>
<div className={styles.header} onClick={OpenCloseSideHandler} ><MenuIcon/></div>
<div className={styles.menu}>
{ menuList.map((item)=>
<div className={styles.menuBox} key={item.name} 
onClick={()=>pathHandler(item.path)} >
<div className={styles.menuItem}>
{item.icon} 
<span>{item.name}</span> 
</div>
<div className={styles.countTasks}>
<span>{countTasks[item.path] ? countTasks[item.path] :""}</span> 

</div>
</div>)
}

</div>
<div className={styles.borderBox} >
<div className={styles.border} ></div>
</div>

<div style={{display:"flex", flexDirection:"column"}}>
{newList.map(list=> <span onClick={(()=>{
navigate(`./groups/${list.path}`)
})}
className={styles.group}>
{list.name}
</span>)}

<input type="text"
onChange={changValueHandler}
style={{width:"100px",height:"20px", border:"1px solid black"}}/>
<button
onClick={ ()=>{
const myObj={name:inputValue,path:inputValue.replace(/\s/g, '').toLowerCase()}
dispatch(AddNewListAction(myObj))
}}
 type="submit" 
>add</button>
 
</div>

</div>
)
}

export default LeftSide



