export const studentDelete = (state = null, action) => {
    if (action.type === "STUDENT_DELETE"){
    console.log('in reducer',action)
        return action.payload}
    return state
}
