import React from 'react';
import { Link, Redirect } from "react-router-dom";
import { Container } from "@material-ui/core";

import HotelList from '../utils/RestaurantList'

const HotelDetails = (props) => {
  let id = props.match.params.id;
  console.log("ID : ", id);

  if (isNaN(id)) {
    return(
      <Redirect to="/"></Redirect>
    ) 
  }

  const item = HotelList.find(p => p.id === parseInt(id));

  return (
    <main id="hotel-info-page">
      <section class="page-header">
          <Container maxWidth="lg" >
              <div class="row">
                  <div class="col">
                      <p>Hotel</p>
                      <h2>{item.name}</h2>
                  </div>
                  <div class="col reviews">
                      <div class="ratings">
                          <i class="fas fa-star active"></i>
                          <i class="fas fa-star active"></i>
                          <i class="fas fa-star active"></i>
                          <i class="fas fa-star active"></i>
                          <i class="fas fa-star"></i>
                      </div>
                      <p>2 Reviews</p>
                  </div>
              </div>
          </Container>
      </section>
      <section>
          <Container maxWidth="lg" >
              <div class="service-detail">
                  <div class="content">
                      <h2>DESCRIPTION</h2>
                      <hr/>
                      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore assumenda voluptatum cupiditate doloremque. Sint velit, harum ad libero magni facere excepturi recusandae, eos perspiciatis vel, voluptas illo consequuntur odio laboriosam!</p>
                      <div class="features">
                          <span class="badget">Parking</span>
                          <span class="badget">Wi-Fi</span>
                          <span class="badget">Cable TV</span>
                          <span class="badget">Pool</span>
                      </div>
                      <h4>CONTACT</h4>
                      <p>+55 27 3000-4000</p>
                      <h4>LOCATION</h4>
                      <p>1001 First Ave, Vitoria, Zip 29101-001<br/>Espirito Santo - Brazil</p>
                      <a href="#" class="link" >View on map</a>
                  </div>
                  <div class="image">
                      <img src="{item.image}" alt="{item.name}" />
                  </div>
              </div>
              <div class="service-reviews">
                  <h2>USER REVIEWS</h2>
                  <hr/>
                  <div class="row">
                      <img class="quotes" src="assets/img/icons/quotes.svg" alt="Comments" />
                      <div class="col">
                          <h3>Lorem ipsum</h3>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae eveniet excepturi placeat facilis, deleniti voluptate accusamus natus aspernatur dolorem sit, cupiditate consequuntur quis? Veritatis laborum eius dolorem velit, molestias perferendis.</p>
                          <div class="ratings">
                              <i class="fas fa-star active"></i>
                              <i class="fas fa-star active"></i>
                              <i class="fas fa-star active"></i>
                              <i class="fas fa-star active"></i>
                              <i class="fas fa-star"></i>
                          </div>
                          <p>
                              <strong>User Name</strong> &nbsp; | &nbsp; August 20, 2020
                          </p>
                      </div>
                  </div>
              </div>
          </Container>
      </section>
    </main>
  );
}

export default HotelDetails;