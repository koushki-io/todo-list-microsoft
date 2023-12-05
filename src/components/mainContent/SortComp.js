import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import StarBorderIcon from '@mui/icons-material/StarBorder';



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

export default function SortComp({inrightside,sortImportnt,sortAlphabetical}) {
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

  return (
    <div style={{ width:"100%"}}>
       {inrightside ?
  <div  onClick={handleClick}  style={{display:"flex",gap:"10px" ,color:"#6E6E6D",alignItems:"center" ,width:"100%"}}>
  <CalendarMonthIcon onClick={handleClick}  />
  </div>
              :
              <Tooltip title="Sort by">
              <IconButton style={{fontSize:"16px"}} onClick={handleClick}> 
              <SwapVertIcon   /> Sort
               
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
        }}>Sort by</h4>
        <Divider sx={{ my: 0.5 }} />

        <MenuItem onClick={()=>{
                sortImportnt()
                handleClose()
        }}
         disableRipple>
          <StarBorderIcon />
          Importance
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <CalendarMonthIcon />
          
          Due date 
        </MenuItem>
        <MenuItem  onClick={()=>{
                sortAlphabetical()
                handleClose()
        }}disableRipple>
          <SwapVertIcon />
          
          Alphabetical
        </MenuItem>
       
    
      </StyledMenu>
    </div>
  );
}
