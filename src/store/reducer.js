const initialState={
    todoList:[],
    todo:{},
    isAdd:false
}

export const stateReducer=(state=initialState,action)=>{

    switch(action.type){

        case "GETTASKS":
        return{
            ...state,getTasks:(action.payload)
        }
        case "ISADD":
            return{
                ...state,isAdd:!state.isAdd
            }
        default:return state;
        break;
    }
}