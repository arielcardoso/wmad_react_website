import React from 'react';
import { Container } from "@material-ui/core";

import listItem from '../utils/RestaurantList'
import ServiceCard from '../components/ServiceCard'

const Restaurants = () => {
  return (
    <main id="restaurants-page">
        <section class="page-header">
            <Container maxWidth="lg" >
                <h1>Restaurants</h1>
            </Container>
        </section>
        <section>
            <Container maxWidth="lg" >
                <div class="services-list">
                  {listItem.map((item, index) => (
                    <ServiceCard index={index} item={item} type="restaurant" />
                  ))}
                </div>
            </Container>
        </section>
    </main>
  );
}

export default Restaurants;