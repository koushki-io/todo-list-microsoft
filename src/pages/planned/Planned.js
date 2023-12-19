import React, { useEffect } from 'react';
import MainContent from '../../components/mainContent/MainContent';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { useSelector } from 'react-redux';
import SortComp from '../../components/mainContent/SortComp';

const Planned = ({OpenCloseSideHandler,openClose,setcountTasks}) => {
    let Tasks=useSelector(x=>x.Tasks)
    
    Tasks=Tasks.filter(task=>task.duoDate || task.remindMe  || task.repeat )


    return <MainContent
    Icon={<CalendarMonthIcon/>}
    name="Planned"
     Tasks={Tasks}
     OpenCloseSideHandler={OpenCloseSideHandler} 
   

     openClose={openClose} />
  }

export default Planned;
