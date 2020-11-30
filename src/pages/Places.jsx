import React from 'react';
import { Grid, Container } from "@material-ui/core";

import ImgBeach from '../assets/images/places/beach.jpg';
import ImgPark from '../assets/images/places/park.jpg';
import ImgChurch from '../assets/images/places/church.jpg';

const Places = () => {
  return (
    <main id="places-page">
      <section className="page-header">
        <Container maxWidth="lg" >
            <h1>Places</h1>
        </Container>
      </section>

      <section className="beaches">
        <Container maxWidth="lg" >
            <Grid container direction="row" spacing="4" alignItems="center" >
                <Grid item xs={12} sm={8} >
                    <h2>Paradise Beaches</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore sed nesciunt laborum ab eius error suscipit veritatis quaerat, ea officiis, perspiciatis ullam iste velit minima architecto non magnam? Voluptatem, alias?</p>
                    <a href="#" className="btn btn-primary" >Read more</a>
                </Grid>
                <Grid item xs={12} sm={4} >
                    <img src={ImgBeach} className="shadow" alt="Paradise Beaches" />
                </Grid>
            </Grid>
        </Container>
      </section>

      <section className="parks bg-light">
        <Container maxWidth="lg" >
            <Grid container direction="row" spacing="4" alignItems="center" >
                <Grid item xs={12} sm={4} >
                    <img src={ImgPark} className="shadow" alt="City Parks" />
                </Grid>
                <Grid item xs={12} sm={8} >
                    <h2>City Parks</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore sed nesciunt laborum ab eius error suscipit veritatis quaerat, ea officiis, perspiciatis ullam iste velit minima architecto non magnam? Voluptatem, alias?</p>
                    <a href="#" className="btn btn-primary" >Read more</a>
                </Grid>
            </Grid>
        </Container>
      </section>

      <section className="church">
        <Container maxWidth="lg" >
            <Grid container direction="row" spacing="4" alignItems="center" >
                <Grid item xs={12} sm={8} >
                    <h2>Historic Church</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore sed nesciunt laborum ab eius error suscipit veritatis quaerat, ea officiis, perspiciatis ullam iste velit minima architecto non magnam? Voluptatem, alias?</p>
                    <a href="#" className="btn btn-primary" >Read more</a>
                </Grid>
                <Grid item xs={12} sm={4} >
                    <img src={ImgChurch} className="shadow" alt="Historic Church" />
                </Grid>
            </Grid>
        </Container>
      </section>

    </main>
  );
}

export default Places;