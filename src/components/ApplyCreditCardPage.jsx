import axios from 'axios';
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Header from './Header';
import LogoutHeader from './LogoutHeader';

<Header />
export default class ApplyCreditCardPage extends Component {
    constructor(props) {
        super(props)

        this.state = {

            salary: "",
            customerId: "",
            creditcardLimit: "",
            cardType: "",
            validFrom: "",
            validTo: "",
            availableBalance: "",
            creditcardNo: "",
            credNumber: " "


        }
        this.assignCard = this.assignCard.bind(this);
    }



    // {***************************ASSIGN CREDIT CARD*******************************}
    assignCard = async (event) => {
        event.preventDefault();
        let card = {
            creditcardLimit: this.state.creditcardLimit,
            cardType: this.state.cardType,
            validFrom: this.state.validFrom,
            validTo: this.state.validTo,
            availableBalance: this.state.availableBalance,
            customerId: this.state.customerId

        }

        //{*********************************Silver Card***************************}
        if (parseInt(this.state.salary) >= 25000 && parseInt(this.state.salary) < 40000) {

            axios.post(`http://localhost:9292/ccs/buyCreditCard/${this.state.salary}/${this.state.customerId}`, card)
                .then(res => {
                    alert(`Silver Card Assigned Sucessfully with credit card number as =${res.data.creditcardNo} and a credit card limit of Rs.${res.data.creditcardLimit}`)
                    this.setState({ credNumber: res.data.creditcardNo });
                    this.props.history.push(`/goldcard/${res.data.creditcardNo}`)
                }).catch(err => alert("Invalid Customer Id Provided"));
        }

        //{*********************************Gold Card***************************}
        if (parseInt(this.state.salary) >= 40000 && parseInt(this.state.salary) < 60000) {

            axios.post(`http://localhost:9292/ccs/buyCreditCard/${this.state.salary}/${this.state.customerId}`, card)
                .then(res => {
                    alert(`Gold Card Assigned Sucessfully with credit card number as =${res.data.creditcardNo} and a credit card limit of Rs.${res.data.creditcardLimit}`)
                    this.setState({ credNumber: res.data.creditcardNo });
                    this.props.history.push(`/goldcard/${res.data.creditcardNo}`)
                }).catch(err => alert("Invalid Customer Id Provided"));
        }

        //{*********************************Platinum Card***************************}
        if (parseInt(this.state.salary) >= 60000 && parseInt(this.state.salary) < 80000) {

            axios.post(`http://localhost:9292/ccs/buyCreditCard/${this.state.salary}/${this.state.customerId}`, card)
                .then(res => {
                    alert(`Platinum Card Assigned Sucessfully with credit card number as =${res.data.creditcardNo} and a credit card limit of Rs.${res.data.creditcardLimit}`)
                    this.setState({ credNumber: res.data.creditcardNo });
                    this.props.history.push(`/goldcard/${res.data.creditcardNo}`)
                }).catch(err => alert("Invalid Customer Id Provided"));
        }

        //{*********************************Black Card***************************}
        if (parseInt(this.state.salary) > 80000) {

            axios.post(`http://localhost:9292/ccs/buyCreditCard/${this.state.salary}/${this.state.customerId}`, card)
                .then(res => {
                    alert(`Black Card Assigned Sucessfully with credit card number as =${res.data.creditcardNo} and a credit card limit of Rs.${res.data.creditcardLimit}`)
                    this.setState({ creditcardNo: res.data.creditcardNo });
                    this.props.history.push(`/goldcard/${res.data.creditcardNo}`)
                }).catch(err => alert("Invalid Customer Id Provided"));
        }

        else {
            this.props.history.push("/creditCardHomePage")
            alert("Sorry no cards available")
        }
    }

    handleChange = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({ [nam]: val });

    }

    // {***************************RENDERING*******************************}
    render() {
        return (
            <div>
                <LogoutHeader/>
            <div class="container">
                
                <div class="text-center">
                    <br />
                    <h2 class="section-heading text-white badge-pill badge-dark">Become a proud owner of an STAR Card....</h2>
                    <p class="section-description text-white"><i>A few details to start with....</i></p>

                    <form onSubmit={this.assignCard}>


                        <br />
                        <div class="field-wrap">
                            <label class="text-white"><b>Enter Your Customer ID</b></label><br />
                            <input type="text" name="customerId" value={this.state.customerId}
                                className="form-control col-md-6 offset-md-3 offset-md-3"
                                onChange={this.handleChange} placeholder="Customer ID" />
                        </div>
                        <br />

                        <div class="field-wrap">
                            <label class="text-white"><b>Enter Your Monthly Salary</b></label><br />
                            <input type="text" value={this.state.salary}
                                className="form-control col-md-6 offset-md-3 offset-md-3" name="salary"
                                onChange={this.handleChange} placeholder="Monthly Salary" />
                        </div>

                        <br />

                        <div class="row">
                            <div class="checkbox-wrap">
                                <label class="inline-label text-white fancy-checkbox" >
                                    <input type="checkbox" name="existingCard" email="existingCard-yes" value="yes" />
                                    <small><b> I authorize &amp; its representatives to call me or SMS me with reference to my
                                    Credit Card application. I have read, understood and consented to the declaration
                                    as provided.
                     <a href="#" class="apply-read">Read More</a></b>   </small></label></div>
                            
                            <div className="text-center col-md-12">
                            <br/>
                                <button type="submit" class="btn btn-success" value="Apply Now">Apply Now</button>
                            </div>
                        </div>
                    </form>
                </div></div></div>
        )
    }
}
