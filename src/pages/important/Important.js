import React from 'react'
import { useSelector } from 'react-redux'
import MainContent from '../../components/mainContent/MainContent'
import StarBorderIcon from '@mui/icons-material/StarBorder';

function Important({OpenCloseSideHandler,openClose}) {
    let Tasks=useSelector(x=>x.Tasks)
    const update=useSelector(x=>x.update)
    
    Tasks=Tasks.filter(task=>task.important)
 


    return <MainContent
    
    Icon={<StarBorderIcon/>}
    name="Important"
    important={true}
     Tasks={Tasks}
     OpenCloseSideHandler={OpenCloseSideHandler} 
     openClose={openClose} />
  }

export default Important