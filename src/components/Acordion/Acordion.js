import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TaskItem from '../taskItem/TaskItem';

export default function Acordion({tasks}) {

  return (
    <div>
      <Accordion >
        <AccordionSummary
        style={{backgroundColor:"#FAF9F8"}}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Completed {tasks.length}</Typography>
        </AccordionSummary  >

        <AccordionDetails
        style={{backgroundColor:"#FAF9F8"}}
        >
        { tasks.map((item,key)=><TaskItem key={key} data={item}   />)}
         
         
        </AccordionDetails>
      </Accordion>
     
    </div>
  );
}
