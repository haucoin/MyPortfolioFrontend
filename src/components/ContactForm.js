import React, { useState } from 'react';
import { Container, Box, Typography, Grid, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import theme from '../theme/theme';
import me from '../images/ContactMe.jpg';

/**
 * MyPortfolio
 * @Author Holland Aucoin
 * 
 * Contact Form
 * @Summary This component displays the contact form that is shown on the contact page
 */

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(10),
      height: theme.spacing(10),
    },
  },
  button: {
    color: theme.palette.text.black,
    backgroundColor: theme.palette.background.white,
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

  return (

    <section>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Box pt={10} pb={8} display="flex" className={[classes.halfLg, classes.firstBox]}>
            <Container>
              <Box mb={4}>
                <Typography variant="h4" component="h2" gutterBottom={true}>Let's get connected.</Typography>
                <Typography variant="subtitle1" color="textSecondary" paragraph={true}>Determined and passionate software developer <b>actively seeking new opportunities</b> and would love to hear from you.</Typography>
              </Box>

              {/* Contact Form with validating fields */}
              <ValidatorForm onError={errors => console.log(errors)}>
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
        </Grid>
        {/* Image that adjusts based on screen size */}
        <Grid item xs={12} md={6}>
          <Box position="relative" height={768}>
            <img className={classes.fullHeightImage} src={me} alt="" />
          </Box>
        </Grid>
      </Grid>
    </section>

  )
}

// linear-gradient(140deg, #F3B0F2 5%, #DF63D3 15%, #8C53CC 50%, #0A8DC8 75%, #51E2EB 100%)"