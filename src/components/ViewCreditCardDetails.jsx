import React, { Component } from 'react'
import axios from "axios";

import Header from './Header';
import LogoutHeader from './LogoutHeader';
<Header />
 class ViewCreditCardDetails extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
            creditcard:{
              creditCardNumber:"",
              customerId:"",
              creditcardLimit:"",
              cardType:"",
              validFrom:"",
              validTo:"",
              availableBalance:"",
            }
        }
    }
    

    componentDidMount() {
        axios
          .get(
            `http://localhost:9292/ccs/getCreditCardDetails/${this.props.match.params.creditCard}`
          )
          .then((result) => {
            this.setState({
                creditcard: result.data,
            });
          });
      }

      navigationPage = (event) => {
        this.props.history.push("/creditCardHomePage");
      };
    
    render() {
        return (
            <div>
              <LogoutHeader/>
                <h1>
          <span className="badge">Your Details</span>
        </h1>
        <table className="table table-bordered">
        <tr>
            <td>Your Customer Id</td>
            <th>{this.state.creditcard.customerId}</th>
          </tr>

          <tr>
            <td>Credit Card Number</td>
            <th>{this.state.creditcard.creditcardNo}</th>
          </tr>
          <tr>
            <td>Credit Card Limit</td>
            <th>{this.state.creditcard.creditcardLimit}</th>
          </tr>
          <tr>
            <td>Card Type</td>
            <th>{this.state.creditcard.cardType}</th>
          </tr>

          <tr>
            <td>Valid From</td>
            <th>{this.state.creditcard.validFrom}</th>
          </tr>

          <tr>
            <td>Valid To</td>
            <th>{this.state.creditcard.validTo}</th>
          </tr>

          <tr>
            <td>Available Balance</td>
            <th>{this.state.creditcard.availableBalance}</th>
          </tr> 

        </table>

        <div className="form-group">
          <button className="btn btn-primary" onClick={this.navigationPage}>
            Go Back
          </button>
        </div>

            </div>
        )
    }
}
export default ViewCreditCardDetails
