import React, { Component } from 'react'
import axios from "axios"
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import Header from './Header';
import LogoutHeader from './LogoutHeader';
<Header />
export default class CardDetails extends Component {
    constructor(props) {
        super(props)

        this.state = {
            card: {
                creditcardNumber: "",
                customerId: "",
                creditcardLimit: "",
                cardType: "",
                validFrom: "",
                validTo: "",
                availableBalance: "",
                creditCardNo: ""
            }
        }
    }

    componentDidMount() {
        axios
            .get(
                `http://localhost:9292/ccs/getCreditCardDetails/${this.props.match.params.creditcardNumber}`
            )
            .then((result) => {
                console.log(result.data.creditcardNo)
                this.setState({
                    card: result.data,
                });
            });
    }

    render() {
        return (
            <div>
                <LogoutHeader/>
            <div class="container mt-5">
                
                <h5 class="text-white"><i>Congratulations, You have been assigned a Star Credit Card...</i></h5>
                <br />
                <table className="table table-hover table-secondary table-bordered table-striped mt-9">
                    <tr>
                        <td>Card Type Assigned</td>
                        <th>{this.state.card.cardType}</th>
                    </tr>
                    <tr>
                        <td>Credit Card Number</td>
                        <th>{this.state.card.creditcardNo}</th>
                    </tr>

                    <tr>
                        <td>Credit Card Limit</td>
                        <th>{this.state.card.creditcardLimit}</th>
                    </tr>
                    <tr>
                        <td>Valid From</td>
                        <th>{this.state.card.validFrom}</th>
                    </tr>

                    <tr>
                        <td>Valid Upto</td>
                        <th>{this.state.card.validTo}</th>
                    </tr>

                    <tr>
                        <td>Available Balance</td>
                        <th>{this.state.card.availableBalance}</th>
                    </tr>
                </table>

                <div className="form-group">
                    <Link to="/transactionPage"><button className="btn btn-primary mr-2">
                        Proceed
          </button></Link>

                    <Link to="/home"><button className="btn btn-danger">
                        Go Back
          </button></Link>
                </div>
            </div></div>
        )
    }
}
