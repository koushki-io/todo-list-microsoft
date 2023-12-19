import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import ArchiveIcon from '@mui/icons-material/Archive';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import TodayIcon from '@mui/icons-material/Today';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import CloseIcon from '@mui/icons-material/Close';
import { ChangedouDate, UpdateAction } from '../../redux/action';
import { useDispatch } from 'react-redux';


const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));

export default function DuoDate({task}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [name, setname] = React.useState("Add duo data");
  const dispatch=useDispatch()
  const changeName = (value) => {
    setname(value)
    setAnchorEl(null);
    dispatch(ChangedouDate(task.id,"duoDate",value))

  };
  const removeDuo=() => {
    setname("Add duo data")
    dispatch(ChangedouDate(task.id,"duoDate",null))

  }
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {

    setAnchorEl(null);
  };
 
  window.oncontextmenu = function(event) {
    setAnchorEl(null);
    }

 

  return (
    <div style={{ width:"100%"}}>
       
    <div   style={{display:"flex" ,justifyContent:"space-between",color:"#6E6E6D",alignItems:"center" ,width:"100%"}}>
    <div  onClick={handleClick} style={{display:"flex",gap:"10px" ,color:"#6E6E6D",alignItems:"center",width:"100%"}}>
    <CalendarMonthIcon  />
  <span>{name}</span>
    </div>
  
 {task.duoDate? <span onClick={removeDuo}><CloseIcon/></span>:null}
  </div>
         
    

       

      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <h4 style={{
          width:"100%",
          height:"40px",
          display:"flex",
          justifyContent:"center",
          alignItems:"center"
        }}>Duo</h4>
        <Divider sx={{ my: 0.5 }} />

        <MenuItem onClick={()=>changeName("Today")} disableRipple>
          <TodayIcon />
          Today
        </MenuItem>
        <MenuItem onClick={()=>changeName("Tomorrow")} disableRipple>
          <KeyboardArrowRightIcon />
          Tomorrow
        </MenuItem>
        <MenuItem onClick={()=>changeName("Next week")} disableRipple>
          <KeyboardDoubleArrowRightIcon />
          Next week
        </MenuItem>
      </StyledMenu>
    </div>
  );
}
