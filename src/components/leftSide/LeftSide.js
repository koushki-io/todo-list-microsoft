import React, { useRef, useState } from 'react'
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
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import DropDownMenu from "./dropMenu/DropDownMenu"

function LeftSide({showSide,OpenCloseSideHandler,countTasks}) {

// ["My Day","Important","Planned","Assigned to me","Tasks"]
const [menuList, setmenuList] = useState([
{name: 'My Day',path:'myday',icon:<LightModeIcon className={styles.icons}/> },
{name: 'Important',path:'important',icon:<StarBorderIcon className={styles.icons}/>},
{name: 'Planned',path:'planned',icon:<CalendarMonthIcon className={styles.icons}/> },
// {name: 'Assigned to me',path:'assignedMe',icon:<PersonOutlineIcon className={styles.icons}/> },
{name: 'Tasks',path:'tasks',icon:<HomeIcon className={styles.icons}/> }
])


const newList=useSelector(x=>x.newList)


const Tasks=useSelector(x=>x.Tasks)
// const listCont=
const listPath=newList.map((list=>list.path))
const countList={}
listPath.map(path=>{
    let count=0
    Tasks.map(task=>{
        if (task.group==path && !task.completed) {
            count++
        }
    })
    countList[path]=count
    return countList

})











const [inputValue, setInputValue ] =useState("")
const changValueHandler=(e)=>{
setInputValue(e.target.value)
}

const navigate = useNavigate()
const dispatch = useDispatch()


const[client,setClient]=useState({x:0,y:0})
const[showDroup,setshowDroup]=useState(false)
const[selectPath,setselectPath]=useState('')
const ContextMenuHandler=(e,path)=>{
    e.preventDefault()
    setClient({x:e.pageX,y:e.pageY})
    setselectPath(path)
    setshowDroup(true)
}

const CloseDropDoun=()=>{
    setshowDroup(false)
}


const addGroupHandler =(e)=>{
    e.preventDefault()
    setInputValue("")
    const countList={name:inputValue,path:inputValue.replace(/\s/g, '').toLowerCase()}
    if(inputValue.length){

        dispatch(AddNewListAction(countList))
    }
}
const listItem=useRef()
// window.oncontextmenu = function(event) {
//     if (event.target.className !== listItem.current.className) {
//         CloseDropDoun()
//     }

    // }
window.onclick = function(event) {
  
    CloseDropDoun()
    

    }

const pathHandler =(path)=>{
navigate(`./${path}`)
}
return (
<div className={showSide ? styles.parent :styles.parentOff }>
<div className={styles.header} onClick={OpenCloseSideHandler} ><MenuIcon/></div>
<div className={styles.menuParent}>
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
<div className={styles.menuList}>
{newList.map(list=> <div 
className={styles.menuBoxList} key={list.name} 
ref={listItem}
onContextMenu={(e)=>ContextMenuHandler(e,list.path)}
 onClick={(()=>{
navigate(`./groups/${list.path}`)
})}>
<div className={styles.list}>
<FormatListBulletedIcon/>
<span>{list.name}</span> 
</div>

<div className={styles.listCount}>{countList[list.path]>0? countList[list.path] :null}</div>
</div>)}

<form onSubmit={addGroupHandler} className={styles.formParent}>
        <div className={styles.boxInput} >
            <span>+</span>
            <input type="text" value={inputValue} onChange={changValueHandler} placeholder='New List' name='newlist'/>
        </div>
       {inputValue.length ? <button type='submit'>Add</button> :null}
        </form>


 
</div>
</div>
{showDroup ? <DropDownMenu  client={client} path={selectPath}  /> :null}
</div>
)
}

export default LeftSide



