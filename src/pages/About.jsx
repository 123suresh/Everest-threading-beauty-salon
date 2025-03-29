import React from "react";
import { Typography, Box, useTheme, useMediaQuery, Grid } from "@mui/material";
import DoneIcon from '@mui/icons-material/Done';

export function About() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const paragraph = "Welcome to Everest Threading & Beauty Salon, your ultimate destination for beauty and style! We specialize in a wide range of services, including professional makeup, trendy haircuts for boys and girls, expert threading for girls, stunning nail treatments, and vibrant hair coloring. Our team of skilled professionals is dedicated to enhancing your natural beauty and providing a relaxing, luxurious experience. Whether you're looking for a fresh new look or a special makeover, Everest Beauty Salon is here to bring your beauty vision to life. Step in and let us pamper you with the best in beauty care!"

  const Why = [
    "Professional Makeup",
    "Haircuts for Boys & Girls ",
    "Threading for Girls",
    "Waxing Services"
  ]
  const Why2 = [
    "Facial Services",
    "Hair Services",
    "Hair Treatments",
    "Bridal & Party Packages"
  ]

  return (
    <>
      <div className="relative flex h-[110vh] content-center items-center justify-center overflow-hidden">
        <Grid container spacing={3} style={{ padding: "40px", fontFamily: "bodoni-moda,bodoni moda,serif" }}>
          <Grid md={6} xs={12}><img src="/img/aboutImg.png" className="img-responsive" alt="" />{" "}</Grid>
          <Grid md={6} xs={12}>
            <div style={{ padding: "40px" }}>
            <Typography style={{ fontSize: "40px", color: "#000000", fontFamily: "bodoni-moda,bodoni moda,serif" }}>About Us</Typography>
              <p>{paragraph ? paragraph : "loading..."}</p>
              <Typography style={{ fontSize: "25px", color: "#000000", fontFamily: "bodoni-moda,bodoni moda,serif", paddingTop:"30px" }}>Why Choose Us?</Typography>
              
              <Grid container>
                <Grid item md={6} xs={12}>
                <ul>
                    {Why.map((d, i) => (
                      <li key={`${d}-${i}`}><DoneIcon color="primary"/>{d}</li>
                    ))}
                  </ul>
                </Grid>
                <Grid item md={6} xs={12}>
                <ul>
                    {Why2.map((d, i) => (
                      <li key={`${d}-${i}`}><DoneIcon color="primary"/>{d}</li>
                    ))}
                  </ul>
                </Grid>
              </Grid>
              
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default About;