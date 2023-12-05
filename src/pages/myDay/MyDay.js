import { useSelector } from "react-redux";
import MainContent from "../../components/mainContent/MainContent";
import LightModeIcon from '@mui/icons-material/LightMode';
import { useEffect } from "react";
import SortComp from "../../components/mainContent/SortComp";




function MyDay({OpenCloseSideHandler,openClose,setcountTasks}) {
const update=useSelector(x=>x.update)
let Tasks=useSelector(x=>x.Tasks)
Tasks=Tasks.filter(task=>task.myDay)




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
  Icon={<LightModeIcon/>}
  myDay={true}
  name="My Day"
   Tasks={Tasks}
   OpenCloseSideHandler={OpenCloseSideHandler} 
   SortComp={<SortComp sortAlphabetical={sortAlphabetical} sortImportnt={sortImportnt}/>}

   openClose={openClose} />
}

export default MyDay
