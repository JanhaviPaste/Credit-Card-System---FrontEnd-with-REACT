import React from 'react';
import { NavLink, Link } from "react-router-dom";
import axios from 'axios';

class Register extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            customerEmail: '',
            customerName: '',
            customerNumber: '',
            userName: '',
            userPassword: '',
            userRoleId: 2
        }
        this.handleChange = this.handleChange.bind(this);


    }
    handleChange = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({ [nam]: val });

    }

    register = async (event) => {
        event.preventDefault();
        let customerDetails = {
            customerEmail: this.state.customerEmail,
            customerName: this.state.customerName,
            customerNumber: this.state.customerNumber,
            user: {
                userName: this.state.userName,
                userPassword: this.state.userPassword,
                userRoleId: 2
            }
        }

        axios.post("http://localhost:9292/ccs/registerCustomer", customerDetails).then(res => {
            alert("Successfully Registered")
            this.redirect();
        }).catch((error) => {
            alert(error.response.data.message);
        });

    }

    redirect() {
        this.props.history.push("/customerLogin")
    }


    render() {
        const { data } = this.state;
        return (
            <div class="container col-5">
                <br />
                <form>
                    <div className="form-group">
                        <label class="text-white"><h4>Customer Email</h4></label><br />
                        <input type="email"
                            class="form-input border-dashed round bg-white dashed:focus"
                            placeholder="Enter your Email-id" id="customerEmail"
                            name="customerEmail" value={this.state.customerEmail}
                            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                            title="Enter valid emial id"
                            onChange={this.handleChange} required />
                    </div>

                    <div className="form-group">
                        <label class="text-white"><h4>Customer Name</h4></label><br />
                        <input type="text" class="form-input border-dashed bg-white round dashed:focus"
                            placeholder="Enter your Full Name"
                            name="customerName" pattern="[A-Za-z]{3,15}"
                            title="Enter valid name" value={this.state.customerName}
                            onChange={this.handleChange} required />
                    </div>

                    <div className="form-group">
                        <label class="text-white"><h4>Customer Number</h4></label><br />
                        <input type="text" class="form-input border-dashed bg-white round dashed:focus"
                            placeholder="Enter your mobile number"
                            id="customerNumber" name="customerNumber" pattern="[0-9]{10}"
                            title="Enter valid number" value={this.state.customerNumber}
                            pattern="[A-Za-z]{3,15}" onChange={this.handleChange} required />
                    </div>

                    <div className="form-group">
                        <label class="text-white"><h4>User Name</h4></label><br />
                        <input type="text" class="form-input border-dashed bg-white round dashed:focus"
                            placeholder="Enter User Name" id="userName" name="userName"
                            pattern="[A-Za-z]{3,15}" value={this.state.userName}
                            title="Username not valid"
                            onChange={this.handleChange} required />
                    </div>

                    <div className="form-group">
                        <label class="text-white"><h4>User Password</h4></label><br />
                        <input type="password" class="form-input border-dashed bg-white round dashed:focus"
                            placeholder="Enter Password" id="userPassword" name="userPassword"
                            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" value={this.state.userPassword}
                            title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                            onChange={this.handleChange} required />
                    </div>

                    <Link to="/register"><button type="submit" onClick={this.register} className="btn btn-success btn-lg">Register</button></Link>
                </form>
            </div>
        );
    }
}

export default Register;