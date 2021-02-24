import React, { Component } from 'react'
import {Link } from "react-router-dom";
import home1 from "./home1.jpg"
import home2 from "./home2.jpg"
import home3 from "./home3.jpg"
export default class Dashboard extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }

    render() {
        return (

          <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={home1} class="d-block w-100" alt="" width="900" height="600"/>
              <div class="carousel-caption d-none d-md-block">
              <h1 class="font-italic">WELCOME TO STAR CREDIT CARDS</h1>
    <p class="lead">One for all financial solutions. <a href="http://localhost:3000/home"> <b>PROCEED..</b> </a></p>
              </div>
            </div>

            <div class="carousel-item">
              <img src={home2} class="d-block w-100" alt="" width="900" height="600"/>
              <div class="carousel-caption d-none d-md-block">
              <h1 class="font-italic">WELCOME TO STAR CREDIT CARDS</h1>
    <p class="lead">One for all financial solutions. <a href="http://localhost:3000/home"><b> PROCEED.. </b></a></p>
              </div>
            </div>

           <div class="carousel-item">
              <img src={home3} class="d-block w-100" alt="" width="900" height="600"/>
              <div class="carousel-caption d-none d-md-block">
              <h1 class="font-italic">WELCOME TO STAR CREDIT CARDS</h1>
    <p class="lead">One for all financial solutions. <a href="http://localhost:3000/home"><b>PROCEED..</b>  </a></p>
              </div>
            </div>
         
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"  data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"  data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
         
          </div>
  
</div>
 
   
        )
    }
}