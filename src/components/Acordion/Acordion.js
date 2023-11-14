import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TaskItem from '../taskItem/TaskItem';

export default function Acordion() {
  const [data, setdata] = React.useState({
    name:"madi"
  })
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Compelited 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <TaskItem data={data} />
          <TaskItem data={data} />
          <TaskItem data={data} />
          <TaskItem data={data} />
          <TaskItem data={data} />
          <TaskItem data={data} />
          <TaskItem data={data} />
          <TaskItem data={data} />
          <TaskItem data={data} />

          </Typography>
        </AccordionDetails>
      </Accordion>
     
    </div>
  );
}
