import React, { useEffect }  from 'react';
import { Container, Box, Typography, Grid, Card, CardMedia, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import theme from '../theme/theme';
import service from '../services/ExperienceService';

/**
 * MyPortfolio
 * @Author Holland Aucoin
 * 
 * Experience Information
 * @Summary This component displays the professional experience information within the experience page
 */

const useStyles = makeStyles(() => ({
    block: {
      marginBottom: theme.spacing(3),
      textAlign: "justify"
    },
    imageBoxRoot: {
      maxWidth: 512,
      paddingBottom: theme.spacing(12),
      marginLeft: 'auto',
      marginRight: 'auto',
      [theme.breakpoints.up(960)]: {
          paddingTop: theme.spacing(12),
          paddingLeft: theme.spacing(6),
      }
    },
    imageBoxRootBottom: {
      maxWidth: 512,
      paddingBottom: theme.spacing(8),
      marginLeft: 'auto',
      marginRight: 'auto',
      [theme.breakpoints.up(960)]: {
          paddingTop: theme.spacing(6),
          paddingLeft: theme.spacing(6),
      }
    },
    cardRoot: {
      position: 'relative',
      paddingTop: '85%',
      margin: 'auto',
      overflow: 'hidden',
    },
    cardMedia: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      border: 0
    }
}));

