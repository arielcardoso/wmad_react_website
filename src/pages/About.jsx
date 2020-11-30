import React from 'react';
import { Grid, Container } from "@material-ui/core";

import ImgCity from '../assets/images/city/about.jpg';
import ImgHistory1 from '../assets/images/city/history_1.jpg';
import ImgHistory2 from '../assets/images/city/history_2.jpg';
import ImgHistory3 from '../assets/images/city/history_3.jpg';
import ImgCityMap from '../assets/images/city/city_map.jpg';
import IconSummer from '../assets/images/icons/summer.svg';
import IconAutumn from '../assets/images/icons/autumn.svg';
import IconWinter from '../assets/images/icons/winter.svg';
import IconSpring from '../assets/images/icons/spring.svg';

const About = () => {
  return (
    <main id="about-page">
      <section className="page-header">
        <Container maxWidth="lg" >
            <h1>About</h1>
        </Container>
      </section>
        <Container maxWidth="lg" >
          <div className="page-with-sidebar">
              <div className="page-content">
                  <section id="about">
                      <h2>Lorem ipsum dolor</h2>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore sed nesciunt laborum ab eius error suscipit veritatis quaerat, ea officiis, perspiciatis ullam iste velit minima architecto non magnam? Voluptatem, alias?</p>
                      <img src={ImgCity} className="shadow" alt="City of Vitoria" />
                      <p>
                          Learn more at:
                          <a className="link" target="_blank" href="https://en.wikipedia.org/wiki/Vit%C3%B3ria,_Esp%C3%ADrito_Santo" rel="noreferrer" >https://en.wikipedia.org/wiki/Vitória,_Espírito_Santo</a>
                      </p>
                  </section>
                  <section id="history">
                      <h2>History</h2>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore sed nesciunt laborum ab eius error suscipit veritatis quaerat, ea officiis, perspiciatis ullam iste velit minima architecto non magnam? Voluptatem, alias?</p>
                      <Grid container direction="row" spacing="4" >
                        <Grid item xs={12} sm={4} >
                            <img src={ImgHistory1} className="shadow" alt="History of Vitoria" />
                        </Grid>
                        <Grid item xs={12} sm={4} >
                            <img src={ImgHistory2} className="shadow" alt="History of Vitoria" />
                        </Grid>
                        <Grid item xs={12} sm={4} >
                            <img src={ImgHistory3} className="shadow" alt="History of Vitoria" />
                        </Grid>
                      </Grid>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore sed nesciunt laborum ab eius error suscipit veritatis quaerat, ea officiis, perspiciatis ullam iste velit minima architecto non magnam? Voluptatem, alias?</p>
                  </section>
                  <section id="weather">
                      <h2>Climate</h2>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore sed nesciunt laborum ab eius error suscipit veritatis quaerat, ea officiis, perspiciatis ullam iste velit minima architecto non magnam? Voluptatem, alias?</p>
                      
                      
                      <Grid container direction="row" spacing="4" >
                        <Grid item xs={6} sm={3} >
                            <img src={IconSummer} alt="Summer" />
                            <h3>Summer</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </Grid>
                        <Grid item xs={6} sm={3} >
                            <img src={IconAutumn} alt="Autumn" />
                            <h3>Autumn</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </Grid>
                        <Grid item xs={6} sm={3} >
                            <img src={IconWinter} alt="Winter" />
                            <h3>Winter</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </Grid>
                        <Grid item xs={6} sm={3} >
                            <img src={IconSpring} alt="Spring" />
                            <h3>Spring</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </Grid>
                      </Grid>
                  </section>
                  <section id="map">
                      <h2>Map</h2>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                      <img src={ImgCityMap} alt="City of Vitoria" />
                  </section>
              </div>
              <div className="page-sidebar">
                  <ul>
                      <li>
                          <a href="#about-page">About</a>
                      </li>
                      <li>
                          <a href="#history">History</a>
                      </li>
                      <li>
                          <a href="#weather">Weather</a>
                      </li>
                      <li>
                          <a href="#map">Map</a>
                      </li>
                      <li>
                          <a href="#" onclick="showModal('contact-modal');" >
                              Contact
                          </a>
                      </li>
                  </ul>
              </div>
          </div>
        </Container>
    </main>
  );
}

export default About;