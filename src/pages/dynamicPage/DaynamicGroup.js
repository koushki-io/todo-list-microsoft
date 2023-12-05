import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import MainContent from '../../components/mainContent/MainContent'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { useParams } from 'react-router-dom';
import SortComp from '../../components/mainContent/SortComp';

function DaynamicGroup({OpenCloseSideHandler,openClose,setcountTasks}) {
    let Tasks=useSelector(x=>x.Tasks)
    const newList=useSelector(x=>x.newList)
    const {group}=useParams()

  const findName=newList.find(f=>f.path==group).name

  Tasks= Tasks.filter(x=>x.group==group)

  
  const sortImportnt=()=>{
    Tasks.sort((a,b)=>b.important-a.important)
  }
  const sortAlphabetical=()=>{
    
    Tasks.sort(function(a, b){
      if(a.name < b.name) { return -1; }
      if(a.name > b.name) { return 1; }
      return 0;
  })
  }


    return <MainContent
    group={group}
    Icon={<FormatListBulletedIcon/>}
    name={findName}
     Tasks={Tasks}
     OpenCloseSideHandler={OpenCloseSideHandler} 
   SortComp={<SortComp sortAlphabetical={sortAlphabetical} sortImportnt={sortImportnt}/>}

     openClose={openClose} />

}

export default DaynamicGroup