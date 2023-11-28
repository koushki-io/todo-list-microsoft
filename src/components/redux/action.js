export const AddTaskAction=(task)=>(dispatch,getstate)=>{
 dispatch({type:'AddTask', payload:task})
 localStorage.setItem("Tasks",JSON.stringify(getstate().Tasks))


}
export const ChangeImportantAction=(ID)=>(dispatch,getstate)=>{
    const mayDay=getstate().Tasks
    const getItem=mayDay.findIndex(f=>f.id===ID)
    mayDay[getItem].important=!mayDay[getItem].important
    dispatch({type:'ChangTask', payload:mayDay})
  localStorage.setItem("Tasks",JSON.stringify(mayDay))
}


export const ChangeCompletedAction=(ID)=>(dispatch,getstate)=>{
  
    const myDay=getstate().Tasks
   
    const getItem=myDay.forEach(element => {
      if (element.id===ID) {
        element.completed=!element.completed
      }
    });

    dispatch({type:'ChangTask', payload:myDay})
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
    dispatch({type:'ChangTask', payload:mayDay})
    localStorage.setItem("Tasks",JSON.stringify(mayDay))
}
export const CloseDropDownAction=(ID)=>(dispatch,getstate)=>{
    const mayDay=getstate().Tasks
    mayDay.forEach(element => {
        element.dropDown=false
    });
  localStorage.setItem("Tasks",JSON.stringify(mayDay))
  dispatch({type:'ChangTask', payload:mayDay})


}
export const DeleteAction=(ID)=>(dispatch,getstate)=>{
    const mayDay=getstate().Tasks
    const data=mayDay.filter(element => element.id!==ID);
    dispatch({type:'ChangTask', payload:data})
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
  myDay.forEach(element => {
    if (element.id===ID) {
      element.myDay=changed
    }
  });

  dispatch({type:'ChangTask', payload:myDay})
localStorage.setItem("Tasks",JSON.stringify(myDay))
}

export const StepTaskActon=(ID,newStep)=>(dispatch,getstate)=>{
  // const audio= new Audio()
  
  const myDay=getstate().Tasks
  myDay.forEach(element => {
    if (element.id===ID) {
      const step=element.step
      element.step=[...step,newStep]
    }
  });

  dispatch({type:'ChangTask', payload:myDay})
localStorage.setItem("Tasks",JSON.stringify(myDay))
}
export const StepTaskChangeNameActon=(taskId,stepId,name)=>(dispatch,getstate)=>{
  // const audio= new Audio()
  
  const myDay=getstate().Tasks
  const getItem=myDay.forEach(element => {
    if (element.id===taskId) {
      const steps=element.step
      steps.map(step=>{
        if (step.id===stepId){
          step.name=name
        }
      })
     
    }
  });

  dispatch({type:'ChangTask', payload:myDay})
localStorage.setItem("Tasks",JSON.stringify(myDay))
}
export const StepTaskChangeCopletedActon=(taskId,stepId)=>(dispatch,getstate)=>{

  
  const myDay=getstate().Tasks
 myDay.forEach(element => {
    if (element.id===taskId) {
      const steps=element.step
      steps.map(step=>{
        if (step.id===stepId){
          const completed=step.completed
          step.completed=!completed
        }
      })
     
    }
  });

  dispatch({type:'ChangTask', payload:myDay})
localStorage.setItem("Tasks",JSON.stringify(myDay))
}
export const StepTaskDeleteActon=(taskId,stepId)=>(dispatch,getstate)=>{
  const myDay=getstate().Tasks
 myDay.forEach(element => {
    if (element.id===taskId) {
      const steps=element.step.filter(step=>(step.id!==stepId)  )
     
      element.step=steps
    }
  });

  dispatch({type:'ChangTask', payload:myDay})
localStorage.setItem("Tasks",JSON.stringify(myDay))
}

export const ChangeNoteAction=(ID,note)=>(dispatch,getstate)=>{
  // const audio= new Audio()
  
  const myDay=getstate().Tasks
  myDay.forEach(element => {
    if (element.id===ID) {
      element.note=note
    }
  });

  dispatch({type:'ChangTask', payload:myDay})
localStorage.setItem("Tasks",JSON.stringify(myDay))
}
export const AddNewListAction=(newList)=>(dispatch,getstate)=>{
  let myList=getstate().newList

  myList=[...myList,newList]

  localStorage.setItem("newList",JSON.stringify(myList))

  dispatch({type:'chanList', payload:myList})
}

export const DeleteListAction=(path)=>(dispatch,getstate)=>{
  let myList=getstate().newList.filter(list=>list.path!==path)

  localStorage.setItem("newList",JSON.stringify(myList))

  dispatch({type:'chanList', payload:myList})
}
export const DeleteTaskInList=(path)=>(dispatch,getstate)=>{
  const mayDay=getstate().Tasks
  const data=mayDay.filter(element => element.group!==path);
  dispatch({type:'ChangTask', payload:data})
localStorage.setItem("Tasks",JSON.stringify(data))

}
