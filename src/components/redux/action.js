export const AddTaskAction=(task)=>(dispatch,getstate)=>{
 dispatch({type:'AddTask', payload:task})
 localStorage.setItem("Tasks",JSON.stringify(getstate().Tasks))


}
export const ChangeImportantAction=(ID)=>(dispatch,getstate)=>{
    const mayDay=getstate().Tasks
    const getItem=mayDay.findIndex(f=>f.id===ID)
    mayDay[getItem].important=!mayDay[getItem].important
    dispatch({type:'ChangImportant', payload:mayDay})
  localStorage.setItem("Tasks",JSON.stringify(mayDay))
}


export const ChangeCompletedAction=(ID)=>(dispatch,getstate)=>{
  
    const myDay=getstate().Tasks
   
    const getItem=myDay.forEach(element => {
      if (element.id===ID) {
        element.completed=!element.completed
      }
    });

    dispatch({type:'ChangImportant', payload:myDay})
  localStorage.setItem("Tasks",JSON.stringify(myDay))
}

export const ChangeDropDownAction=(ID)=>(dispatch,getstate)=>{
    const mayDay=getstate().Tasks
    mayDay.forEach(element => {
      if (element.id===ID) {
        element.dropDown=true
      }else{
        element.dropDown=false

      }
      
    });
    dispatch({type:'ChangImportant', payload:mayDay})
    localStorage.setItem("Tasks",JSON.stringify(mayDay))
}
export const CloseDropDownAction=(ID)=>(dispatch,getstate)=>{
    const mayDay=getstate().Tasks
    mayDay.forEach(element => {
        element.dropDown=false
    });
  localStorage.setItem("Tasks",JSON.stringify(mayDay))
  dispatch({type:'ChangImportant', payload:mayDay})


}
export const DeleteAction=(ID)=>(dispatch,getstate)=>{
    const mayDay=getstate().Tasks
    const data=mayDay.filter(element => element.id!==ID);
    dispatch({type:'ChangImportant', payload:data})
  localStorage.setItem("Tasks",JSON.stringify(data))

}
export const UpdateAction=(ID)=>(dispatch,getstate)=>{
    dispatch({type:'Update', payload:"update"})

}
export const OpenCloseRightSide=(flag)=>(dispatch,getstate)=>{

    dispatch({type:'OpenCloseRightSide', payload:flag})

}

export const TaskRightSide=(task)=>(dispatch,getstate)=>{
    dispatch({type:'TaskRightSide', payload:task})

}

export const ChangeMyDayAction=(ID,changed)=>(dispatch,getstate)=>{
  // const audio= new Audio()
  
  const myDay=getstate().Tasks
  const getItem=myDay.forEach(element => {
    if (element.id===ID) {
      element.myDay=changed
    }
  });

  dispatch({type:'ChangImportant', payload:myDay})
localStorage.setItem("Tasks",JSON.stringify(myDay))
}

