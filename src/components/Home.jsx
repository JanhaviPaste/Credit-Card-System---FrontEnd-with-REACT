import React, { Component } from 'react'
import { Link } from "react-router-dom";
import admin from './admin.jpg'
import customer from './customer.jpg'
import HomeHeader from "./HomeHeader";

export default class Home extends Component {

    constructor(props) {
        super(props)

        this.state = {

        }
    }

    handleCustomerLogin() {
        <Link to="/customerLogin"></Link>
    }
    render() {
        return (

            <div>
                <div class="center">
                    <div class="text-center">
                        <Link to="/adminLogin">
                            <button type="button"
                                onClick={this.handleAdminLogin}
                                class="btn btn-secondary rounded-circle btn-lg mr-5">
                                <img src={admin}
                                    class="rounded-circle z-depth-2"
                                    width="304" height="236" />
                            </button>
                        </Link>
                    </div>

                    <br></br>

                    <div class="text-center">
                    </div>
                    <Link to="/customerLogin">
                        <button type="button"
                            onClick={this.handleCustomerLogin}
                            class="btn btn-secondary rounded-circle btn-lg">
                            <img src={customer}
                                class="rounded-circle z-depth-2"
                                width="304" height="240" />
                        </button>
                    </Link>
                </div>
            </div>
        )
    }
}
