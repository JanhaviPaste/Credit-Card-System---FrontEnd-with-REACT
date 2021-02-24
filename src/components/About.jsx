import React, { Component } from "react";
import profile from './PROFILE_IMAGE.png'
import abt from './abt.jpg'
import HomeHeader from "./HomeHeader";
<HomeHeader />
class About extends Component {
  state = {};
  render() {
    return (

      <div class="bg-light">
        <div class="container">
          <div class="row h-1 align-items-center">
            <div class="row align-items-center mb-5">
              <div class="col-lg-6 order-2 order-lg-1"><i class="fa fa-bar-chart fa-2x mb-3 text-primary"></i>
                <br />
                <h2 class="font-weight-bold mt-5 mb-4"><i>ABOUT US</i></h2>
                <p class="font-italic text-muted mb-4"> Our aim is to offer Indian consumers access to a wide range of world-class, value-added payment products and services. Our endeavor is to simplify the lives of our customers, employees and other important stakeholders.

                Our innovative products and services along with our responsible corporate citizenship practices form the framework of delivering on this promise.

                In a span of few years, we have achieved numerous milestones. We have significantly increased our card base, added new types of cards and received various awards and recognitions for our performance, quality and service.

                We are the second largest credit card provider in the country, with a card base of over 10 million.
                We have offices in over 145 cities in India.
                We have an extensive product portfolio, which includes premium, classic, travel and shopping, exclusive and corporate cards, to cater to both individual and corporate needs.
                Our dedicated and customer oriented approach has won us various industry accolades for customer service, branding, product innovation and marketing</p><a href="#" class="btn btn-light px-5 rounded-pill shadow-sm">Learn More</a>
              </div>
              <div class="col-lg-5 px-5 mx-auto order-1 order-lg-2"><img src={abt} alt="" class="img-fluid mb-4 mb-lg-0" /></div>
            </div>
          </div>
        </div>

        <div class="bg-light py-5">
          <div class="container">
            <div class="row mb-4">
              <div class="col-lg-5">
                <h2 class="display-4 font-weight-italic">Our team:</h2>

              </div>
            </div>

            <div class="row text-center">

              <div class="col-xl-3 col-sm-6 mb-5">
                <div class="bg-white rounded shadow-sm py-5 px-4"><img src={profile} alt="" width="100" class="img-fluid rounded-circle mb-4 img-thumbnail shadow-sm" />
                  <h5 class="mb-0">Janhavi Paste</h5><span class="small text-uppercase text-muted">CEO - Founder</span>


                </div>
              </div>

              <div class="col-xl-3 col-sm-6 mb-5">
                <div class="bg-white rounded shadow-sm py-5 px-4"><img src={profile} alt="" width="100" class="img-fluid rounded-circle mb-4 img-thumbnail shadow-sm" />
                  <h5 class="mb-0">Anushka Kale</h5><span class="small text-uppercase text-muted">CEO - Founder</span>

                </div>
              </div>


              <div class="col-xl-3 col-sm-6 mb-5">
                <div class="bg-white rounded shadow-sm py-5 px-4"><img src={profile} alt="" width="100" class="img-fluid rounded-circle mb-4 img-thumbnail shadow-sm" />
                  <h5 class="mb-0">Samiksha Dandale</h5><span class="small text-uppercase text-muted">CEO - Founder</span>

                </div>
              </div>

              <div class="col-xl-3 col-sm-6 mb-5">
                <div class="bg-white rounded shadow-sm py-5 px-4"><img src={profile} alt="" width="100" class="img-fluid rounded-circle mb-4 img-thumbnail shadow-sm" />
                  <h5 class="mb-0">Deepali Rambhad</h5><span class="small text-uppercase text-muted">CEO - Founder</span>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default About