import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
export default class LogoutHeader extends Component {
  
    
    render() {
        return (
            <div class="">
    <nav class="navbar navbar-expand-lg navbar-inner" >
        
        <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarCollapse">
            
            <div class="navbar-nav ml-auto">
                <Link to="/home"><button class="btn btn-danger">Logout </button></Link>
            </div>
        </div>
    </nav>
</div>
        )
    }
}
