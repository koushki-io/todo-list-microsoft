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
import DeleteIcon from '@mui/icons-material/Delete';



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

export default function DuoDate({inrightside ,setdatetask,datetask}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
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
    const duDateHandlet=(value)=>{
      setdatetask(last=>{
        return {...last,duoDate:value}
      })
      setAnchorEl(null);
    }


  return (
    <div style={{ width:"100%"}}>
       {inrightside ?
  <div  onClick={handleClick}  style={{display:"flex",gap:"10px" ,color:"#6E6E6D",alignItems:"center" ,width:"100%"}}>
  <CalendarMonthIcon onClick={handleClick}  />
   <span>Duo date</span>
  </div>
              :
              <Tooltip title="Add duo date">
              <IconButton onClick={handleClick}> 
              <CalendarMonthIcon   />

             <div style={{fontSize:"13px",whiteSpace:"nowrap"}}>
             {datetask.duoDate}
             </div>
    

               
               </IconButton>
            </Tooltip>

       }
    

       

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

        <MenuItem onClick={()=>{duDateHandlet("Today")}} disableRipple>
          <TodayIcon />
          Today
        </MenuItem>
        <MenuItem onClick={()=>{duDateHandlet("Tomorrow")}} disableRipple>
          <KeyboardArrowRightIcon />
          Tomorrow
        </MenuItem>
        <MenuItem onClick={()=>{duDateHandlet("Next week")}} disableRipple>
          <KeyboardDoubleArrowRightIcon />
          Next week
        </MenuItem>
        {datetask.duoDate? <MenuItem onClick={()=>{duDateHandlet(null)}} disableRipple>
          <DeleteIcon />
          Remove duo date
        </MenuItem>  :null}
      
       
      
      </StyledMenu>
    </div>
  );
}
