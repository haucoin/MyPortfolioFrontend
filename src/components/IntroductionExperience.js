import React, { useEffect }  from 'react';
import { Container, Box, Typography, Grid, Card, CardMedia, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import theme from '../theme/theme';
import service from '../services/ExperienceService';
import { ArrowRightAlt } from '@material-ui/icons';

/**
 * MyPortfolio
 * @Author Holland Aucoin
 * 
 * Introduction Experience
 * @Summary This component displays one of my professional experiences that is shown on the home page
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
    const [isLoading, setIsLoading] = React.useState(true);

    // Use useEffect method to call backend for each skill type and wait for response
  useEffect(() => {
    service.getExperiencesByCompany("Grand Canyon University").then(response => {
      setGCUExperiences(response.data);
    })
    setIsLoading(false);
  }, []);

    return (

    <section>
      {/* Check to see if REST call has finished before trying to render */}
      { !isLoading && (
        <Box pt={8} pb={4}>
          <div align="center" style={{paddingBottom: "25px"}}>
              <Typography variant="h5" gutterBottom={true}>Experience</Typography>
              <hr width="100px" align="center"/>
          </div>
          {/* Section displaying all experience information */}
          <Container maxWidth="md">
            <Typography variant="subtitle1" color="secondary" style={{textAlign: "justify", paddingBottom: 20}}>
              Throughout my time at Grand Canyon University I was able to obtain various student leadership positions that allowed me 
              to serve and be a part of teams that worked to improve our campus. A few of those positions are shown below.
            </Typography>
            <Grid container>
              <Grid item xs={12} md={7}>
                <Box className={classes.contentBox}>
                  <Box mt={2}>
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
                          <div key={index} >
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
              <div style={{width: "100%"}} align="center">
                <Button href="/experience" color="primary" endIcon={<ArrowRightAlt />}>Learn more</Button>
              </div>
            </Grid>
          </Container>

        </Box>
      )
      }
    </section>

    )
}