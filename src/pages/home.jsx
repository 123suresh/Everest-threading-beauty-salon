import React, { useState, useEffect } from "react";
import { Typography } from "@material-tailwind/react";
import { Box, Grid } from "@mui/material";

export function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    {
      url: "https://cherryontopblog.com/wp-content/uploads/2022/07/engin-akyurt-g-m8EDc4X6Q-unsplash.jpg",
      // title: "Purifying Facials",
      // subtitle: "Naturally Filtered\nPerfectly Balanced",
      overlayText: "Purifying",
      subText:"Facial"
    },
    {
      url: "https://www.allurasalonsuites.com/wp-content/uploads/2020/07/Eyebrow-Threading@2x-1.jpg",
      // title: "Threading",
      // subtitle: "",
      overlayText: "Enchanting",
      subText:"Eyes"
    }
  ];

  const servicesImgs = [
    {src:"https://static.wixstatic.com/media/fa1c38_26c4a5ee732b47b2acd4d735362db7da~mv2.jpg/v1/crop/x_33,y_0,w_628,h_736/fill/w_286,h_335,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/How%20Long%20Does%20Brow%20Lamination%20Last%20on%20Average_.jpg",
    title:"Eyebrows"
    },
    {src:"https://static.wixstatic.com/media/11062b_c08353118ce849f98c46f9788443b1fe~mv2.jpg/v1/crop/x_1077,y_0,w_2845,h_3333/fill/w_286,h_335,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Laser%20Facial%20Treatment.jpg",
     title:"Facial"
    },
    {src:"https://static.wixstatic.com/media/290cf180b80a49759532aea6aeac8855.jpg/v1/crop/x_0,y_631,w_3840,h_4498/fill/w_286,h_335,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Waxing.jpg",
     title:"Waxing"
    },
    {src:"https://static.wixstatic.com/media/fa1c38_a4eead9237a8429097f981ea965d30eb~mv2.jpg/v1/crop/x_0,y_24,w_735,h_861/fill/w_286,h_335,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/download%20(7)_edited.jpg",
    title:"Lashes"
    },
    {src:"https://static.wixstatic.com/media/11062b_dcdcbe60f97c425f97cd8677f2f3e30a~mv2.jpg/v1/crop/x_183,y_0,w_2134,h_2500/fill/w_286,h_335,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Makeup%20Supply.jpg",
    title:"Makeup"
    },
    {src:"https://static.wixstatic.com/media/7fe6b83b5b1d49b39282cb977d925463.jpg/v1/crop/x_2218,y_0,w_2924,h_3428/fill/w_286,h_335,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Woman%20with%20Hand%20on%20Face.jpg",
    title:"Permanent Makeup"
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change every 1 second
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <div className="relative flex h-[80vh] content-center items-center justify-center overflow-hidden">
        {/* Background images with transition effect */}
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image.url}
              className="w-full h-full object-cover"
              style={{ backgroundColor: "#99c3d5" }}
              alt=""
            />
            {/* Overlay text in the middle of each image */}
            <div className="absolute inset-0 flex items-center justify-center z-30">
              <Typography
                variant="h1"
                className="text-white font-black text-5xl md:text-6xl lg:text-7xl text-center"
              >
                {image.overlayText}
              </Typography>
              
              <Typography
                variant="h1"
                className="text-white font-black text-5xl md:text-6xl lg:text-7xl text-center"
              >
                {image.subText}
              </Typography>
            </div>
          </div>
        ))}

        {/* Dark overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>

        

        {/* Content that stays consistent */}
        <div className="max-w-8xl container relative mx-auto z-20" style={{ paddingTop: "30px" }}>
          <Grid container spacing={4} alignItems="center" justifyContent="center">
            <Grid item md={6} xs={12} className="text-center lg:text-left" sx={{color:"#FEFFFF"}}>
              <Typography
                variant="h1"
                className="mb-6 font-black text-5xl md:text-6xl lg:text-7xl"
              >
                {images[currentImageIndex].title}
              </Typography>
              {images[currentImageIndex].subtitle && (
                <Typography
                  variant="h4"
                  className="mb-6 font-bold text-2xl md:text-3xl lg:text-4xl"
                >
                  {images[currentImageIndex].subtitle.split('\n').map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </Typography>
              )}
              {/* <Typography variant="lead" className="opacity-80 text-lg md:text-xl">
                Pure, refreshing, and enriched with essential minerals, Himali Water is the perfect
                choice for healthy hydration. Sourced from nature and carefully purified, it delivers
                crisp taste and nourishment in every sip!
              </Typography> */}
            </Grid>
          </Grid>
        </div>
      </div>

      <div>
          <Typography  style={{fontSize: "66px", color: "#000000", textAlign:"center", fontFamily: "bodoni-moda,bodoni moda,serif"}}>
            Services
          </Typography>
          </div>
          <div style={{backgroundColor:"#edd5d5", marginLeft:"60px", marginRight:"60px"}}>
            <div style={{padding:"20px"}}>
                <Grid container spacing={2}>
                  {
                    servicesImgs.map((el,i)=>(
                      <Grid item md={4} sm={6} sx={12} style={{padding:"30px"}}>
                        <div>
                          <img src={el.src} />
                          <span style={{fontSize:"20px", color:"black", backgroundColor:"#fff", padding:"20px"}}>{el.title}</span>
                        </div>
                    </Grid>
                    ))
                  }
                </Grid>
                </div>
          </div>
     
          
          <Box sx={{ py: 8, px: 2 }}>
  {/* Contact Us Heading */}
  <Typography  style={{fontSize: "66px", color: "#000000", textAlign:"center", fontFamily: "bodoni-moda,bodoni moda,serif"}}>
            Contact Us
          </Typography>

  {/* Contact Information Grid */}
  <Grid container spacing={4} justifyContent="space-around" alignContent="center" textAlign="center" alignItems="center">
    {/* Address Section */}
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
          123 Beauty Street<br />
          New York, NY 10001<br />
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
          Monday - Friday: 9am - 7pm<br />
          Saturday: 10am - 5pm<br />
          Sunday: Closed
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
          Phone: (123) 456-7890<br />
          Email: info@beautyclinic.com<br />
          Instagram: @beautyclinic
        </Typography>
      </Box>
    </Grid>
  </Grid>
</Box>

      <section className="px-10 py-20 bg-gray-50">
        {/* ... existing content ... */}
      </section>
    </>
  );
}

export default Home;