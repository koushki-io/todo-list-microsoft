
export const AddTaskAction=(task)=>(dispatch,getstate)=>{
 dispatch({type:'AddTask', payload:task})
 localStorage.setItem("myDay",JSON.stringify(getstate().myDay))


}
export const ChangeImportantAction=(ID)=>(dispatch,getstate)=>{
    const mayDay=getstate().myDay
    const getItem=mayDay.findIndex(f=>f.id===ID)
    mayDay[getItem].important=!mayDay[getItem].important
    dispatch({type:'ChangImportant', payload:mayDay})
  localStorage.setItem("myDay",JSON.stringify(mayDay))
}


export const ChangeCompletedAction=(ID)=>(dispatch,getstate)=>{
  
    const mayDay=getstate().myDay
    const getItem=mayDay.findIndex(f=>f.id===ID)
    mayDay[getItem].completed=!mayDay[getItem].completed
    dispatch({type:'ChangImportant', payload:mayDay})
  localStorage.setItem("myDay",JSON.stringify(mayDay))
}

export const ChangeDropDownAction=(ID)=>(dispatch,getstate)=>{
    const mayDay=getstate().myDay
    mayDay.forEach(element => {
      if (element.id===ID) {
        element.dropDown=true
      }else{
        element.dropDown=false

      }
      
    });
    dispatch({type:'ChangImportant', payload:mayDay})
    localStorage.setItem("myDay",JSON.stringify(mayDay))
}
export const CloseDropDownAction=(ID)=>(dispatch,getstate)=>{
    const mayDay=getstate().myDay
    mayDay.forEach(element => {
        element.dropDown=false
    });
  localStorage.setItem("myDay",JSON.stringify(mayDay))
  dispatch({type:'ChangImportant', payload:mayDay})


}
export const DeleteAction=(ID)=>(dispatch,getstate)=>{
    const mayDay=getstate().myDay
    const data=mayDay.filter(element => element.id!==ID);
    dispatch({type:'ChangImportant', payload:data})
  localStorage.setItem("myDay",JSON.stringify(data))

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


