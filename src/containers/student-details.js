import { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getStudentDetails,clearStudentDetails,deleteStudent } from '../actions'
const StudentDetails = ({ getStudentDetails,clearStudentDetails,deleteStudent, details, match }) => {
    const id = match.params.id
    console.log(id)
    useEffect(() => {
        console.log('as comp did mount')
        //debugger;
        getStudentDetails(id)

        return ()=>{
            console.log('cleanup (unmount)')
            clearStudentDetails()
        }
    },[])
    // const deleteStudent = (id)=>{
    //     deleteStudent(id)
    // }

    const renderStudentDetails = (details) => {
        if (details && details.id) {
            return (
                <div>
                    <div className="alert alert-light text-center ">
                        <h5 className="alert alert-dark mb-0"> {details.name} </h5>
                        <div className="bg-dark text-white pt-4 pb-3">
                        <h5> Age: <span>{details.age}</span> </h5>
                        <h5> Phone: <span>{details.phone}</span> </h5>
                        <button className="btn btn-danger" > 
                        {/* onClick={deleteStudent(id)} */}
                            Delete</button>
                        </div>
                    </div>   
                                  
                </div>
            )
        }
        return ''
    }
    return (<div className="alert alert-light">
        {renderStudentDetails(details)}
    </div>)

}


const mapStateToProps = (state) => {
    console.log(state)
    return {
        details: state.students.details
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getStudentDetails ,clearStudentDetails}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentDetails)

