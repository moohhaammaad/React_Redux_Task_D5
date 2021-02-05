import { connect } from 'react-redux';
import Student from '../components/student'
import { useEffect } from 'react'
import { bindActionCreators } from 'redux'
import { getAllStudents,clearStudentDetails } from '../actions'
const AllStudentsList = ({getAllStudents,clearStudentDetails, match,  list ,history}) => {
    useEffect(() => {
        console.log('as comp did mount')
        //debugger;
        getAllStudents()        
    },[])
    let students=[];
    if (list) {
        if (list.length > 0)
            return (
                <div className="alert alert-dark">
                    {students = list.map((student) => {
                        return <Student key={student.id} studentInfo={student} history={history}/>
                        // return (
                        //     <div className="alert alert-light text-dark" key={student.id} studentInfo={student} history={history}>
                        //         <h3>{student.name}</h3>                            
                        //         <h3>{student.age}</h3>                            
                        //         <h3>{student.phone}</h3>                            
                        //     </div>
                        // )
                    })}
                </div>)
        return <p>
            Enter a valid Name and search again :P 
        </p>
    }

    // return <p>
    //     Enter a Student name and search.
    // </p>
    return( 
        <div>
            {students}
        </div>
    )


}

const mapStateToProps = (state) => {
    return {
        list: state.students.list
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getAllStudents ,clearStudentDetails}, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(AllStudentsList)