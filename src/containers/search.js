import { useRef } from "react";
import { getStudents } from "../actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";


const Search = ({ getStudents, history }) => {
  const name = useRef();
//   const stdName = useRef();
//   const stdAge = useRef();
//   const stdPhone = useRef();
  const searchByName = () => {
    console.log(name.current.value);
    getStudents(name.current.value);
  };

//   const addStudent = (addStudent) => {
//       //e.preventDefault();
//     //console.log(stdName.current.value+'  '+stdAge.current.value+'  '+stdPhone.current.value);
//     addStudent({stdName, stdAge, stdPhone})
//     return false;
// }
  return (
    <div className="col text-center">
      {/* Modal */}
      {/* <button
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target="#exampleModal"
        className="btn btn-block btn-primary mb-5"
      >
        Add Student +
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Add new Student
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <input
                  ref={stdName}
                  className="form-control text-center"
                  type="text"
                  placeholder="enter Student name"
                />
              </div>
              <div className="form-group">
                <input
                  ref={stdAge}
                  className="form-control text-center"
                  type="text"
                  placeholder="enter Student age"
                />
              </div>
              <div className="form-group">
                <input
                  ref={stdPhone}
                  className="form-control text-center"
                  type="text"
                  placeholder="enter Student phone"
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn btn-primary"
                onClick={addStudent}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div> */}
      {/* End_Modal */}
      <div className="form-group">
        <input
          ref={name}
          className="form-control rounded-pill text-center"
          type="text"
          placeholder="enter Student name"
          onChange={searchByName}
        />
      </div>
      <div className="form-group">
        <input
          className="btn btn-dark w-25"
          type="button"
          value="search"
          onClick={searchByName}
        />
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getStudents }, dispatch);
};
export default connect(null, mapDispatchToProps)(Search);
