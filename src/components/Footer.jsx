import React from "react";
import { Grid, Container } from "@material-ui/core";
import { Facebook, Instagram } from "@material-ui/icons";

const Footer = () => {
  return (
    <footer>
      <Container maxWidth="lg" >
        <Grid container spacing={1} direction="row" >
          <Grid container item xs={9} sm={10} spacing={1} direction="column"  >
            <p>Designed for educatiotal purpose only.</p>
            <p>Images from joelmiranda.com / freepik.com</p>
          </Grid>
          <Grid container item xs={3} sm={2} spacing={0} alignItems="center" justify="flex-end" >
            <div className="social">
                <a href="https://facebook.com" target="_blank" rel="noreferrer" >
                    <Facebook fontSize="large"/>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" >
                  <Instagram fontSize="large"/>
                </a>
            </div>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};
export default Footer;