export default function App() {

    const classes = useStyles();

    // Creating variables of experience lists to be filled be appropriate service call
    const [GCUExperiences, setGCUExperiences] = React.useState([]);
    const [GCEExperiences, setGCEExperiences] = React.useState([]);
    const [AWSLExperiences, setASWLExperiences] = React.useState([]);
    const [URExperiences, setURExperiences] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);

    // Use useEffect method to call backend for each skill type and wait for response
  useEffect(() => {
    service.getExperiencesByCompany("Grand Canyon University").then(response => {
      setGCUExperiences(response.data);
    })
    service.getExperiencesByCompany("Grand Canyon Education").then(response => {
      setGCEExperiences(response.data);
    })
    service.getExperiencesByCompany("Association of Washington Student Leaders").then(response => {
      setASWLExperiences(response.data);
    })
    service.getExperiencesByCompany("University of Redlands").then(response => {
      setURExperiences(response.data);
    })
    setIsLoading(false);
  }, []);


    return (

    <section>
      {/* Check to see if REST call has finished before trying to render */}
      { !isLoading && (
        <Box pt={8} >
          <Container maxWidth="md">
            <Box textAlign="left" mb={2}>
              <Typography variant="h4" component="h2" gutterBottom={true}>Learn about what I've done.</Typography>
              <Typography variant="subtitle1" color="textSecondary" color="secondary">
                Listed below are the experiences where I have been able to learn and grow, and include positions that allowed me to serve as a leader in team environments.
              </Typography>
            </Box>
          </Container>
          {/* Section displaying all GCU experience information */}
          <Container maxWidth="md" style={{paddingBottom: 30}}>
            <Grid container>
              <Grid item xs={12} md={7}>
                <Box className={classes.contentBox}>
                  <Box mt={4}>
                    <Typography variant="h5">Grand Canyon University</Typography>
                    <hr width="150px" align="left" />
                    <br/>
                  </Box>
                  <Box>
                    {
                      GCUExperiences.map((experience, index) => {

                        let location = "";

                        if(index === 0) {
                          location = 
                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <Typography variant="body1"><b>{experience.name}</b></Typography>
                            <Typography variant="body2" color="textSecondary">{experience.location}</Typography>
                          </div>
                        }
                        else {
                          location = 
                            <Typography variant="body1"><b>{experience.name}</b></Typography>
                        }

                        return (
                          <div key={index}>
                            {location}
                            <Typography variant="overline">{experience.startDate} - {experience.endDate}</Typography>
                            <Typography variant="body1" color="textSecondary" paragraph={true} className={classes.block}>{experience.description}</Typography>       
                          </div>
                        )
                      })
                    }
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} md={5}>
                <Box className={classes.imageBoxRoot}>
                  <Card className={classes.cardRoot}>
                    <CardMedia className={classes.cardMedia} component="img" src={GCUExperiences.length > 0 ? GCUExperiences[0].image : null} alt={GCUExperiences.length > 0 ? GCUExperiences[0].name : null}/>
                  </Card>
                </Box>
              </Grid>
            </Grid>
          </Container>

          <Paper elevation={3}>
            <Container maxWidth="md" style={{paddingTop: 30, paddingBottom: 30}}>
              <Grid container>
                <Grid item xs={12} md={7}>
                  <Box className={classes.contentBox}>
                    <Box mt={2}>
                      <Typography variant="h5">Grand Canyon Education</Typography>
                      <hr width="150px" align="left" />
                      <br/>
                    </Box>
                    <Box>
                      {
                        GCEExperiences.map((experience, index) => {

                          let location = "";

                          if(index === 0) {
                            location = 
                              <div style={{ display: "flex", justifyContent: "space-between" }}>
                              <Typography variant="body1"><b>{experience.name}</b></Typography>
                              <Typography variant="body2" color="textSecondary">{experience.location}</Typography>
                            </div>
                          }
                          else {
                            location = 
                              <Typography variant="body1"><b>{experience.name}</b></Typography>
                          }

                          return (
                            <div key={index}>
                              {location}
                              <Typography variant="overline">{experience.startDate} - {experience.endDate}</Typography>
                              <Typography variant="body1" color="textSecondary" paragraph={true} className={classes.block}>{experience.description}</Typography>       
                            </div>
                          )
                        })
                      }
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} md={5}>
                  <Box className={classes.imageBoxRoot}>
                    <Card className={classes.cardRoot}>
                      <CardMedia className={classes.cardMedia} component="img" src={GCEExperiences.length > 0 ? GCEExperiences[0].image : null} alt={GCEExperiences.length > 0 ? GCEExperiences[0].name : null}/>
                    </Card>
                  </Box>
                </Grid>
              </Grid>
            </Container>
          </Paper>

          <Container maxWidth="md" style={{paddingTop: 30}}>
            <Grid container>
              <Grid item xs={12} md={7}>
                <Box className={classes.contentBox}>
                  <Box mt={2}>
                    <Typography variant="h5">Association of Washington Student Leaders</Typography>
                    <hr width="150px" align="left" />
                    <br/>
                  </Box>
                  <Box>
                    {
                      AWSLExperiences.map((experience, index) => {

                        let location = "";

                        if(index === 0) {
                          location = 
                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <Typography variant="body1"><b>{experience.name}</b></Typography>
                            <Typography variant="body2" color="textSecondary">{experience.location}</Typography>
                          </div>
                        }
                        else {
                          location = 
                            <Typography variant="body1"><b>{experience.name}</b></Typography>
                        }

                        return (
                          <div key={index}>
                            {location}
                            <Typography variant="overline">{experience.startDate} - {experience.endDate}</Typography>
                            <Typography variant="body1" color="textSecondary" paragraph={true} className={classes.block}>{experience.description}</Typography>       
                          </div>
                        )
                      })
                    }
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} md={5}>
                <Box className={classes.imageBoxRootBottom}>
                  <Card className={classes.cardRoot}>
                    <CardMedia className={classes.cardMedia} component="img" src={AWSLExperiences.length > 0 ? AWSLExperiences[0].image : null} alt={AWSLExperiences.length > 0 ? AWSLExperiences[0].name : null}/>
                  </Card>
                </Box>
              </Grid>
            </Grid>
          </Container>

          <Paper elevation={3}>
            <Container maxWidth="md" style={{paddingTop: 30, paddingBottom: 30}}>
              <Grid container>
                <Grid item xs={12} md={7}>
                  <Box className={classes.contentBox}>
                    <Box mt={2}>
                      <Typography variant="h5">University of Redlands</Typography>
                      <hr width="150px" align="left" />
                      <br/>
                    </Box>
                    <Box>
                    {
                        URExperiences.map((experience, index) => {

                          let location = "";

                          if(index === 0) {
                            location = 
                              <div style={{ display: "flex", justifyContent: "space-between" }}>
                              <Typography variant="body1"><b>{experience.name}</b></Typography>
                              <Typography variant="body2" color="textSecondary">{experience.location}</Typography>
                            </div>
                          }
                          else {
                            location = 
                              <Typography variant="body1"><b>{experience.name}</b></Typography>
                          }

                          return (
                            <div key={index}>
                              {location}
                              <Typography variant="overline">{experience.startDate} - {experience.endDate}</Typography>
                              <Typography variant="body1" color="textSecondary" paragraph={true} className={classes.block}>{experience.description}</Typography>       
                            </div>
                          )
                        })
                      }
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} md={5}>
                  <Box className={classes.imageBoxRoot}>
                    <Card className={classes.cardRoot}>
                      <CardMedia className={classes.cardMedia} component="img" src={URExperiences.length > 0 ? URExperiences[0].image : null} alt={URExperiences.length > 0 ? URExperiences[0].name : null}/>
                    </Card>
                  </Box>
                </Grid>
              </Grid>
            </Container>
          </Paper>

        </Box>
      )
      }
    </section>

    )
}