// Array-based approach
const streamReducer = (state=[], action) =>{
    switch(action.type){
        case 'EDIT_STREAM':
        return state.map(stream =>{
            if(stream.id === action.payload.id){
                return action.payload
            }else{
                return MediaStream
            }
        })
        default:
        return state;

    }
}

// Object-based approach

const streamreducer = (state={}, action) =>{
    switch(action.type){
        case 'edit_stram':
        /*const newstate ={...state};
        newstate[action.payload.id]= action.payload;
        return newstate*/

        return {...state, [action.payload.id]: action.payload}

        default:
        return state;
    }
}