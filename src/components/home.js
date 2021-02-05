import StudentsList from '../containers/students-list'
import Search from '../containers/search'
import AllStudentsList from '../containers/all-students-list'
const Home = ({history})=>{
    const addStudent = ()=>{
        history.push(`/add-student`)
    }
    return <div>
        <h1 className="text-white bg-dark text-center">StudentsHome</h1>
        <button
        type="button"
        className="btn btn-primary"
        className="btn btn-block btn-primary mb-5"
        onClick={addStudent}
      >
        Add Student +
      </button>
       {/* <button onClick={addStudent}>Add</button> */}
        {/* <AddStudent/> */}
        <Search/>

        {/* <StudentsList history={history}/> */}
        <AllStudentsList history={history}/>
    </div>

}

export default Home