import React from 'react';
import MainContent from '../../components/mainContent/MainContent';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { useSelector } from 'react-redux';

const Planned = ({OpenCloseSideHandler,openClose}) => {
    const Tasks=useSelector(x=>x.Tasks)


    return <MainContent
    Icon={<CalendarMonthIcon/>}
    name="Planned"
     Tasks={Tasks}
     OpenCloseSideHandler={OpenCloseSideHandler} 
     openClose={openClose} />
  }

export default Planned;
