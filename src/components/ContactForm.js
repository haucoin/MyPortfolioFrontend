import React, { useState } from 'react';
import { Container, Box, Typography, Grid, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import theme from '../theme/theme';
import { Phone, Email } from '@material-ui/icons';

/**
 * MyPortfolio
 * @Author Holland Aucoin
 * 
 * Contact Form
 * @Summary This component displays the contact form that is shown on the contact page
 */

const useStyles = makeStyles(() => ({
  button: {
    color: theme.palette.text.black,
    backgroundColor: "transparent",
    height: "50px",
  },
  halfLg: {
    [theme.breakpoints.up('lg')]: {
      maxWidth: theme.breakpoints.values['lg'] / 2
    }
  },
  firstBox: {
    [theme.breakpoints.up('lg')]: {
      marginLeft: 'auto',
      paddingRight: theme.spacing(6)
    }
  },
  fullHeightImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    objectFit: 'cover',
    height: 768,
    width: '100%'
  },
}));

export default function App() {

  const classes = useStyles();

  // Creating variables of form and using state
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  // Set variable to input on the change
  const onChangeFirstName = (event) => {
    setFirstName(event.target.value);
  }
  const onChangeLastName = (event) => {
    setLastName(event.target.value);
  }
  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  }
  const onChangeSubject = (event) => {
    setSubject(event.target.value);
  }
  const onChangeMessage = (event) => {
    setMessage(event.target.value);
  }

  const onSubmit = (event) => {

  }

  return (

    <section>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Box pt={10} pb={8} display="flex" className={classes.halfLg, classes.firstBox}>
            <Container>
              <Box mb={4}>
                <Typography variant="h4" component="h2" gutterBottom={true} color="secondary">Let's get connected.</Typography>
                <Typography variant="subtitle1" color="textSecondary" paragraph={true}>Determined and passionate software developer <b>actively seeking new opportunities</b> and would love to hear from you.</Typography>
              </Box>

              {/* Contact Form with validating fields */}
              <ValidatorForm onError={errors => console.log(errors)} onSubmit={onSubmit}>
                <Grid container spacing={2} style={{textAlign: "center"}}>
                  <Grid item xs={12} sm={6}>
                    <TextValidator variant="outlined" fullWidth
                      label="First Name *"
                      onChange={onChangeFirstName}
                      name="firstName"
                      value={firstName}
                      validators={['required', 'matchRegexp:^[a-zA-Z]+$', 'matchRegexp:^.{2,15}$']}
                      errorMessages={['This field is required', 'Can only contain letters', 'Must be 2 to 15 characters']}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextValidator variant="outlined" fullWidth
                      label="Last Name *"
                      onChange={onChangeLastName}
                      name="lastName"
                      value={lastName}
                      validators={['required', 'matchRegexp:^[a-zA-Z]+$', 'matchRegexp:^.{2,15}$']}
                      errorMessages={['This field is required', 'Can only contain letters', 'Must be 2 to 15 characters']}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextValidator variant="outlined" fullWidth
                      label="Email *"
                      onChange={onChangeEmail}
                      name="email"
                      value={email}
                      validators={['required', 'isEmail']}
                      errorMessages={['This field is required', 'Invalid email']}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextValidator variant="outlined" fullWidth
                      label="Subject *"
                      onChange={onChangeSubject}
                      name="subject"
                      value={subject}
                      validators={['required']}
                      errorMessages={['This field is required']}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextValidator variant="outlined" fullWidth multiline rows={5}
                      label="Message *"
                      onChange={onChangeMessage}
                      name="message"
                      value={message}
                      validators={['required']}
                      errorMessages={['This field is required']}
                    />
                  </Grid>
                </Grid>
                <Box my={2} maxWidth="300px" style={{margin: "auto", paddingTop: "20px"}}>
                  <Button className={classes.button} type="submit" fullWidth variant="contained">SUBMIT</Button>
                </Box>
              </ValidatorForm>
            </Container>
          </Box>
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
        </Grid>
        {/* Image that adjusts based on screen size */}
        <Grid item xs={12} md={6}>
          <Box position="relative" height={768}>
            <img className={classes.fullHeightImage} src="https://hollandaucoin-images.s3-us-west-1.amazonaws.com/main/ContactMe.jpg" alt="" />
          </Box>
        </Grid>
      </Grid>
    </section>

  )
}