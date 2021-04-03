import React from 'react';
import { Container, Box, Typography } from '@material-ui/core';
import { Phone, Email } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

/**
 * MyPortfolio
 * @Author Holland Aucoin
 * 
 * Contact Submission
 * @Summary This component displays the confirmation of a conntact submission
 */

const useStyles = makeStyles(() => ({
  links: {
    paddingLeft: 5,
    paddingRight: 5,
    textDecoration: "none"
  }
}));

export default function EducationInformation() {

  const classes = useStyles();

  return (

    <section>
      <Box pt={8} pb={4}>
        <Container maxWidth="md">
          {/* Main section with title, image, and message */}
            <Box textAlign="left" mb={2}>
              <Typography variant="h4" component="h2" gutterBottom={true}>Thank you for reaching out.</Typography>
              <div width="100%" align="center">
                <img src="https://hollandaucoin-images.s3-us-west-1.amazonaws.com/main/confirmation.png" alt="oops" style={{maxWidth:"200px", padding: 20}}></img>
              </div>
              <Typography variant="subtitle1" color="textSecondary">
                Thank you for taking the time to contact me, you're email has been sent! I will be sure to get back to you as soon 
                as possible, and I am looking forward to discuss a potential position or see how we may be able to work together in 
                an upcoming project.
              </Typography>
              <br/>
              <Typography variant="subtitle1" color="textSecondary">
                In the meantime, be sure to connect with me on 
                <a href="https://www.linkedin.com/in/hollandaucoin/" target="_blank" rel="noreferrer" className={classes.links} style={{color: "rgb(59,129,211)"}}><b>LinkedIn</b></a> 
                and feel free to look at my 
                <a href="https://www.github/hollandaucoin" target="_blank" rel="noreferrer" className={classes.links} style={{color: "black"}}><b>GitHub</b></a> 
                for examples of my code. And of course, be on the lookout for an email!
              </Typography>
            </Box>
          </Container>
      </Box>

      {/* Phone and email section */}
      <Box style={{textAlign: "center", paddingBottom: 20}}>
        <a href="tel:206-698-2700" style={{textDecoration: "none"}}>
          <Phone fontSize="small" style={{paddingTop: 5, paddingRight: 5, fill: "GrayText"}}/>
          <Typography style={{verticalAlign: "top"}} variant="overline" color="textSecondary">206-698-2700</Typography>
        </a>
        <Typography style={{paddingLeft: 10, paddingRight: 10, verticalAlign: "top"}} variant="overline" color="textSecondary">|</Typography>
        <a href="mailto:holland.aucoin2@gmail.com" style={{textDecoration: "none"}}>
          <Email fontSize="small" style={{paddingTop: 5, paddingRight: 5, fill: "GrayText"}}/>
          <Typography style={{verticalAlign: "top"}} variant="overline" color="textSecondary">holland.aucoin2@gmail.com</Typography>
        </a>
      </Box>
    </section>

  )
}