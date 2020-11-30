import React from "react";
import {
  Grid,
  Container
} from "@material-ui/core";

const Newsletter = () => {
  return (
    <section className="newsletter">
      <Container maxWidth="lg" >
        <Grid container spacing={1} direction="row" alignItems="center" >
            <Grid item xs={12} sm={8} >
              <h1>Newsletter</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore saepe repellat sapiente velit mollitia voluptate vel.</p>
            </Grid>
            <Grid item xs={12} sm={4} >
              <form action="post" className="newsletter-form shadow" >
                <input type="text" name="name" placeholder="Name" />
                <input type="text" name="email" placeholder="Email" />
                <button type="submit" className="btn btn-primary">
                  <span className="hide-xs">Subscribe</span>
                  <span className="visible-xs">OK</span>
                </button>
              </form>
            </Grid>
        </Grid>
      </Container>
    </section>
  );
};
export default Newsletter;
