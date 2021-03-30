import React from 'react';
import { Container, Box, Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import theme from '../theme/theme';

/**
 * MyPortfolio
 * @Author Holland Aucoin
 * 
 * Education Information
 * @Summary This component displays the education information such as university name, location, and degree within the education page
 */

const useStyles = makeStyles(() => ({
  block: {
    marginBottom: theme.spacing(3),
  },
  imageBoxRoot: {
    maxWidth: 512,
    paddingBottom: theme.spacing(8),
    marginLeft: 'auto',
    marginRight: 'auto',
    [theme.breakpoints.up(960)]: {
        paddingTop: theme.spacing(12),
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

  return (

    <section>
      <Box pt={8} pb={4}>
        <Container maxWidth="md">
            <Box textAlign="left" mb={2}>
              <Typography variant="h4" component="h2" gutterBottom={true} color="secondary">Learn about what I've done.</Typography>
              <Typography variant="subtitle1" color="secondary">
                Listed below are the experiences where I have been able to learn and grow, and include positions that allowed me to serve as a leader in team environments.
              </Typography>
            </Box>
          </Container>
        {/* Section displaying all education information */}
        <Container maxWidth="md">
          <Grid container>
            <Grid item xs={12} md={12}>
              <Box className={classes.contentBox}>
                <Box mt={4}>
                  <Typography variant="h5">Grand Canyon University</Typography>
                  <hr width="150px" align="left" />
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <Typography variant="overline" >Phoenix, AZ</Typography>
                    <Typography variant="overline" >GPA: 4.0</Typography>
                  </div>
                </Box>
                <Box>
                  <Typography variant="body1"><b>Bachelor of Science in Computer Programming - </b></Typography>
                  <Typography variant="body1" color="textSecondary" paragraph={true} className={classes.block} style={{textAlign: "justify"}}>
                    This degree focuses on developing full stack applications using a variety of programming languages, web frameworks, and cloud 
                    computing platforms with the integration of database system management and administration. With a built-in emphasis on the 
                    SDLC process, technological literacy skills are gained by creating the necessary components such as comprehensive project 
                    proposals, in-depth design documentation, detailed requirement specifications, thorough testing phases, and more.
                  </Typography>
                  <Typography variant="body1" color="textSecondary" paragraph={true} className={classes.block} style={{textAlign: "justify"}}>
                    The structure of the program incorporates a significant amount of team environments that assist in the growth of teamwork 
                    abilities, organizational communication, and project management skills through the use of agile methodologies.
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </section>

  )
}