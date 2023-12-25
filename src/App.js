
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
import { useDispatch, useSelector } from 'react-redux';
import DaynamicGroup from './pages/dynamicPage/DaynamicGroup';
import SerchTasks from './pages/serch/SerchTasks';
import Completed from './pages/completed/completed';
import { OpenCloseLeftSide, OpenCloseRightSide } from './components/redux/action';



function App() {
  const [openClose, setopenClose] = useState(false)
const meTasks=useSelector(x=>x.Tasks).filter(task=>!task.completed)
const completed=useSelector(x=>x.Tasks).filter(task=>task.completed)
const important=meTasks.filter(task=>task.important)
const myday=meTasks.filter(task=>task.myDay)
const planneded=meTasks.filter(task=>task.duoDate || task.remindMe  || task.repeat )

const dispatch=useDispatch()


const update=useSelector(x=>x.update)

  const [countTasks, setcountTasks] = useState({
    myday:myday.length,
    important:important.length,
    planned:planneded.length,
    assignedMe:0,
    tasks:meTasks.length,
    completed:completed.length
  })
  useEffect(() => {
    setcountTasks(
      {
        myday:myday.length,
        important:important.length,
        planned:planneded.length,
        assignedMe:0,
        tasks:meTasks.length,
     completed:completed.length

      }
    )
  }, [update])
  

  const IsleftSide=useSelector(x=>x.leftSide)
 

  const OpenCloseSideHandler=()=>{
    dispatch(OpenCloseLeftSide(!IsleftSide)) 
    dispatch(OpenCloseRightSide(false)) 
    // setopenClose((last)=>!last)
  }


  return (
   <>
   
    <BrowserRouter>
   <Layout openClose={IsleftSide} OpenCloseSideHandler={OpenCloseSideHandler} countTasks={countTasks}>

    <Routes>
    <Route path='/myday'
    element={<MyDay  openClose={IsleftSide} OpenCloseSideHandler={OpenCloseSideHandler}/>}/>

    <Route path='/important'
    element={<Important   openClose={IsleftSide} OpenCloseSideHandler={OpenCloseSideHandler}/>}/>
    <Route path='/planned'
    element={<Planned   openClose={IsleftSide} OpenCloseSideHandler={OpenCloseSideHandler}/>}/>
    <Route path='/tasks'
    element={<Tasks   openClose={IsleftSide} OpenCloseSideHandler={OpenCloseSideHandler}/>}/>
    <Route path='/completed'
    element={<Completed   openClose={IsleftSide} OpenCloseSideHandler={OpenCloseSideHandler}/>}/>
    <Route path='/assignedMe'
    element={<AssignedMe   openClose={IsleftSide} OpenCloseSideHandler={OpenCloseSideHandler}/>}/>
    <Route path='/groups/:group'
    element={<DaynamicGroup   openClose={IsleftSide} OpenCloseSideHandler={OpenCloseSideHandler}/>}/>
    <Route path='/serch/:name'
    element={<SerchTasks   openClose={IsleftSide} OpenCloseSideHandler={OpenCloseSideHandler}/>}/>

           <Route path='*' element={<NotFound/>}/>
           <Route path='/' element={<Home/>}/>

    </Routes>
   </Layout>
    </BrowserRouter>
 

   </>
  );
}

export default App
