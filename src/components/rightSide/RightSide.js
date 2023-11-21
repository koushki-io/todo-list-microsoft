import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import DeleteIcon from '@mui/icons-material/Delete';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import LightModeIcon from '@mui/icons-material/LightMode';

import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { useDispatch, useSelector } from 'react-redux';
import { ChangeCompletedAction, ChangeImportantAction, DeleteAction, OpenCloseRightSide, UpdateAction } from '../redux/action';
import  CheckBox  from '../taskItem/checkBox/CheckBox';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import styles from './rightSide.module.css'
import DuoDate from '../AddTask/DuoDate';
import RemindMe from '../AddTask/RemindMe';
import Repeat from '../AddTask/Repeat';
import { useRef } from 'react';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: 0,
    }),
    position: 'relative',
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}));

export default function PersistentDrawerRight() {
  const theme = useTheme();
const {show : Open}=useSelector(x=>x.rightSide)
const {task}=useSelector(x=>x.rightSide)
const UPDATE=useSelector(x=>x.update)




const dispatch= useDispatch()



const chackedHandler =()=>{
  dispatch(ChangeCompletedAction(task.id))
dispatch(UpdateAction())

}
  const handleDrawerClose = () => {
    dispatch(OpenCloseRightSide(false))

  };
  const  ChangeImportantHandler= ()=>{
    dispatch(ChangeImportantAction(task.id))
     dispatch(UpdateAction())

  }
  const deleteHandler=()=>{
    dispatch(DeleteAction(task.id))
    dispatch(UpdateAction())
    handleDrawerClose()
 
  
  }
  const listItem=useRef()

  return (
    <>{task.name &&

    <Box sx={{ display: 'flex' ,position:"fixed", zIndex:"99"}}>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
          },
        }}
        variant="persistent"
        anchor="right"
        open={Open}
      >
        <DrawerHeader>
      
          <div className={styles.headerParent} >
            <div className={styles.BoxLeft}>

<CheckBox checked={task.completed} chackedHandler={chackedHandler}  />
<span>{task.name}</span>
            </div>
            <div className={styles.BoxRight}>

{task.important?  <StarIcon style={{color:"blue"}} onClick={ChangeImportantHandler} />  : <StarBorderIcon style={{color:"blue"}} onClick={ChangeImportantHandler}/>}

            </div>


          </div>


        </DrawerHeader>
        <Divider />
        <List>
        {/*  ///////////////  */}
        <div  className={styles.listItem}>
        <LightModeIcon inRightSide={true}/>
          <span>Add to My Day</span>

        </div>

        <div ref={listItem} className={styles.listItem}>

            <RemindMe inRightSide={true}/>
        </div>
        <div ref={listItem} className={styles.listItem}>
        <DuoDate inRightSide={true} />

        </div>
        <div ref={listItem} className={styles.listItem}>
        <Repeat inRightSide={true}/>


        </div>
      
            
        {/*  ///////////////  */}


        </List>
        <Divider />
        <DrawerHeader>
        <List style={{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%" }}>
        <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
                <DeleteIcon   onClick={deleteHandler} style={{color:"red",padding:"10px" , cursor:"pointer"}} /> 
        
                
        </List>

        </DrawerHeader>
      
      </Drawer>
    </Box>
    }
    </>
  );
}
