import axios from 'axios';
import React from 'react';
import { Link } from "react-router-dom";
import AdminService from './services/AdminService';

import HomeHeader from "./HomeHeader";
<HomeHeader />
class CustomerLogin extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            userName: "",
            userPassword: "",
            error: false,
            errors: {}
        }
        this.loginUser = this.loginUser.bind(this);
    }
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    loginUser = (event) => {
        event.preventDefault();

        axios.get(`http://localhost:9292/ccs/users/customerlogin/${this.state.userName}/${this.state.userPassword}`)
            .then((response) => {
                if (response.data) {
                    console.log(this.state.userName)
                    console.log(this.state.userPassword)
                    alert("LoggedIn successfully");
                    this.props.history.push("/creditCardHomePage");
                    localStorage.setItem("isLoggedIn", true);

                } else {
                    this.setState((this.state.error = "Credentials"));
                    console.log(this.state.userName)
                    console.log(this.state.userPassword)
                }
            })
            .catch((error) => {
                alert("Invalid credentials")
                console.log(this.state.userName)
                console.log(this.state.userPassword)
            });

    }

    validateForm() {
        let user = {
            userName: this.state.userName,
            userPassword: this.state.userPassword
        };
        let errors = {};
        let formIsValid = true;

        if (!user.userName) {
            formIsValid = false;
            errors["userName"] = "*Please enter your userId.";
        }
        if (typeof user.userName !== "undefined") {
            if (!user.userName.match(/^[a-z]*$/)) {
                formIsValid = false;
                errors["userName"] = "*Please enter Invalid userId.";
            }
        }

        if (!user.userPassword) {
            formIsValid = false;
            errors["userPassword"] = "*Please enter your password.";
        }
        if (typeof user.userPassword !== "undefined") {
            if (!user.userPassword.match(/^[a-z]*$/)) {
                formIsValid = false;
                errors["userPassword"] = "Invalid password.";
                alert("Inavlid Password");
            }
        }
        this.setState({
            errors: errors,
        });
        return formIsValid;
    }

    render() {

        return (
            <div class="body">
                <form class="form-signin" onSubmit={this.loginUser} method="get">
                    <h1 class="h3 mb-3 font-weight-normal" class="text-white"><b><i>Please Login!</i></b></h1>

                    <br/>

                    <label class="text-white"><b>User Name</b></label>
                    <input type="text" id="userName" name="userName"
                        value={this.state.userName} class="form-control"
                        onChange={this.handleChange}
                        placeholder="Enter User name" required autofocus />
                    <br />



                    <label class="text-white"><b>User Password</b></label>                    
                    <input type="password" id="userPassword"
                        name="userPassword" class="form-control"
                        value={this.state.userPassword} onChange={this.handleChange}
                        placeholder="Enter Password" required />

                    <div class="checkbox mb-3">
                        <label class="text-white">
                            <input type="checkbox" value="remember-me" /> Remember me
              </label>
                    </div>
                    <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                    <p className="forgot-password ">
                        Forgot <a href="#">password?</a>
                    </p>
                    <Link to="/registerCustomer">
                        <p className="registerCustomer-left">
                          <b>  New Customer?</b></p>
                    </Link>

                </form>
            </div>
        );
    }
}
export default CustomerLogin;