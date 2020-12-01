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

const About = (props) => {
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
                      <Grid container direction="row" spacing={3} >
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
                      <Grid container direction="row" spacing={3} >
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
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59878.985475469985!2d-40.32080896128782!3d-20.282188053150414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb83d5d85374ee9%3A0x97595e7ea70ed809!2sVitoria%2C%20Vit%C3%B3ria%20-%20State%20of%20Esp%C3%ADrito%20Santo!5e0!3m2!1sen!2sbr!4v1606802657781!5m2!1sen!2sbr" width="100%" height="450" frameborder="0" style={{border:'0'}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
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
                          <a href="#contact" onClick={props.openContactModal} >Contact</a>
                      </li>
                  </ul>
              </div>
          </div>
        </Container>
    </main>
  );
}

export default About;