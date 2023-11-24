export const Tasks=(state=[],action)=>{
   switch (action.type) {
       case 'AddTask':
        return  [...state,action.payload]
       case 'ChangTask':
        return action.payload
       default:
        return state
           
   }

}
export const Update=(state=[],action)=>{
   switch (action.type) {
       case 'Update':
        return  [...state,action.payload]
       default:
        return state
           
   }

}
export const RightSide=(state={task:{},show:false},action)=>{
   switch (action.type) {
      case 'OpenCloseRightSide':
        return {...state,show:action.payload}
      case 'TaskRightSide':
        return {...state,task:action.payload}
        default:
         return state 
           
   }

}







