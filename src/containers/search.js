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


  return (
    <div className="col text-center">
      
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
