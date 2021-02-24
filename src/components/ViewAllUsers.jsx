import React, { Component } from 'react'
import axios from "axios"
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import AdminService from './services/AdminService.js';
import { Button } from 'bootstrap';
import LogoutHeader from './LogoutHeader.jsx';

export default class ViewAllUsers extends Component {
    constructor(props) {
        super(props);
        this.state = { AllUsersData: [], errMsg: " " }
        this.deleteAdmin = this.deleteAdmin.bind(this);
    }

    deleteAdmin(id) {
        AdminService.deleteAdmin(id).then(res => {
            this.setState({ employees: this.state.AllUsersData.filter(user => user.id !== id) });
        });
    }

    homePage = (event) => {
        alert("Navigating to the Dashboard");
        this.props.history.push("/adminLogin");
    };

    componentDidMount() {
        console.log("In ShowAllAdminComponent componentDidMount executed");
        axios.get("http://localhost:9292/ccs/getAllUsers")
            .then(
                (responseData) => {
                    console.log(" Retrived from json " + responseData.data);
                    this.setState({ AllUsersData: responseData.data });
                }
            )
            .catch(
                (errorResponce) => {
                    console.log(" Error in Fetching the data " +
                        errorResponce);
                }

            );
    }
    render() {
        return (
            <div>
                <LogoutHeader/>
            <div class="container mt-3">
                <h3 className=" text-white">ADMINS</h3><br />

                <table border="2" className="table table-borderless  table-hover shadow table-striped table-secondary">
                    <thead className="thead-dark  text-white bg-dark">
                        <tr>

                            <td><b>User Name</b></td>
                            <td><b>User Role</b></td>
                            <td align="center" colspan="2"><b>Actions</b></td>
                        </tr>
                    </thead>
                    <tbody>{this.state.AllUsersData.map(function (user, key) {

                        return (
                            <tr key={key}>


                                <td>{user.userName}</td>

                                <td>Admin</td>

                                <td><Link className="btn btn-outline-primary mr-2"
                                    to={`/viewAnAdmin/${user.userId}`}>View</Link></td>

                                {<td><Link className="btn btn-outline-danger mr-2"
                                    to={`/deleteAnAdmin/${user.userId}`}>Delete</Link></td>}

                            </tr>
                        )

                    })}</tbody>

                </table>
                <br />
                <div className="form-group">
                    <button className="btn btn-danger mr-3" onClick={this.homePage}>
                        Go Back
          </button>

                    <Link to="/addAdmin"><button className="btn btn-success">Add User</button></Link>
                </div>
            </div>
            </div>
        )
    }
}