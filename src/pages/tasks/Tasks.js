import React from 'react';
import MainContent from '../../components/mainContent/MainContent';
import HomeIcon from '@mui/icons-material/Home';
import { useSelector } from 'react-redux';
import SortComp from '../../components/mainContent/SortComp';

const Tasks = ({OpenCloseSideHandler,openClose}) => {
    let Tasks=useSelector(x=>x.Tasks)

    return <MainContent
    Icon={<HomeIcon/>}
    name="Tasks"
     Tasks={Tasks}
     OpenCloseSideHandler={OpenCloseSideHandler} 
     openClose={openClose} />
  }

export default Tasks;
