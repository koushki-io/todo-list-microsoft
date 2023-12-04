import React, { useState } from 'react';
import styles from './navbar.module.css'
import SearchIcon from '@mui/icons-material/Search';
import SettingsSharpIcon from '@mui/icons-material/SettingsSharp';
import Person4SharpIcon from '@mui/icons-material/Person4Sharp';
import AppsIcon from '@mui/icons-material/Apps';
import { useNavigate } from 'react-router-dom';
const Navabr = () => {
    const [serch,setsetch]=useState()
    const navigate=useNavigate()
    const serchHandler=(e)=>{
        const value=e.target.value
        navigate(`/serch/${value}`)
    }
    return (
        <div className={styles.parent}>
            
       <div className={styles.item}>
       <div ><AppsIcon style={{color:"#fff"}}/></div>
        <div>
            <h3 style={{color:"#fff"}}>To Do</h3>
        </div>
       </div>

        <div className={styles.inputBox}>
        <SearchIcon className={styles.iconSerche} />
            <input type="search" onChange={serchHandler} placeholder='Serch...' className={styles.inputSerche}></input>
        </div>

        <div className={styles.item}>
        <div> <SettingsSharpIcon style={{color:"#fff"}} /> </div>
        <div> <Person4SharpIcon style={{color:"#fff"}}/> </div>
         </div>
        

        </div>
    );
}

export default Navabr;
