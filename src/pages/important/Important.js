import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import MainContent from '../../components/mainContent/MainContent'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import SortComp from '../../components/mainContent/SortComp';

function Important({OpenCloseSideHandler,openClose,setcountTasks}) {
    let Tasks=useSelector(x=>x.Tasks)
    const update=useSelector(x=>x.update)
  
    Tasks=Tasks.filter(task=>task.important)

   

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
    
    Icon={<StarBorderIcon/>}
    name="Important"
    important={true}
     Tasks={Tasks}
     OpenCloseSideHandler={OpenCloseSideHandler} 
     SortComp={<SortComp sortAlphabetical={sortAlphabetical} sortImportnt={sortImportnt}/>}

     openClose={openClose} />
  }

export default Important