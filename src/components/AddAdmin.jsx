import axios from 'axios';
import React, { Component } from 'react'
import { Link } from "react-router-dom";
import Header from './Header';
import LogoutHeader from './LogoutHeader';
import AdminService from './services/AdminService';

export default class AddAdmin extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userId: 0,
            userName: '',
            userPassword: '',
            userRoleId: "1",
            errors: {}
        }
        this.changeHandler = this.changeHandler.bind(this);
        this.saveAdmin = this.saveAdmin.bind(this);
    }

    changeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({ [nam]: val });

    }

    validate() {
        let errors = {};
        let isValid = true;

        const { userName, userPassword } = this.state;
        if (!userName) {
            isValid = false;
            errors["userName"] = "Please enter admin user name";

        }
        if (typeof userName !== "undefined") {

            var pattern = new RegExp("^[A-Za-z]+");
            if (!pattern.test(userName)) {
                isValid = false;
                errors["userName"] = "Please enter valid user name.";
            }
        }
        if (!userPassword) {
            isValid = false;
            errors["userPassword"] = "Please enter your Password.";

        }
        this.setState({
            errors: errors
        });

        return isValid;
    }

    saveAdmin = async (event) => {
        event.preventDefault();
        let adminDetails = {
            userId: this.state.userId,
            userName: this.state.userName,
            userPassword: this.state.userPassword,
            userRole: "1"
        }
        if (this.validate()) {
            axios.post("http://localhost:9292/ccs/addAdmin", adminDetails).then(res => {
                alert("Successfully Added an Admin")
                this.redirect();
            });
        }
    }

    redirect() {
        this.props.history.push("/viewAdmins")
    }

    cancel() {
        this.props.history.push('/adminHomePage')
    }

    render() {
        return (
            <div>
                <LogoutHeader/>
                <br /><br />
                <div>
                    <div className="container">
                        <div className="row">
                            <div className="card col-md-6 offset-md-3 offset-md-3">
                                <h1 className="text-center">Add Admin Form</h1>
                                <div className="card-body">
                                    <form>
                                        <div className="form-group">
                                            <label>Admin User Name </label>
                                            <input type="text" placeholder="Enter User Name" name="userName"
                                                className="form-control" value={this.state.userName}
                                                onChange={this.changeHandler} />
                                        </div>

                                        <div className="form-group">
                                            <label>Admin Password </label>
                                            <input placeholder="Enter Password" name="userPassword"
                                                className="form-control" value={this.state.userPassword}
                                                onChange={this.changeHandler} />
                                        </div>

                                        <br />

                                        <button className="btn btn-success" onClick={this.saveAdmin} type="submit">Save</button>
                                        <Link to="/viewAdmins"><button className="btn btn-danger" style={{ marginLeft: "10px" }}>Cancel</button></Link>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
