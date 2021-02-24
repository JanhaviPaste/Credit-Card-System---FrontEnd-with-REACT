import React, { Component } from 'react'
import { Link } from "react-router-dom";
import LogoutHeader from './LogoutHeader';
import profile from './makePayment.png'
import optcreditcard from './optcreditcard.jpg'

class CreditCardHomePage extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <LogoutHeader/>
                <div class="creditcardcss"></div>

                <div class="center">
                    <div class="text-center">
                        <Link to="/transactionPage"><button type="button" class="btn btn-secondary rounded-circle btn-lg mr-5">
                            <img src={profile} class="rounded-circle z-depth-2" width="304" height="236" />
                        </button></Link><br />
                    </div>

                    <br></br>
                    <div class="center">
                    </div>
                    <Link to="/welcomePage"><button type="button" class="btn btn-secondary rounded-circle btn-lg">
                        <img src={optcreditcard} class="rounded-circle z-depth-2" width="304" height="236" />
                    </button></Link>
                </div>
            </div>
        )
    }
}

export default CreditCardHomePage
