import axios from 'axios';
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Header from './Header';
import LogoutHeader from './LogoutHeader';
<Header />
export default class ListOfTransactions extends Component {
    constructor(props) {
        super(props)

        this.state = {

            list: []
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:9292/ccs/TransactionDetails/${this.props.match.params.ccid}`)
            .then(
                (responseData) => {
                    console.log(" Retrived from json " + responseData.data);
                    this.setState({ list: responseData.data });
                }
            )
            .catch(
                (errorResponce) => {
                    console.log(" Error in Fetching the data " +
                        errorResponce);
                }

            );
    }

    render() {
        return (
            <div>
                <LogoutHeader/>
            <div class="container">
                <br /><br/>
                <table className="table table-hover shadow table-striped table-secondary ">
                    <thead className="bg-dark text-white">
                        <tr>
                            <td>Transaction ID</td>
                            <td>Payment Method</td>
                            <td>Transaction Value</td>
                            <td>Transaction Date</td>
                            
                        </tr>
                    </thead>
                    <tbody>{this.state.list.map(function (trans, key) {

                        return (
                            <tr key={key}>
                                <td>{trans.transId}</td>

                                <td>{trans.paymentMethod}</td>

                                <td>{trans.transValue}</td>

                                <td>{trans.transDate}</td>

                            </tr>
                        )

                    })}</tbody>

                </table>

                <div className="form-group">
                    <Link to="/creditCardHomePage"><button className="btn btn-primary mr-3">
                        Go Back
          </button></Link>

                    <Link to="/home"><button className="btn btn-danger">
                        Logout
          </button></Link>
                </div>
            </div></div>
        )
    }
}
