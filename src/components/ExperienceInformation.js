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
 * @Summary This component displays the professional and volunteer experience information within the experience page
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
              <Typography variant="subtitle1" color="textSecondary">
                Listed below are the experiences where I have been able to learn and grow, and include positions that allowed me to serve as a leader in team environments.
              </Typography>
            </Box>
          </Container>
          {/* Section displaying all experience information */}
          <Container maxWidth="md">
            <Grid container>
              <Grid item xs={12} md={7}>
                <Box className={classes.contentBox}>
                  <Box mt={2}>
                    <Typography variant="h5">Grand Canyon University</Typography>
                    <hr width="150px" align="left" />
                    <br/>
                  </Box>
                  <Box>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                      <Typography variant="body1"><b>Student Engagement - Director</b></Typography>
                      <Typography variant="body2" color="textSecondary">Phoenix, AZ</Typography>
                    </div>
                    <Typography variant="overline">April 2020 - Present</Typography>
                    <Typography variant="body1" color="textSecondary" paragraph={true} className={classes.block}>Led a group of 10 team members to create an engaged student body through the use of a mobile application. Guided and pushed these student leaders to create a difference in the campus life and community within GCU. Managed and delegated projects/tasks to each team member, as well as scheduled staff at event check-in.</Typography>
                    
                    <Typography variant="body1"><b>Student Engagement - Reporting Manager</b></Typography>
                    <Typography variant="overline">December 2019 - April 2020</Typography>
                    <Typography variant="body1" color="textSecondary" paragraph={true} className={classes.block}>Worked on a team of 10 in assisting other campus programs in their events. Managed data of students checking in to university events, and created demographic reports for campus organizations to analyze and improve their events.</Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} md={5}>
                <Box className={classes.imageBoxRoot}>
                  <Card className={classes.cardRoot}>
                    <CardMedia className={classes.cardMedia} component="img" src="https://hollandaucoin-images.s3-us-west-1.amazonaws.com/main/Engage.jpg" alt="Engage team"/>
                  </Card>
                </Box>
              </Grid>
            </Grid>
          </Container>

          <Paper elevation={2}>
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
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                      <Typography variant="body1"><b>Discover GCU - Lead</b></Typography>
                      <Typography variant="body2" color="textSecondary">Phoenix, AZ</Typography>
                    </div>
                      <Typography variant="overline">April 2020 - Novemeber 2020</Typography>
                      <Typography variant="body1" color="textSecondary" paragraph={true} className={classes.block}>Directed a team of 100+ student workers in daily events that host prospective students for a campus visit. Acted as a manager-on-duty and delegated tasks for the given day. Handled administrative tasks and logistics of the events, such as check-in/check-out, scheduling, and shuttles.</Typography>
                      
                      <Typography variant="body1"><b>Discover GCU - Host</b></Typography>
                      <Typography variant="overline">September 2018 - April 2020</Typography>
                      <Typography variant="body1" color="textSecondary" paragraph={true} className={classes.block}>Guided prospective students (ages 17-20) in their overnight experience at GCU through creating a safe and welcoming atmosphere. Answered questions and inform students of what it is like attending GCU, helping them analyze important details in the big step of choosing a college.</Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} md={5}>
                  <Box className={classes.imageBoxRoot}>
                    <Card className={classes.cardRoot}>
                      <CardMedia className={classes.cardMedia} component="img" src="https://hollandaucoin-images.s3-us-west-1.amazonaws.com/main/Discover.jpg" alt="Dsicover"/>
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
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                      <Typography variant="body1"><b>Counselor and Leadership Educator</b></Typography>
                      <Typography variant="body2" color="textSecondary">Randle, WA</Typography>
                    </div>
                    <Typography variant="overline">July 2017 - July 2019</Typography>
                    <Typography variant="body1" color="textSecondary" paragraph={true} className={classes.block}>Served as a member on Association of Washington Student Leaders staff for one week every July, to put on summer leadership programs for high school students (ages 13-18) in leadership roles at their schools. Taught courses and gave presentations in equity and inclusion, team building, group processes and evaluation techniques, self-awareness, and servant leadership. Created a safe living and working space for youth leaders to be vulnerable and grow.</Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} md={5}>
                <Box className={classes.imageBoxRootBottom}>
                  <Card className={classes.cardRoot}>
                    <CardMedia className={classes.cardMedia} component="img" src="https://hollandaucoin-images.s3-us-west-1.amazonaws.com/main/Baker.jpg" alt="Camp"/>
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
                      <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <Typography variant="body1"><b>CHAMPS Mentor Program - Director</b></Typography>
                        <Typography variant="body2" color="textSecondary">Redlands, CA</Typography>
                      </div>
                      <Typography variant="overline">Demcember 2017 - April 2018</Typography>
                      <Typography variant="body1" color="textSecondary" paragraph={true} className={classes.block}>Planned and put on programs that built a supportive community to empower high school students (ages 14-18) to recognize their capabilities and potential for higher learning. Mentored and helped these students through challenges, developed leadership abilities, and strengthened social skills.</Typography>
                      
                      <Typography variant="body1"><b>CHAMPS Mentor Program - Mentor</b></Typography>
                      <Typography variant="overline">September 2017 - December 2017</Typography>
                      <Typography variant="body1" color="textSecondary" paragraph={true} className={classes.block}>Volunteered as a mentor to support local high school students. Through various activities, we helped the students develop communication skills, teamwork, and self-confidence. Guided them in schoolwork, extracurriculars, and the college application process.</Typography>

                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} md={5}>
                  <Box className={classes.imageBoxRoot}>
                    <Card className={classes.cardRoot}>
                      <CardMedia className={classes.cardMedia} component="img" src="https://hollandaucoin-images.s3-us-west-1.amazonaws.com/main/CHAMPS.jpg" alt="CHAMPS"/>
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