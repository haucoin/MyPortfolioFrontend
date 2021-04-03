import React, { useEffect } from 'react';
import MediaQuery from 'react-responsive';
import { Link } from 'react-router-dom';
import { Typography, Box, Container, Grid, Card, CardActionArea, CardMedia, CardHeader, Paper, Button } from '@material-ui/core';
import Carousel from 'react-material-ui-carousel'
import { ArrowRightAlt } from '@material-ui/icons';
import theme from '../theme/theme';
import service from '../services/ProjectService';

/**
 * MyPortfolio
 * @Author Holland Aucoin
 * 
 * Introduction Projects
 * @Summary This component displays the introduction to projects that is shown on the home page
 */

export default function IntroductionProjects() {

  // Creating variable of project list to be filled be appropriate service call
  const [projects, setProjects] = React.useState([]);

  // Use useEffect method to call backend to get the projects and wait for response
  useEffect(() => {
    service.getProjects().then(response => {
      setProjects(response.data);
    })
  }, []);

  // Define variables
  let number = -1;
  let project;
  let panels = projects.slice(0, projects.length/2);

  return (

    <section>
      <Paper elevation={3}>
        <Box pt={6} pb={4}>
          <div align="center" style={{paddingBottom: "25px"}}>
            <Typography variant="h5" gutterBottom={true}>Projects</Typography>
            <hr width="100px" align="center"/>
          </div>
          <Container maxWidth="md">
            <Box textAlign="center">
              {/* Introduction */}
              <Typography variant="subtitle1" color="textSecondary" style={{textAlign: "justify", paddingBottom: 20}}>
                I have developed many applications using various languages, frameworks, and tools through the Computer Programming degree 
                which are shown below. Each can be selected to see details on the process as well as final product.
              </Typography>
              <Grid container spacing={3}>
                {/* Section for devices smaller than an iPad */}
                <MediaQuery maxWidth={theme.breakpoints.values.iPad}>
                  <Carousel autoPlay={false} swipe={true} animation="slide">
                    {/* Iterate through the projects */}
                    { projects.map((project, index) => 
                      <Grid item key={index} style={{padding: 20}}>
                        <Card>
                          {/* Check if the project is the portfolio, if so change the link to portfolio */}
                          {project._id === "6042f5de5167ce01f41df519" ? 
                            <Link to={{ pathname: '/portfolio', state: { projectId: project._id } }} style={{ textDecoration: 'none', color: 'black' }}>
                              <CardActionArea>
                                <CardMedia component="img" image={project.coverImage} />
                                <CardHeader style={{height: 40}} subheader={project.name} sub titleTypographyProps={{ gutterBottom: false }} />
                              </CardActionArea>
                            </Link>
                          :
                            <Link to={{ pathname: '/project', state: { projectId: project._id } }} style={{ textDecoration: 'none', color: 'black' }}>
                              <CardActionArea>
                                <CardMedia component="img" image={project.coverImage} />
                                <CardHeader style={{height: 40}} subheader={project.name} sub titleTypographyProps={{ gutterBottom: false }} />
                              </CardActionArea>
                            </Link>
                          }
                        </Card>
                      </Grid>
                    )}
                  </Carousel>
                </MediaQuery>
                {/* Section for devices larger than an iPad */}
                <MediaQuery minWidth={theme.breakpoints.values.iPad + 1}>
                  <Carousel autoPlay={false} swipe={true} animation="slide">
                    {/* Iterate through the projects */}
                    { panels.map((num, index) => 
                      <Box style={{display: "flex"}} key={index}>
                        {/* Used to itertate through 2 projects at a time using number variable */}
                        {(() => {
                          if(number + 1 < projects.length)
                            number = number + 1;
                          project = projects[number];
                        })()}
                        <Grid item sm={6} md={6} key="grid1 + {index}" style={{padding: 20}}>
                          <Card>
                            {/* Check if the project is the portfolio, if so change the link to portfolio */}
                            {project._id === "6042f5de5167ce01f41df519" ? 
                              <Link to={{ pathname: '/portfolio', state: { projectId: project._id } }} style={{ textDecoration: 'none', color: 'black' }}>
                                <CardActionArea>
                                  <CardMedia component="img" image={project.coverImage} />
                                  <CardHeader style={{height: 40}} subheader={project.name} titleTypographyProps={{ gutterBottom: false }} />
                                </CardActionArea>
                              </Link>
                            :
                              <Link to={{ pathname: '/project', state: { projectId: project._id } }} style={{ textDecoration: 'none', color: 'black' }}>
                                <CardActionArea>
                                  <CardMedia component="img" image={project.coverImage} />
                                  <CardHeader style={{height: 40}} subheader={project.name} titleTypographyProps={{ gutterBottom: false }} />
                                </CardActionArea>
                              </Link>
                            }
                            </Card>
                        </Grid>
                        {/* Used to itertate through 2 projects at a time using number variable */}
                        {(() => { 
                          if(number + 1 < projects.length)
                            number = number + 1;
                          project = projects[number] 
                        })()}
                        <Grid item sm={6} md={6} key="grid2 + {index}" style={{padding: 20}}>
                          <Card>
                            {/* Check if the project is the portfolio, if so change the link to portfolio */}
                            {project._id === "6042f5de5167ce01f41df519" ? 
                              <Link to={{ pathname: '/portfolio', state: { projectId: project._id } }} style={{ textDecoration: 'none', color: 'black' }}>
                                <CardActionArea>
                                  <CardMedia component="img" image={project.coverImage} />
                                  <CardHeader style={{height: 40}} subheader={project.name} titleTypographyProps={{ gutterBottom: false }} />
                                </CardActionArea>
                              </Link>
                            :
                              <Link to={{ pathname: '/project', state: { projectId: project._id } }} style={{ textDecoration: 'none', color: 'black' }}>
                                <CardActionArea>
                                  <CardMedia component="img" image={project.coverImage} />
                                  <CardHeader style={{height: 40}} subheader={project.name} titleTypographyProps={{ gutterBottom: false }} />
                                </CardActionArea>
                              </Link>
                            }
                          </Card>
                        </Grid>
                      </Box>
                    )}
                  </Carousel>
                </MediaQuery>

              </Grid>
            </Box>
          </Container>
        </Box>
        {/* Button to go to the projects page */}
        <Box pb={6} textAlign="center">
          <Button href="/projects" color="primary" endIcon={<ArrowRightAlt />}>View my work</Button>
        </Box>
      </Paper>
    </section>
  )
}