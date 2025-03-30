import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";
import { Typography } from "@material-tailwind/react";
import { TextField, Grid, Button, useTheme, useMediaQuery } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const initialState = {
    name: "",
    email: "",
    message: "",
};
const Contact = (props) => {
    const [{ name, email, message }, setState] = useState(initialState);

    const theme = useTheme();
    const isMobileView = useMediaQuery(theme.breakpoints.down("md"));

    const handleChange = (e) => {
        const { name, value } = e.target;
        setState((prevState) => ({ ...prevState, [name]: value }));
    };
    const clearState = () => setState({ ...initialState });


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, email, message)

        emailjs
            .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_PUBLIC_KEY")
            .then(
                (result) => {
                    console.log(result.text);
                    clearState();
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };
    return (
        <div className="relative flex h-[150vh] content-center items-center justify-center overflow-hidden" style={{ background: "linear-gradient(to right, rgb(202, 207, 251) 0%, rgb(108, 169, 236) 100%)" }}>
            <div className="container" style={{ marginTop: "40px", paddingLeft:`${isMobileView&&"20px"}`,paddingRight:`${isMobileView&&"20px"}` }}>

                <Grid container spacing={3}>
                    <Grid item md={8} sm={6} xs={12}>
                        <div className="section-title">
                            <Typography style={{ fontSize: "40px", color: "#000000", fontFamily: "bodoni-moda,bodoni moda,serif" }}>Get In Touch</Typography>
                            <p>
                                Please fill out the form below to send us an email and we will
                                get back to you as soon as possible.
                            </p>
                        </div>
                        <form name="sentMessage" validate onSubmit={handleSubmit} style={{ background: "#fff", padding: "20px", marginTop:`${isMobileView&&"60px"}` }}>

                            <Grid container spacing={4} direction="column">
                                <Grid item>
                                    <Grid container spacing={3}>
                                        <Grid item md={6} sm={12} xs={12}>
                                            <TextField id="outlined-basic" label="Name" variant="outlined" fullWidth />
                                        </Grid>
                                        <Grid item md={6} sm={12} xs={12}>
                                            <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth />
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item>
                                    <Grid container spacing={3} >
                                        <Grid item md={12} xs={12}>
                                            <TextField
                                                label="Message"
                                                multiline
                                                rows={4}
                                                variant="filled"
                                                fullWidth
                                            />
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item>
                                    <div id="success"></div>
                                    <Button type="submit" variant="contained">Send Message</Button>
                                </Grid>
                            </Grid>

                        </form>
                    </Grid>
                    <Grid item md={4} sm={6} xs={12} style={{ marginTop: "70px", color:"#fff" }}>
                    <Grid container spacing={4} direction="column">
                        <Grid item>                            
                            <Grid container spacing={1} direction="column">
                                <Grid item><span><i className="fa fa-map-marker"></i> Address</span></Grid>
                                <Grid item>1927 Baltimore-Reynoldsburg Rd, Reynoldsburg, OH 43068</Grid>
                            </Grid> 
                            </Grid>
                            <Grid item>
                            <Grid container spacing={1} direction="column">
                                <Grid item><span><i className="fa fa-phone"></i> Phone</span></Grid>
                                <Grid item>614 604 6785</Grid>
                            </Grid>
                            </Grid>
                        <Grid item>                           
                             <Grid container spacing={1} direction="column">
                                <Grid item><span><MailOutlineIcon/> Email</span></Grid>
                                <Grid item>everestsalon18@gmail.com</Grid>
                            </Grid></Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <div style={{ marginTop: "30px" }}><iframe width="100%" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=1929%20Baltimore-Reynoldsburg%20Rd%20Reynoldsburg,%20OH%2043068+(Everest%20Multi%20Tech)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">cat gps tracker</a></iframe></div>
            </div>
        </div>
    );
};

export default Contact;