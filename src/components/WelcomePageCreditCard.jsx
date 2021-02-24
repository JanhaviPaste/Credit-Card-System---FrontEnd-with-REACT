import React, { Component } from 'react'
import silver from "./SILVER.png"
import gold from "./GOLD.jpg"
import platinum from "./PLATINUM.png"
import black from "./BLACK.jpg"

import Header from './Header';
import LogoutHeader from './LogoutHeader'
<Header />
export default class WelcomePageCreditCard extends Component {
    redirect() {
        this.props.history.push("/applyCreditCard")
    }
    render() {
        return (
            <div>
                <LogoutHeader />
                <section class="container">
                    <div class="container-md">
                        <h1 class="text-white"><i>CARDS FOR YOU</i></h1>
                        <p class="section-description " class="text-white badge-pill badge-dark">
                            <i>We have different cards for different needs, go for the Card best suited for you</i>
                        </p>
                    </div>

                    <ul class="nav nav-pills mb-3 justify-content-center nav-tabs" id="myTab" role="tablist">

                        <li class="nav-item waves-effect waves-light ">
                            <a class="nav-link active" id="silver-tab"
                                data-toggle="tab" href="#silver" aria-selected="false" >
                                <b>Silver Card</b>
                            </a>
                        </li>

                        <li class="nav-item waves-effect waves-light">
                            <a class="nav-link" id="gold-tab"
                                data-toggle="tab" href="#gold" aria-selected="false" >
                                <b>Gold Card</b>
                            </a>
                        </li>

                        <li class="nav-item waves-effect waves-light">
                            <a class="nav-link" id="platinum-tab"
                                data-toggle="tab" href="#platinum" aria-selected="false" >
                                <b>Platinum Card</b>
                            </a>
                        </li>

                        <li class="nav-item waves-effect waves-light">
                            <a class="nav-link " id="black-tab"
                                data-toggle="tab" href="#black" aria-selected="true" >
                                <b>Black Card</b>
                            </a>
                        </li>

                    </ul>
                    <div class="tab-content container" id="myTabContent">

                        {/* ****************************** SILVER CARD************************* */}
                        <div class="tab-pane fade active show" id="silver" role="tabpanel" aria-labelledby="silver-tab">
                            <figure class="front">
                                <img title="STAR SILVER Card" alt="STAR SILVER Card"
                                    src={silver} class="lazy"
                                    data-original="#" /></figure>
                            <div class="card-features back">
                                <div>
                                </div>
                                <h3 class="p-3 mb-2 bg-light text-dark badge-pill">STAR SILVER CARD</h3>
                                <h5 class="text-white container text-primary"><u>One Card, Many Privileges</u></h5><br />
                                <p class="text-white container"><i>3.5% value back on spends at TATA Outlets & Upto 5% value back on spends on selected Outlets</i></p>

                                <h6 class="text-white container">Welcome e-Gift Voucher worth Rs. 5,000 on joining</h6>
                                <h6 class="text-white container">Get free movie tickets worth Rs. 6,000 every year</h6>
                                <h6 class="text-white container">Earn upto 50,000 Bonus Reward Points worth Rs. 12,500/year</h6>
                                <h6 class="text-white container">Complimentary membership to Club Vistara and Trident Privilege program</h6>

                                <a href="#" class="learn-more-link">
                                    <b>Learn more</b></a>
                                <br /><br />
                                <div class="item-footer">
                                    <a onclick={this.redirect} href="/applyCreditCard" class="btn btn-success"><h5>Apply Now</h5></a>
                                </div>

                            </div></div>

                        {/* ****************************** GOLD CARD************************* */}
                        <div class="tab-pane fade" id="gold" role="tabpanel" aria-labelledby="gold-tab">
                            <figure class="front">
                                <img title="STAR GOLD Card" alt="STAR GOLD Card"
                                    src={gold} class="lazy"
                                    data-original="#" /></figure>
                            <div class="card-features back">
                                <div>
                                </div>
                                <h3 class="p-3 mb-2 bg-light text-dark badge-pill">STAR GOLD Card</h3>
                                <h5 class="text-white container text-primary"><u>One Card, Many Privileges</u></h5><br />
                                <p class="text-white container"><i>2% valueback on spends at TATA & 3X points on Departmental Stores & Grocery</i></p>

                                <h6 class="text-white container">Get 500 Empower Points worth Rs. 500 on total spends of Rs. 2,000 or more</h6>
                                <h6 class="text-white container">Get your annual fee waived off, on spending Rs. 1,00,000 or more in a year</h6>
                                <h6 class="text-white container">Get 3X Points for spends on Departmental and Grocery stores</h6>
                                <h6 class="text-white container">Complimentary International and Domestic Airport Lounge access</h6>
                                <h6 class="text-white container">Get up to 5% value back on spends on our outlets</h6>

                                <a href="#" class="learn-more-link">
                                    <b>Learn more</b></a>
                                <br /><br />
                                <div class="item-footer">
                                    <a onclick={this.redirect} href="/applyCreditCard" class="btn btn-success"><h5>Apply Now</h5></a>
                                </div>

                            </div>

                        </div>

                        {/* ****************************** PLATINUM CARD************************* */}
                        <div class="tab-pane fade " id="platinum" role="tabpanel" aria-labelledby="platinum-tab">
                            <figure class="front">
                                <img title="STAR PLATINUM Card" alt="STAR PLATINUM Card"
                                    src={platinum} class="lazy"
                                    data-original="#" /></figure>
                            <div class="card-features back">
                                <div>
                                </div>
                                <h3 class="p-3 mb-2 bg-light text-dark badge-pill">STAR PLATINUM Card</h3>
                                <h5 class="text-white container text-primary"><u>One Card, Many Privileges</u></h5><br />
                                <p class="text-white container"><i>2% valueback on spends at TATA & 3X points on Departmental Stores & Grocery</i></p>

                                <h6 class="text-white container">Welcome e-Gift Voucher worth Rs. 8,000 on joining</h6>
                                <h6 class="text-white container">Spend linked Gift Vouchers worth Rs. 11,000</h6>
                                <h6 class="text-white container">10 Reward Points per Rs. 100 spent on Dining, Groceries, Departmental stores and Movies</h6>
                                <h6 class="text-white container">Complimentary International and Domestic Airport Lounge access</h6>

                                <a href="#" class="learn-more-link">
                                    <b>Learn more</b></a>
                                <br /><br />
                                <div class="item-footer">
                                    <a onclick={this.redirect} href="/applyCreditCard" class="btn btn-success"><h5>Apply Now</h5></a>
                                </div>

                            </div>

                        </div>

                        {/* ****************************** BLACK CARD************************* */}
                        <div class="tab-pane fade " id="black" role="tabpanel" aria-labelledby="black-tab">

                            <img src={black} alt="STAR BLACK CARD" />
                            <div class="card-features back">
                                <div>
                                </div>
                                <br />
                                <h3 class="p-3 mb-2 bg-light text-dark badge-pill">STAR BLACK CARD</h3>
                                <h5 class="text-white container text-primary"><u>One Card, Many Privileges</u></h5><br />
                                <p class="text-white container"><i>10% valueback on spends at TATA & 5X points on Departmental Stores & Grocery</i></p>

                                <h6 class="text-white container">Complimentary annual memberships upon spending Rs. 1.5 lakhs. </h6>
                                <h6 class="text-white container">Spend linked Gift Vouchers worth Rs. 15,000</h6>
                                <h6 class="text-white container">20 Reward Points per Rs. 100 spent on Dining, Groceries, Departmental stores and Movies</h6>
                                <h6 class="text-white container">BookMyShow or TataCLiQ vouchers worth Rs. 500 every month on spends of Rs. 80,000.</h6>

                                <a href="#" class="learn-more-link">
                                    <b>Learn more</b></a>
                                <br /><br />
                                <div class="item-footer">
                                    <a onclick={this.redirect} href="/applyCreditCard" class="btn btn-success"><h5>Apply Now</h5></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
