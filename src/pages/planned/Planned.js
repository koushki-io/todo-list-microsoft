import React, { useEffect } from 'react';
import MainContent from '../../components/mainContent/MainContent';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { useSelector } from 'react-redux';
import SortComp from '../../components/mainContent/SortComp';

const Planned = ({OpenCloseSideHandler,openClose,setcountTasks}) => {
    let Tasks=useSelector(x=>x.Tasks)
    Tasks=[]

    const sortImportnt=()=>{
      Tasks=Tasks.sort((a,b)=>b.important-a.important)
    }
    const sortAlphabetical=()=>{
    
      Tasks=Tasks.sort(function(a, b){
        if(a.name < b.name) { return -1; }
        if(a.name > b.name) { return 1; }
        return 0;
    })
    }


    return <MainContent
    Icon={<CalendarMonthIcon/>}
    name="Planned"
     Tasks={Tasks}
     OpenCloseSideHandler={OpenCloseSideHandler} 
     SortComp={<SortComp sortAlphabetical={sortAlphabetical} sortImportnt={sortImportnt}/>}

     openClose={openClose} />
  }

export default Planned;
