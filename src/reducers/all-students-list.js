
export const allStudentsList = (state=null,action)=>{
    console.log(action)
    if(action.type === "ALL_STUDENTS_LIST")
    {
        return action.payload
    }
    return state;
}