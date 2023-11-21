import { useSelector } from "react-redux";
import MainContent from "../../components/mainContent/MainContent";
import LightModeIcon from '@mui/icons-material/LightMode';




function MyDay({OpenCloseSideHandler,openClose}) {
const update=useSelector(x=>x.update)
let Tasks=useSelector(x=>x.Tasks)
Tasks=Tasks.filter(task=>task.myDay)


  return <MainContent
  Icon={<LightModeIcon/>}
  myDay={true}
  name="My Day"
   Tasks={Tasks}
   OpenCloseSideHandler={OpenCloseSideHandler} 
   openClose={openClose} />
}

export default MyDay
