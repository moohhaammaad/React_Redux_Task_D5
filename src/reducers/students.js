export const students = (state={},action)=>{
    console.log(state)
    switch(action.type){
        case 'STUDENTS_LIST':{
            return {...state,list:action.payload}
        }
        case 'ALL_STUDENTS_LIST':{
            return {...state,list:action.payload}
        }

        case 'STUDENT_DETAILS':{    
            return {...state,details:action.payload}
        }

        case 'CLEAR_STUDENT_DETAILS':{
            return{...state,details:action.payload}
        }
        // case 'ADD_STUDENT ':{
        //     const students = state.students.concat(action.payload);
        //     return{...state, students}
        // }
    }

    return state
}

