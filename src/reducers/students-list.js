export const studentsList = (state=null,action)=>{
    console.log(action)
    if(action.type === "STUDENTS_LIST")
    {
        return action.payload
    }
    return state;
}