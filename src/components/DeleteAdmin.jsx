import React, { Component } from 'react';
import axios from "axios";
import Header from './Header';
<Header />
class DeleteAdmin extends Component {

    state = {};
    componentDidMount() {
        axios
            .delete(
                `http://localhost:9292/ccs/deleteAdmin/${this.props.match.params.id}`
            )
            .then(
                (result) => {
                    alert("Admin is deleted.");
                    this.redirect();
                },
                (error) => {
                    alert("Admin is not deleted.");
                }
            );
    }

    redirect() {
        this.props.history.push("/viewAdmins")
    }

    render() {
        return <p> Processing... </p>;
    }
}

export default DeleteAdmin