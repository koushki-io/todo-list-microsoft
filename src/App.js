
import './App.css'
import { useState } from "react";
import MyDay from "./pages/myDay/MyDay";
import Layout from "./components/Layout/Layout";



function App() {
  const [openClose, setopenClose] = useState(true)

  const OpenCloseSideHandler=()=>{
    setopenClose((l)=>!l)
  }

  return (
   <>
   <Layout openClose={openClose} OpenCloseSideHandler={OpenCloseSideHandler}>
 <MyDay OpenCloseSideHandler={OpenCloseSideHandler}/>

   </Layout>
   </>
  );
}

export default App
