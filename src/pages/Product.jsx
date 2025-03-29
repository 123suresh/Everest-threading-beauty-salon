import React from "react";
import { Typography, Box, useTheme, useMediaQuery, Grid } from "@mui/material";

export function Product() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div style={{backgroundColor:"#FEFFFF"}}>
      <Box
        sx={{
          textAlign: "center",
          py: 10,
          // mx: 4,
          position: "relative",
          minHeight: "60vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: 'url("/img/productbg.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)", 
            zIndex: 1,
          }}
        />

        <Box position="relative" zIndex={2}>
          <Typography
            variant="h1"
            sx={{ 
              mb: 6, 
              fontWeight: "bold", 
              fontSize: { xs: "2.5rem", md: "4rem" }, 
              color: "white" 
            }}
          >
            Our Product
          </Typography>
          
          <Typography
            variant="subtitle1"
            sx={{ 
              fontSize: { xs: "1.5rem", md: "2rem" }, 
              color: "white",
              paddingLeft:"80px",
              paddingRight:"80px"
            }}
          >
            Himali Water – Pure, refreshing, and enriched with essential minerals for perfect hydration. Stay healthy with every sip!
          </Typography>
        </Box>
      </Box>

      <Box py="60px" sx={{backgroundColor:"#5bbce4"}}>
        <Grid container sapcing={4} alignItems="center">
            <Grid item md={6} sm={12}>
                <img src="/img/himaliwater1.png"
                width="90%"
                />
            </Grid>
            <Grid item md={6} sm={12}>
              <Box sx={{margin:"0px 20px 0px 20px"}}>
              <Typography
                variant="h1"
                // color="white"
                className="mb-6 font-black text-5xl md:text-6xl lg:text-7xl"
              >
                Himali Water
              </Typography>
              <Typography
                variant="h4"
                // color="white"
                className="mb-6 font-bold text-2xl md:text-3xl lg:text-4xl"
              >
                Premuim Natural Mineral Water
              </Typography>
              <Typography variant="lead"  className="opacity-80 text-lg md:text-xl">
              Himali Water is a premium purified water brand, carefully enriched with essential 
              minerals to support a healthy lifestyle. Known for its purity and refreshing taste, 
              Himali Water is the preferred choice for those who value quality hydration. 
              Available in various pack sizes to suit everyday needs, it is sourced from pristine 
              natural reserves and undergoes strict purification processes. Certified for safety 
              and quality, Himali Water ensures every sip is pure, refreshing, and beneficial for 
              your well-being.
              </Typography>
              </Box>
            </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Product;