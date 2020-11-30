import React from 'react';
import { Link } from "react-router-dom";
import { Grid, Container } from "@material-ui/core";

import Newsletter from '../components/Newsletter';

import ImgBeaches from '../assets/images/city/beaches.jpg';
import ImgFood from '../assets/images/city/food.jpg';
import ImgHotels from '../assets/images/city/hotels.jpg';

import ImgHotel1 from '../assets/images/services/hotel/01.jpg';
import ImgHotel2 from '../assets/images/services/hotel/02.jpg';

import ImgNews1 from '../assets/images/news/news_1.jpg';
import ImgNews2 from '../assets/images/news/news_2.jpg';

const Home = () => {
  return (
    <main id="home-page">
      <section className="hero">
        <Container maxWidth="lg" >
          <div className="subtitle">WELCOME TO</div>
          <h2 className="title">VITORIA</h2>
        </Container>
      </section>

      <section className="discover">
        <Container maxWidth="lg" >
            <Grid container spacing={3} direction="row" alignItems="center" >
                <Grid item xs={12} className="text-center" >
                    <h1 className="title-center">Discover the City</h1>
                </Grid>
                <Grid item xs={12} sm={4} >
                    <Link to="/places" className="place-img" >
                        <img src={ImgBeaches} className="shadow" alt="Paradise Places in Vitoria" />
                        <div className="content">
                            <p>PARADISE</p>
                            <h2>PLACES</h2>
                        </div>
                    </Link>
                </Grid>
                <Grid item xs={12} sm={4} >
                    <Link to="/restaurants" className="place-img" >
                        <img src={ImgFood} className="shadow" alt="Traditional food in Vitoria" />
                        <div className="content">
                            <p>TRADITIONAL</p>
                            <h2>LOCAL FOOD</h2>
                        </div>
                    </Link>
                </Grid>
                <Grid item xs={12} sm={4} >
                    <Link to="/hotels" className="place-img" >
                        <img src={ImgHotels} className="shadow" alt="Where to stay in Vitoria" />
                        <div className="content">
                            <p>WHERE TO STAY</p>
                            <h2>HOTELS <small>&</small> INNS</h2>
                        </div>
                    </Link>
                </Grid>
            </Grid>
        </Container>

        <Container maxWidth="lg" >
            <hr/>
        </Container>

        <Container maxWidth="lg" >
            <Grid container spacing={4} direction="row" alignItems="center" >
                <Grid item xs={12} sm={3} >
                    <img src={ImgHotel1} className="shadow" alt="Hotels" />
                </Grid>
                <Grid item xs={12} sm={9} className="content" >
                    <a href="hotels.html" className="btn btn-primary float-right">Read more</a>
                    <h2>Hotel Name</h2>
                    <div className="ratings">
                        <i className="fas fa-star active"></i>
                        <i className="fas fa-star active"></i>
                        <i className="fas fa-star active"></i>
                        <i className="fas fa-star active"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam id reiciendis nisi dolorum voluptate accusantium! Iste explicabo, saepe neque inventore laborum sit eum? Neque esse magni, dolores reiciendis nostrum eaque!</p>
                    <p>2001 Ave, Vitoria ES</p>
                </Grid>
                <Grid item xs={12} spacing={0} >
                    <hr style={{margin:"0"}}/>
                </Grid>
                <Grid item xs={12} sm={3} >
                    <img src={ImgHotel2} className="shadow" alt="Hotels" />
                </Grid>
                <Grid item xs={12} sm={9} className="content" >
                    <a href="hotels.html" className="btn btn-primary float-right">Read more</a>
                    <h2>Hotel Name</h2>
                    <div className="ratings">
                        <i className="fas fa-star active"></i>
                        <i className="fas fa-star active"></i>
                        <i className="fas fa-star active"></i>
                        <i className="fas fa-star active"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam id reiciendis nisi dolorum voluptate accusantium! Iste explicabo, saepe neque inventore laborum sit eum? Neque esse magni, dolores reiciendis nostrum eaque!</p>
                    <p>4002 Main Ave, Vitoria ES</p>
                </Grid>
            </Grid>
        </Container>
      </section>
      <section className="news">
        <Container maxWidth="lg" >
            <Grid container spacing={4} direction="row" alignItems="center" >
                <Grid item xs={12} className="text-center" >
                    <h1 className="title-center">Latest Local News</h1>
                    <hr/>
                </Grid>
                <Grid item xs={12} sm={4} >
                    <img src={ImgNews1} className="shadow" alt="News" />
                </Grid>
                <Grid item xs={12} sm={8} className="content" >
                    <p>2 days ago</p>
                    <h2>Paul McCartney presents the "Out There" tour in Brazil</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam id reiciendis nisi dolorum voluptate accusantium! Iste explicabo, saepe neque inventore laborum sit eum? Neque esse magni, dolores reiciendis nostrum eaque!</p>
                    <Link to="/" className="link">Read more</Link>
                </Grid>
                <Grid item xs={12} >
                    <hr style={{margin:"0"}}/>
                </Grid>
                <Grid item xs={12} sm={4} >
                    <img src={ImgNews2} className="shadow" alt="News" />
                </Grid>
                <Grid item xs={12} sm={8} className="content" >
                    <p>1 month ago</p>
                    <h2>Title news with some Lorem ipsum dolor sit amet</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam id reiciendis nisi dolorum voluptate accusantium! Iste explicabo, saepe neque inventore laborum sit eum? Neque esse magni, dolores reiciendis nostrum eaque!</p>
                    <Link to="/" className="link">Read more</Link>
                </Grid>
            </Grid>
        </Container>
      </section>
      <Newsletter />
    </main>
  );
}

export default Home;