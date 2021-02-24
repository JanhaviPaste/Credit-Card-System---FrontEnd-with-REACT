import axios from 'axios';
import React from 'react';
import { Link } from "react-router-dom";
import AdminService from './services/AdminService';
import HomeHeader from "./HomeHeader";
<HomeHeader />
class AdminLogin extends React.Component {
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

        axios.get(`http://localhost:9292/ccs/users/adminlogin/${this.state.userName}/${this.state.userPassword}`)
            .then((response) => {
                if (response.data) {
                    console.log(this.state.userName)
                    console.log(this.state.userPassword)
                    alert("LoggedIn successfully");
                    this.props.history.push("/viewAdmins");
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
                <form class="form-signin" method="get">
                    <h1 class="h3 mb-3 font-weight-normal" class="text-white"><i>Please Login!</i></h1>

                    <label class="text-white"> Admin User Name</label>
                    <input type="text"
                        placeholder="Enter User name"
                        name="userName"
                        value={this.state.userName}
                        class="form-control"
                        onChange={this.handleChange} />

                    <br />

                    <label class="text-white">Admin Password</label>
                    <input type="password"
                        name="userPassword"
                        placeholder="Enter Password"
                        value={this.state.userPassword}
                        class="form-control"
                        onChange={this.handleChange}
                        placeholder="Enter Password" />

                    <div class="checkbox mb-3">
                        <label class="text-white">
                            <input type="checkbox" value="remember-me" /> Remember me
              </label>
                    </div>

                    <button type="submit" onClick={this.loginUser}
                        className="btn btn-lg btn-primary btn-block" >Sign in</button>

                    <p className="forgot-password " class="text-white">
                        Forgot <a href="#">password?</a>
                    </p>


                </form>
            </div>
        );
    }
}
export default AdminLogin;