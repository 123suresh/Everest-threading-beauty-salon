import React, { useState, useEffect } from "react";
import { Typography } from "@material-tailwind/react";
import { Box, Grid } from "@mui/material";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

export function Home() {

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const servicesImgs = [
    {
      src: "/img/threading.png",
      title: "Eyebrows"
    },
    {
      src: "/img/facial.png",
      title: "Facial"
    },
    {
      src: "/img/waxing.png",
      title: "Waxing"
    },
    {
      src: "/img/eyelashes.png",
      title: "Lashes"
    },
    {
      src: "https://static.wixstatic.com/media/11062b_dcdcbe60f97c425f97cd8677f2f3e30a~mv2.jpg/v1/crop/x_183,y_0,w_2134,h_2500/fill/w_286,h_335,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Makeup%20Supply.jpg",
      title: "Makeup"
    },
    {
      src: "https://static.wixstatic.com/media/7fe6b83b5b1d49b39282cb977d925463.jpg/v1/crop/x_2218,y_0,w_2924,h_3428/fill/w_286,h_335,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Woman%20with%20Hand%20on%20Face.jpg",
      title: "Permanent Makeup"
    }
  ]

  const images = ["/img/Home2Final.png", "/img/Home3.png"];

  const theme = useTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 2000ms (2 seconds)

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [images.length]);

  

  return (
    <>
      <div className="relative flex h-[80vh] content-center items-center justify-center overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>
        {isMobileView ? (
          <div className="absolute top-0 left-0 w-full h-full">
            {images.map((img, index) => (
              <img 
                key={img}
                src={img} 
                alt="Salon Services"
                className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
                  index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                  objectPosition: 'center center',
                  minHeight: '100%',
                  minWidth: '100%'
                }}
                onLoad={() => setIsLoading(false)}
              />
            ))}
            {isLoading && (
              <div className="absolute top-0 left-0 w-full h-full bg-gray-200 animate-pulse"></div>
            )}
          </div>
        ) : (
          /* Desktop View - Video */
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover z-0 brightness-125"
            style={{
              objectPosition: 'center center',
              minHeight: '100%',
              minWidth: '100%'
            }}
          >
            <source src="/img/Video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>

      <div>
        <Typography style={{ fontSize: "66px", color: "#000000", textAlign: "center", fontFamily: "bodoni-moda,bodoni moda,serif", marginTop: "40px" }}>
          Services
        </Typography>
      </div>
      <div style={{ backgroundColor: "#edd5d5", marginLeft: `${isMobileView?"5px":"60px"}`, marginRight: `${isMobileView?"5px":"60px"}` }}>
        <div style={{ padding: "20px" }}>
          <Grid container spacing={3}>
            {
              servicesImgs.map((el, i) => (
                <Grid item key={i} xs={12} sm={6} md={4}>
                <Card sx={{ 
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column'
                }}>
                  <CardMedia
                    component="img"
                    sx={{
                      height: 240,
                      objectFit: 'cover'
                    }}
                    image={el.src}
                    alt={el.title}
                  />
                  <CardHeader
                    title={el.title}
                    titleTypographyProps={{
                      variant: 'h6',
                      align: 'center'
                    }}
                    sx={{
                      flexGrow: 1
                    }}
                  />
                </Card>
              </Grid>
              ))
            }
          </Grid>
        </div>
      </div>


      <Box sx={{ py: 8, px: 2 }}>
        <Typography style={{ fontSize: "66px", color: "#000000", textAlign: "center", fontFamily: "bodoni-moda,bodoni moda,serif" }}>
          Contact Us
        </Typography>

        <Grid container spacing={4} justifyContent="space-around" alignContent="center" textAlign="center" alignItems="center">
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
              <Typography
                variant="h5"
                sx={{
                  fontSize: "22px",
                  fontWeight: 600,
                  mb: 2
                }}
              >
                Address
              </Typography>
              <Typography sx={{ fontSize: "18px" }}>
                1927 Baltimore-Reynoldsburg Rd, <br />
                Reynoldsburg, OH 43068<br />
                United States
              </Typography>
            </Box>
          </Grid>

          {/* Hours Section */}
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
              <Typography
                variant="h5"
                sx={{
                  fontSize: "22px",
                  fontWeight: 600,
                  mb: 2
                }}
              >
                Hours
              </Typography>
              <Typography sx={{ fontSize: "18px" }}>
                Sunday - Saturday: 10am - 7pm<br />
                Monday: Closed
              </Typography>
            </Box>
          </Grid>

          {/* Contact Section */}
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
              <Typography
                variant="h5"
                sx={{
                  fontSize: "22px",
                  fontWeight: 600,
                  mb: 2
                }}
              >
                Contact
              </Typography>
              <Typography sx={{ fontSize: "18px" }}>
                Phone: 614 604 6785<br />
                Email: everestsalon18@gmail.com
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

    </>
  );
}

export default Home;