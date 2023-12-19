import { useSelector } from "react-redux";
import MainContent from "../../components/mainContent/MainContent";
import LightModeIcon from '@mui/icons-material/LightMode';
import { useEffect } from "react";




function Completed({OpenCloseSideHandler,openClose}) {
const update=useSelector(x=>x.update)
let Tasks=useSelector(x=>x.Tasks)
Tasks=Tasks.filter(task=>task.completed)



  return <MainContent
  Icon={<LightModeIcon/>}
  myDay={true}
  name="Completed"
   Tasks={Tasks}
   OpenCloseSideHandler={OpenCloseSideHandler} 


   openClose={openClose} />
}

export default Completed
