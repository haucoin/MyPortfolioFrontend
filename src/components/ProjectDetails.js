import React, { useEffect } from 'react';
import MediaQuery from 'react-responsive';
import { Container, Box, Typography, Grid, Paper } from '@material-ui/core';
import service from '../services/ProjectService';
import theme from '../theme/theme';
import { useLocation } from 'react-router-dom';
import Carousel from 'react-material-ui-carousel'


/**
 * MyPortfolio
 * @Author Holland Aucoin
 * 
 * Project Details
 * @Summary This component displays the details of an individual project
 */

export default function App(props) {

  // Creating variable of project to be filled by the service call
  const [project, setProject] = React.useState();
  const [isLoading, setIsLoading] = React.useState(true);

  // Used to get the passed in projectId state variable
  let location = useLocation();

  // Use useEffect method to call backend for the project if the given ID
  useEffect(() => {
    service.getProjectById(location.state.projectId).then(response => {
      setProject(response.data);
      setIsLoading(false);
    });
  }, []);

  let image = "";

  return (

      <section>
        {/* Check to see if REST call has finished before trying to render */}
        { !isLoading && (
          <div>
            <Container maxWidth="md" >
              <Box py={6}>
                <div align="center" style={{paddingBottom: "25px", maxWidth: "md"}}>
                  {/* Image sizing for phones */}
                  <MediaQuery maxWidth={theme.breakpoints.values.otherPhone}>
                    <img src={project.logo} style={{width: "95%"}} alt="Logo" />
                  </MediaQuery>
                  {/* Image sizing for devices larger than a phone to an iPad */}
                  <MediaQuery minWidth={theme.breakpoints.values.otherPhone + 1} maxWidth={theme.breakpoints.values.iPad}>
                    <img src={project.logo} style={{maxWidth: 600, maxHeight: 70}} alt="Logo" />
                  </MediaQuery>
                  {/* Image sizing for devices larger than an iPad */}
                  <MediaQuery minWidth={theme.breakpoints.values.iPad + 1}>
                    <img src={project.logo} style={{maxWidth: 600, maxHeight: 70}} alt="Logo" />
                  </MediaQuery>
                </div>
                {/* Show the date and introduction */}
                <div align="center">
                  <Typography variant="body1" color="textSecondary" paragraph={true}>
                    <b>{project.date}</b>
                  </Typography>
                </div>
                <Typography variant="body1" color="textSecondary" paragraph={true} style={{textAlign: "justify"}}>
                  {project.introduction}
                </Typography>


                <Grid container style={{ justifyContent: "center" }}>
                  {/* Iterate through the project technologies using map */}
                  {(project.technologies).map((tech, index) => (
                    // Set the image string using the current technology string
                    image = "https://hollandaucoin-images.s3-us-west-1.amazonaws.com/technologies/".concat(tech),
                    <Box key={index} xs={6} sm={3} md={1} style={{ paddingLeft: "25px", paddingRight: "25px", paddingTop: "15px", paddingBottom: "25px", alignSelf: "center"}}>
                      <img style={{maxHeight: 80, maxWidth: 110}} src={image} alt="" />
                    </Box>
                  ))}
                </Grid>

                {/* Display the objective */}
                <Typography variant="body1" color="textSecondary" paragraph={true} style={{textAlign: "justify"}}>
                  {project.objective}
                </Typography>
                <ol>
                  {/* Iterate throught the project requirements and display in a list */}
                  {(project.requirements).map((requirement, index) => (
                        <Typography key={index} variant="body1" color="textSecondary" >
                          <li>
                              {requirement}
                          </li>
                        </Typography>
                      ))}
                </ol>
              </Box>
            </Container>

            {/* Create the design section */}
            <Paper>
              <Container maxWidth="md" >
                  <div align="center" >
                    <Typography variant="h5" gutterBottom={true} style={{paddingTop: "40px", paddingBottom: "20px"}} >Design</Typography>
                    <Typography variant="body1" color="textSecondary" paragraph={true} style={{textAlign: "justify"}}>
                    { project.design }
                    </Typography>
                  </div>
                </Container>
              <Container maxWidth="md" style={{ paddingBottom: '30px' }}>
                <Carousel autoPlay={false} swipe={true} animation="slide">

                  {/* Iterate through the design descriptions */}
                  { project.designDescriptions.map( (description, index) => 
                      <div align="center" key={index}>
                        <Typography variant="body1" color="textSecondary" paragraph={true} style={{textAlign: "justify"}}>
                          {description}
                        </Typography>
                        {/* Display the appropriate design image using the index */}
                        <img style={{maxWidth: '100%', maxHeight: 500}} src={project.designImages[index]} alt={index} />
                      </div>
                    )
                  }
                </Carousel>
              </Container>
            </Paper>

            {/* Create the final product section */}
            <Container maxWidth="md" >
              <div align="center">
                  <Typography variant="h5" gutterBottom={true} style={{paddingTop: "40px", paddingBottom: "20px"}} >Final Product</Typography>
                  <Typography variant="body1" color="textSecondary" paragraph={true} style={{textAlign: "justify"}}>
                  { project.finalDescription }
                  </Typography>
              </div>
            </Container>

            <Container maxWidth="md" style={{ paddingBottom: '30px' }}>
              <Carousel autoPlay={false} swipe={true} animation="slide">
                {/* Iterate through the final product images */}
                { Object.keys(project.finalImages).sort().map( (key, index) => 
                    
                    <div align="center" key={index}>
                      <Typography variant="body1" color="textSecondary" paragraph={true} style={{textAlign: "justify"}}>
                        <b>{key.substr(3, key.length)}</b>
                      </Typography>
                      {/* Display the appropriate design image using the key */}
                      <img style={{maxWidth: '100%', maxHeight: 500}} src={project.finalImages[key]} alt={key} />
                    </div>
                  )
                }
              </Carousel>
            </Container>

            <div align="center" style={{padding: 20, maxWidth: "md"}}>
              <Typography variant="body1" color="textSecondary" paragraph={true} >
                To view more details about this project, please visit my <a target="_blank" href={project.gitHub} rel="noreferrer">GitHub.</a>
              </Typography>
            </div>

          </div>
          )
        }
      </section>
  )
}