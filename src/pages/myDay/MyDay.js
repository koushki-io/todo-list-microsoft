import { useSelector } from "react-redux";
import MainContent from "../../components/mainContent/MainContent";
import LightModeIcon from '@mui/icons-material/LightMode';




function MyDay({OpenCloseSideHandler,openClose}) {
const Tasks=useSelector(x=>x.Tasks)


  return <MainContent
  Icon={<LightModeIcon/>}
  name="My Day"
   Tasks={Tasks}
   OpenCloseSideHandler={OpenCloseSideHandler} 
   openClose={openClose} />
}

export default MyDay
