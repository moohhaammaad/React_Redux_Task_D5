
const Student = ({ studentInfo,history }) => {
    const goToDetails = ()=>{
        history.push(`/students/${studentInfo.id}`)
    }

    if (studentInfo) {
        return <div className="alert alert-dark">
            
            {/* <h4 className="text-center">
                {studentInfo.name}                
            </h4> */}
            <div className="alert alert-light text-dark text-center">
                                <h3>{studentInfo.name}</h3>                            
                                <p><span className="font-weight-bold">Age: </span>{studentInfo.age}</p><p> </p>                            
                                <p><span className="font-weight-bold">mobile: </span>{studentInfo.phone}</p>                            
                            </div>
            <button className="btn btn-block btn-primary" onClick={goToDetails}>See Details</button>
            </div>
    }
}
export default Student
