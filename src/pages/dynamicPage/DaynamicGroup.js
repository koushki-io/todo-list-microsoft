import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import MainContent from '../../components/mainContent/MainContent'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { useParams } from 'react-router-dom';

function DaynamicGroup({OpenCloseSideHandler,openClose,setcountTasks}) {
    let Tasks=useSelector(x=>x.Tasks)
    const newList=useSelector(x=>x.newList)
    const {group}=useParams()

  const findName=newList.find(f=>f.path==group).name

  Tasks= Tasks.filter(x=>x.group==group)

    return <MainContent
    group={group}
    Icon={<FormatListBulletedIcon/>}
    name={findName}
     Tasks={Tasks}
     OpenCloseSideHandler={OpenCloseSideHandler} 
     openClose={openClose} />

}

export default DaynamicGroup