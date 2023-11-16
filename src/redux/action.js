
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

