import React, { Component } from 'react'
import axios from "axios";
import { Link } from "react-router-dom";
import Header from './Header';
import LogoutHeader from './LogoutHeader';
<Header />
export default class ViewAdmin extends Component {
    constructor(props) {
        super(props)

        this.state = {
            admin: {

            }
        }
    }

    componentDidMount() {
        axios
            .get(
                `http://localhost:9292/ccs/getAdmin/${this.props.match.params.id}`
            )
            .then((result) => {
                this.setState({
                    admin: result.data,
                });
            });
    }
    render() {
        return (
            <div>
                <LogoutHeader/>
            <div class= "container mt-5">
                <h1>
                    <span className="text-white ">View An Admin</span>
                </h1>
                <br/><br/>
                <table className="table table-bordered table-secondary ">
                    
                    <tr>
                        <td>Admin Username</td>
                        <th>{this.state.admin.userName}</th>
                    </tr>
                    <tr>
                        <td>Role</td>
                        <th>Admin</th>
                    </tr>
                </table>
                <br/><br/>
                <div className="form-group">
                    <Link to="/viewAdmins"><button className="btn btn-primary">
                        Go Back
          </button></Link>
                </div>
            </div>
            </div>
        )
    }
}
