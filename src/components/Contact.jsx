import React, { Component } from "react";
import HomeHeader from "./HomeHeader";
<HomeHeader />
class Contact extends Component {
  state = {};

  handle() {
    alert("Thank you, for your valueable feedback!");
    this.props.history.push("/")

  }

  render() {
    return (

      <div class="container">
        <br />
        <div class="row">
          <div class="col">
            <div class="card">

              <div class="card-header bg-dark text-white"><i class="fa fa-envelope"></i> CONTACT US
                  </div>
              <div class="card-body">
                <form>
                  <div class="form-group" >
                    <label for="name">Name</label>
                    <input type="text" class="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter name" />
                  </div>
                  <div class="form-group">
                    <label for="email">Email address</label>
                    <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                  </div>
                  <div class="form-group">
                    <label for="message">Message/Comments/Reviews</label>
                    <textarea class="form-control" id="message" rows="6"></textarea>
                  </div>
                  <div class="mx-auto">
                    <button type="submit" onClick={this.handle} class="btn btn-dark text-right">Submit</button></div>
                </form>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-4">
            <div class="card bg-light mb-3">

              <div class="card-header bg-dark text-white text-uppercase"><i class="fa fa-home"></i> Address</div>
              <div class="card-body">
                <p>STAR BANK</p>
                <p>Ahmednagar,Maharashtra-45</p>
                <p>India</p>
                <p>Email : email@star.com</p>
                <p>Tel. +022  22 45 87 84</p>

              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
