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
  }
}));

export default function EducationInformation() {

  const classes = useStyles();

  return (

    <section>
      <Box pt={8} pb={4}>
        {/* Section displaying education title and intro */}
        <Container maxWidth="md">
          <Box textAlign="left" mb={2}>
            <Typography variant="h4" component="h2" gutterBottom={true}>View my technical background.</Typography>
            <Typography variant="subtitle1" color="textSecondary">
              Below shows the knowledge and skills I have gained over the years of becoming a software developer, as well as the 
              courses I have completed at Grand Canyon University with their primmary focus and any technologies used.
            </Typography>
          </Box>
        </Container>
        {/* Section displaying all education information */}
        <Container maxWidth="md">
          <Grid container>
            <Grid item xs={12} md={12}>
              <Box>
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