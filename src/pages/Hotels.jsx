import React from 'react';
import { Container } from "@material-ui/core";

import listItem from '../utils/HotelList'
import ServiceCard from '../components/ServiceCard'

const Hotels = () => {
  return (
    <main id="hotels-page">
        <section class="page-header">
            <Container maxWidth="lg" >
                <h1>Hotels</h1>
            </Container>
        </section>
        <section>
            <Container maxWidth="lg" >
                <div class="services-list">
                  {listItem.map((item, index) => (
                    <ServiceCard index={index} item={item} type="hotel" />
                  ))}
                </div>
            </Container>
        </section>
    </main>
  );
}

export default Hotels;