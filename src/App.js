
import './App.css'
import { useEffect, useState } from "react";
import MyDay from "./pages/myDay/MyDay";
import Layout from "./components/Layout/Layout";
import { BrowserRouter ,Routes,Route,useHistory } from 'react-router-dom'
import NotFound from './pages/404';
import  Home  from './pages/home/Home';



function App() {
  const [openClose, setopenClose] = useState(true)


  const OpenCloseSideHandler=()=>{
    setopenClose((last)=>!last)
  }

  return (
   <>
   
   <Layout openClose={openClose} OpenCloseSideHandler={OpenCloseSideHandler}>

    <BrowserRouter>
    <Routes>
    <Route path='/myday'
    element={<MyDay  openClose={openClose} OpenCloseSideHandler={OpenCloseSideHandler}/>}/>
           <Route path='*' element={<NotFound/>}/>
           <Route path='/' element={<Home/>}/>

    </Routes>
    </BrowserRouter>
 

   </Layout>
   </>
  );
}

export default App
