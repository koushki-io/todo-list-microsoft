import Navabr from "./components/navbar/Navabr";
import './App.css'
import PersistentDrawerLeft from "./components/leftSide/LeftSide";

function App() {
  // const [value, setValue] = useState(0);
  return (
    <div className="parent" >
      <div className="navbar">
   <Navabr/>
      </div>
<div className="main">
  <div className="leftSide">
<PersistentDrawerLeft/>

  </div>
</div>
    </div>
  );
}

export default App;
