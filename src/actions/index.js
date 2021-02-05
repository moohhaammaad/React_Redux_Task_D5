import { data } from "jquery"
import axios from 'axios'

const baseURL = "http://localhost:3001/students"
export const getStudents = async (name) => {
    let payload;
    try{
        let response = await fetch(`${baseURL}?name=${name}`)
        payload = await response.json()
        
        console.log(payload)
    }
    catch(err){
        console.log(err)
    }
    return {
        type: 'STUDENTS_LIST',
        payload
    }
}




export const getStudentDetails = async (id) => {
    let payload;
    try{
        let response = await fetch(`${baseURL}/${id}`)
        payload = await response.json()
        console.log(payload)
    }
    catch(err){
        console.log(err)
    }
    return {
        type: 'STUDENT_DETAILS',
        payload
    }

}

export const clearStudentDetails = ()=>{
    return {
        type:'CLEAR_STUDENT_DETAILS',
        payload:null
    }
}


export const getAllStudents = async () => {
    let payload;
    try{
        let response = await fetch(`${baseURL}`)
        payload = await response.json()
        console.log(payload)
    }
    catch(err){
        console.log(err)
    }
    return {
        type: 'ALL_STUDENTS_LIST',
        payload
    }
}

// export const addStudent = async (studentObj) => {
//     let payload;
//     try{
//         let response = await axios.post(`${baseURL}`,{studentObj})
//         payload = response.data
//     }
//     catch(err){
//         console.log(err)
//     }
//     return {
//         type: 'ADD_STUDENT',
//         payload
//     }
    
// }

