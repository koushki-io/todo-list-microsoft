import React from 'react';
import MainContent from '../../components/mainContent/MainContent';
import HomeIcon from '@mui/icons-material/Home';
import { useSelector } from 'react-redux';
import SortComp from '../../components/mainContent/SortComp';

const Tasks = ({OpenCloseSideHandler,openClose}) => {
    let Tasks=useSelector(x=>x.Tasks)

    
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
    Icon={<HomeIcon/>}
    name="Tasks"
     Tasks={Tasks}
     OpenCloseSideHandler={OpenCloseSideHandler} 
     SortComp={<SortComp sortAlphabetical={sortAlphabetical} sortImportnt={sortImportnt}/>}
     openClose={openClose} />
  }

export default Tasks;
