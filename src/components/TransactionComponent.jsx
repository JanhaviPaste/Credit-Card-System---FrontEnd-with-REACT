import React, { Component } from 'react'
import axios from "axios"
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import LogoutHeader from './LogoutHeader';

class TransactionComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            creditCardNumber: " ",
            transId: "",
            transValue: "",
            transDate: " ",
            paymentMethod: " ",
            amount: " "
        }
        this.transactionDone = this.transactionDone.bind(this);
    }

    transactionDone = async (event) => {
        let trans = {
            transValue: this.state.transValue,
            creditCardNumber: this.state.creditCardNumber,
            transDate: this.state.transDate,
            paymentMethod: this.state.paymentMethod
        }
        event.preventDefault();
        axios.post(`http://localhost:9292/ccs/makePayment/${this.state.amount}/${this.state.creditCardNumber}`, trans)
            .then(res => {
                alert(`Transaction Done Sucessfully and you id is = ${res.data.transId}`)
                this.props.history.push(`/listOfTransactions/${res.data.creditCardNumber}`)
            }).catch(err => alert("Please check your balance/Enter a Valid Credit Card Number"));
    }


    handleChange = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({ [nam]: val });

    }

    render() {
        return (
            <div>
                <LogoutHeader/>
            <div class="padding">
                <div class="row justify-content-md-center">
                    <div class="col-sm-4">
                        <br />
                        <div class="card">

                            <div class="card-header">
                                <h4>Debit Details</h4>

                            </div>
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-sm-12">
                                        <div class="form-group">
                                            <label for="ccnumber">Credit Card Number</label>
                                            <div class="input-group">
                                                <input class="form-control" type="text"
                                                    name="creditCardNumber" placeholder="Enter your credit card number"
                                                    value={this.state.creditCardNumber} onChange={this.handleChange} pattern="[0-9]+" required />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-12">
                                        <div class="form-group">
                                            <label for="name">Debit Amount</label>
                                            <input class="form-control" name="amount" id="amount" type="text" onChange={this.handleChange}
                                                value={this.state.amount} placeholder="Enter Amount" pattern="[0-9]+" required />
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="form-group col-sm-4">
                                        <label for="ccmonth">Month</label>
                                        <select class="form-control" id="ccmonth" placeholder="MM">
                                            <option>01</option>
                                            <option>02</option>
                                            <option>03</option>
                                            <option>04</option>
                                            <option>05</option>
                                            <option>06</option>
                                            <option>07</option>
                                            <option>08</option>
                                            <option>09</option>
                                            <option>10</option>
                                            <option>11</option>
                                            <option>12</option>
                                        </select>
                                    </div>
                                    <div class="form-group col-sm-4">
                                        <label for="ccyear">Year</label>
                                        <select class="form-control" id="ccyear" placeholder="YYYY">
                                            <option>2014</option>
                                            <option>2015</option>
                                            <option>2016</option>
                                            <option>2017</option>
                                            <option>2018</option>
                                            <option>2019</option>
                                            <option>2020</option>
                                            <option>2021</option>
                                            <option>2022</option>
                                            <option>2023</option>
                                            <option>2024</option>
                                            <option>2025</option>
                                        </select>
                                    </div>

                                </div>
                            </div>
                            <div class="card-footer">
                                <button onClick={this.transactionDone}
                                    class="subscribe btn btn-primary btn-block" type="button"> Confirm </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            
        );
    }
}

export default TransactionComponent