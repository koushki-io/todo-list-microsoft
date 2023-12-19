
import './App.css'
import { useEffect, useState } from "react";
import MyDay from "./pages/myDay/MyDay";
import Layout from "./components/Layout/Layout";
import { BrowserRouter ,Routes,Route,useHistory } from 'react-router-dom'
import NotFound from './pages/404';
import  Home  from './pages/home/Home';
import Important from './pages/important/Important';
import Planned from './pages/planned/Planned';
import Tasks from './pages/tasks/Tasks';
import AssignedMe from './pages/assignedMe/AssignedMe';
import { useSelector } from 'react-redux';
import DaynamicGroup from './pages/dynamicPage/DaynamicGroup';
import SerchTasks from './pages/serch/SerchTasks';



function App() {
  const [openClose, setopenClose] = useState(true)
const meTasks=useSelector(x=>x.Tasks).filter(task=>!task.completed)
const important=meTasks.filter(task=>task.important)
const myday=meTasks.filter(task=>task.myDay)
const planneded=meTasks.filter(task=>task.duoDate || task.remindMe  || task.repeat )




const update=useSelector(x=>x.update)

  const [countTasks, setcountTasks] = useState({
    myday:myday.length,
    important:important.length,
    planned:planneded.length,
    assignedMe:0,
    tasks:meTasks.length
  })
  useEffect(() => {
    setcountTasks(
      {
        myday:myday.length,
        important:important.length,
        planned:planneded.length,
        assignedMe:0,
        tasks:meTasks.length
      }
    )
  }, [update])
  


  const OpenCloseSideHandler=()=>{
    setopenClose((last)=>!last)
  }

  return (
   <>
   
    <BrowserRouter>
   <Layout openClose={openClose} OpenCloseSideHandler={OpenCloseSideHandler} countTasks={countTasks}>

    <Routes>
    <Route path='/myday'
    element={<MyDay  openClose={openClose} OpenCloseSideHandler={OpenCloseSideHandler}/>}/>

    <Route path='/important'
    element={<Important   openClose={openClose} OpenCloseSideHandler={OpenCloseSideHandler}/>}/>
    <Route path='/planned'
    element={<Planned   openClose={openClose} OpenCloseSideHandler={OpenCloseSideHandler}/>}/>
    <Route path='/tasks'
    element={<Tasks   openClose={openClose} OpenCloseSideHandler={OpenCloseSideHandler}/>}/>
    <Route path='/assignedMe'
    element={<AssignedMe   openClose={openClose} OpenCloseSideHandler={OpenCloseSideHandler}/>}/>
    <Route path='/groups/:group'
    element={<DaynamicGroup   openClose={openClose} OpenCloseSideHandler={OpenCloseSideHandler}/>}/>
    <Route path='/serch/:name'
    element={<SerchTasks   openClose={openClose} OpenCloseSideHandler={OpenCloseSideHandler}/>}/>

           <Route path='*' element={<NotFound/>}/>
           <Route path='/' element={<Home/>}/>

    </Routes>
   </Layout>
    </BrowserRouter>
 

   </>
  );
}

export default App
