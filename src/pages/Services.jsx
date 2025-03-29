
import * as React from 'react';
import { Card, CardMedia, Typography, CardContent, Grid, Box, useTheme } from '@mui/material';

const serviceData = [
    {
        title: "Professional Makeup",
        img: "/img/makeup.png",
        tags: [
            "Bridal Makeup",
            "Party Makeup",
            "HD Makeup",
            "Airbrush Makeup",
            "Engagement Makeup",
            "Photoshoot Makeup",
            "Special Occasion Glam"
        ]
    },
    {
        title: "Haircut Services",
        img: "/img/haircut.png",
        tags: [
            "Eyebrows Threading",
            "Eyebrows Tinting",
            "Eyelash Tinting",
            "Eyebrow & Upperlip Threading",
            "Eyebrow, Lip & Chin Threading",
            "Forehead Threading",
            "Chin Threading"
        ]
    },
    {
        title: "Lashes",
        img: "/img/eyelashes.png",
        tags: [
            "Eyelashes Individual Extension",
            "Eyelashes Extension Strip",
            "Classic",
            "Volume",
            "Refill",
            "Lift",
            "Brows lamination"
        ]
    },
    {
        title: "Waxing",
        img: "/img/waxing.png",
        tags: [
            "Eyebrows Waxing",
            "Forehead Waxing",
            "Upper Lip Waxing",
            "Chin Waxing",
            "Side Burn Waxing",
            "Neck Waxing",
            "Full Face Waxing with Eyebrows",
            "Underarm Waxing",
            "Half Arms Waxing",
            "Full Arms Waxing"
        ]
    },
    {
        title: "Facial",
        img: "/img/facial.png",
        tags: [
            "Eyebrows Waxing",
            "Forehead Waxing",
            "Upper Lip Waxing",
            "Chin Waxing",
            "Side Burn Waxing",
            "Neck Waxing",
            "Full Face Waxing with Eyebrows",
            "Underarm Waxing",
            "Half Arms Waxing",
            "Full Arms Waxing"
        ]
    },
    {
        title: "Hair Services",
        img: "/img/hairwashing.jpg",
        tags: [
            "Eyebrows Waxing",
            "Forehead Waxing",
            "Upper Lip Waxing",
            "Chin Waxing",
            "Side Burn Waxing",
            "Neck Waxing",
            "Full Face Waxing with Eyebrows",
            "Underarm Waxing",
            "Half Arms Waxing",
            "Full Arms Waxing"
        ]
    }
];

function Services() {
    const theme = useTheme();
    
    return (
        <Box sx={{ 
            py: 8,
            px: 2,
            backgroundColor: theme.palette.background.default
        }}>
            <Typography variant="h3" align="center" gutterBottom sx={{
                fontWeight: 700,
                mb: 6,
                color: theme.palette.text.primary
            }}>
                Our Services
            </Typography>
            
            <Grid container spacing={4} justifyContent="center" sx={{
                maxWidth: '1200px',
                margin: '0 auto',
                px: 2
            }}>
                {serviceData.map((service, index) => (
                    <Grid item key={index} xs={12} sm={6} md={4}>
                        <Card sx={{ 
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            boxShadow: 3,
                            transition: 'transform 0.3s',
                            '&:hover': {
                                transform: 'scale(1.03)',
                                boxShadow: 6
                            }
                        }}>
                            {/* Fixed height image container */}
                            <Box sx={{
                                height: 200,
                                overflow: 'hidden',
                                position: 'relative'
                            }}>
                                <CardMedia
                                    component="img"
                                    image={service.img}
                                    alt={service.title}
                                    sx={{
                                        height: '100%',
                                        width: '100%',
                                        objectFit: 'cover',
                                        position: 'absolute',
                                        top: 0,
                                        left: 0
                                    }}
                                />
                            </Box>
                            
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Typography gutterBottom variant="h5" component="h3" sx={{
                                    fontWeight: 600,
                                    color: theme.palette.primary.main,
                                    mb: 2
                                }}>
                                    {service.title}
                                </Typography>
                                <Box component="ul" sx={{
                                    pl: 2,
                                    listStyleType: 'none',
                                    maxHeight: 200,
                                    overflowY: 'auto',
                                    '&::-webkit-scrollbar': {
                                        width: 4
                                    },
                                    '&::-webkit-scrollbar-thumb': {
                                        backgroundColor: theme.palette.primary.main,
                                        borderRadius: 2
                                    }
                                }}>
                                    {service.tags.map((tag, tagIndex) => (
                                        <Typography 
                                            key={tagIndex}
                                            component="li"
                                            variant="body1"
                                            sx={{ 
                                                color: 'text.secondary',
                                                mb: 1,
                                                '&:before': {
                                                    content: '"•"',
                                                    color: theme.palette.primary.main,
                                                    display: 'inline-block',
                                                    width: '1em',
                                                    marginLeft: '-1em'
                                                }
                                            }}
                                        >
                                            {tag}
                                        </Typography>
                                    ))}
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default Services;