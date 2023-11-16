export const MyDay=(state=[],action)=>{
   switch (action.type) {
       case 'AddTask':
        return  [...state,action.payload]
       case 'ChangImportant':
        return action.payload
       default:
        return state
           
   }

}







