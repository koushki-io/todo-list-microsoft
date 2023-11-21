
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



function App() {
  const [openClose, setopenClose] = useState(true)


  const OpenCloseSideHandler=()=>{
    setopenClose((last)=>!last)
  }

  return (
   <>
   
    <BrowserRouter>
   <Layout openClose={openClose} OpenCloseSideHandler={OpenCloseSideHandler}>

    <Routes>
    <Route path='/myday'
    element={<MyDay  openClose={openClose} OpenCloseSideHandler={OpenCloseSideHandler}/>}/>

    <Route path='/important'
    element={<Important  openClose={openClose} OpenCloseSideHandler={OpenCloseSideHandler}/>}/>
    <Route path='/planned'
    element={<Planned  openClose={openClose} OpenCloseSideHandler={OpenCloseSideHandler}/>}/>
    <Route path='/tasks'
    element={<Tasks  openClose={openClose} OpenCloseSideHandler={OpenCloseSideHandler}/>}/>
    <Route path='/assignedMe'
    element={<AssignedMe  openClose={openClose} OpenCloseSideHandler={OpenCloseSideHandler}/>}/>

           <Route path='*' element={<NotFound/>}/>
           <Route path='/' element={<Home/>}/>

    </Routes>
   </Layout>
    </BrowserRouter>
 

   </>
  );
}

export default App
