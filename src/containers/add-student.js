import React, {Component } from "react";
import axios  from 'axios'

class AddStudent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '', 
            age: '', 
            phone:''
        }
    }
      changeHandler = (e) => {
          this.setState({
              [e.target.name]: e.target.value
          })
      }
      submitHandler = (e) => {
          e.preventDefault();
        console.log(this.state);  
        axios.post('http://localhost:3001/students',this.state)
        .then(response => {
            console.log(response);
            console.log('Student Added Successfully!');
            this.props.history.push('/');
        })
        .catch(err => {
            console.log(err);
        })
       }
    render() {
        const {name, age, phone} = this.state
        return (
            <div className="col mt-5">
                <div className="text-center bg-dark">
                    <h3 className="text-white p-3">Add New studeunt</h3>
                </div>
                <form onSubmit={this.submitHandler}>
                    <div className="form-group">
                    <input type="text" className="form-control"
                    name="name" value={name} onChange={this.changeHandler}
                    placeholder="Student name"/>
                    </div>
                    <div className="form-group">
                    <input type="text" className="form-control"
                    name="age" value={age} onChange={this.changeHandler}
                    placeholder="student Age"/>
                    </div>
                    <div className="form-group">
                    <input type="text" className="form-control"
                    name="phone" value={phone} onChange={this.changeHandler}
                    placeholder="Student Phone"/>
                    </div>
                    <button type="submit" className="btn btn-block btn-success">Add</button>
                </form>
            </div>
        )
    }
}

export default AddStudent