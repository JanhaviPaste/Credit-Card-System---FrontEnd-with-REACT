import React, { Component } from 'react'
import { NavLink, Link } from "react-router-dom";
import axios from 'axios';

import Header from './Header';
import LogoutHeader from './LogoutHeader';
<Header />
export default class ViewCardDetails extends Component {
    constructor(props) {
        super(props)

        this.state = {
            creditCardNo: '',
            AllCardsData:[]
        }
        this.handleChange = this.handleChange.bind(this);

    }

    

    handleChange = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({ [nam]: val });

    }

    view() {
        var creditCardNo = this.state.creditCardNo;
        this.props.history.push(`/viewCustomer/${this.state.creditCardNo}`)
    }

    render() {
        return (
            <div>
                <LogoutHeader/>
                <form>
                    <div className="form-group" onSubmit={this.view}>
                        <br /> <br /> <br />
                        <label><h4>Enter Your Credit Card Number</h4></label><br />
                        <input type="text"
                            class="form-input border-dashed col-md-6 round dashed:focus"
                            placeholder="Credit card number" id="customerEmail"
                            name="creditCardNo" value={this.state.creditCardNo}
                            onChange={this.handleChange} required />
                    </div>

                    <Link to={`/viewCustomer`}><button type="submit"
                        className="btn btn-primary btn-lg">Proceed</button></Link>
                </form>


            </div>
        )
    }
}
