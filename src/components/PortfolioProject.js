import React, { useEffect } from 'react';
import MediaQuery from 'react-responsive';
import { Container, Box, Typography, Grid, Paper } from '@material-ui/core';
import theme from '../theme/theme';
import service from '../services/ProjectService';

/**
 * MyPortfolio
 * @Author Holland Aucoin
 * 
 * Project Details
 * @Summary This component displays the details of an individual project
 */

export default function PortfolioProject() {

  // Creating variable of project to be filled by the service call
  const [project, setProject] = React.useState();
  const [isLoading, setIsLoading] = React.useState(true);

  // Use useEffect method to call backend for the project if the given ID
  useEffect(() => {
    service.getProjectById("6042f5de5167ce01f41df519").then(response => {
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
                  <b>{project.date} - Senior Project</b>
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
                    <img style={{maxHeight: 75, maxWidth: 90}} src={image} alt="" />
                  </Box>
                ))}
              </Grid>
              {/* Technologies section - hard coded because it is not in the project model */}
              <Typography variant="body1" color="textSecondary" paragraph={true} style={{textAlign: "justify"}}>
              These were chosen with the primary purpose of being able to learn technologies that were not included in my degree program. 
              Prior to designing this project, I have never had exposure to React, Spring Boot, or MongoDB and wanted to be able to challenge 
              myself while completing my final project with widely-used technologies.
              </Typography>
              <br/>
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
            {/* Logical Solution design */}
            <Container maxWidth="md" style={{ paddingBottom: '40px' }}>
              <div align="center">
                <Typography variant="body1" color="textSecondary" paragraph={true} style={{textAlign: "justify"}}>
                  <b>Logical Solution Design</b><br/>
                  { project.designDescriptions[0] }
                </Typography>
                <a href={project.designImages[0]} target="_blank" rel="noreferrer">
                  <img style={{maxWidth: '100%', maxHeight: 500, marginTop: 20}} src={project.designImages[0]} alt="Logical Solution Design" />
                </a>
              </div>
            </Container>
            {/* Physical Solution design */}
            <Container maxWidth="md" style={{ paddingBottom: '40px' }}>
              <div align="center">
                <Typography variant="body1" color="textSecondary" paragraph={true} style={{textAlign: "justify"}}>
                  <b>Physical Solution Design</b><br/>
                  { project.designDescriptions[1] }
                </Typography>
                <a href={project.designImages[1]} target="_blank" rel="noreferrer">
                  <img style={{maxWidth: '100%', maxHeight: 500, marginTop: 20}} src={project.designImages[1]} alt="Physical Solution Design" />
                </a>
              </div>
            </Container>
            {/* Database ER diagram */}
            <Container maxWidth="md" style={{ paddingBottom: '40px' }}>
              <div align="center">
                <Typography variant="body1" color="textSecondary" paragraph={true} style={{textAlign: "justify"}}>
                  <b>Database ER Diagram</b><br/>
                  { project.designDescriptions[2] }
                </Typography>
                <a href={project.designImages[2]} target="_blank" rel="noreferrer">
                  <img style={{maxWidth: '100%', maxHeight: 500, marginTop: 20}} src={project.designImages[2]} alt="Database ER Diagram" />
                </a>
              </div>
            </Container>
            {/* Sitemap */}
            <Container maxWidth="md" style={{ paddingBottom: '40px' }}>
              <div align="center">
                <Typography variant="body1" color="textSecondary" paragraph={true} style={{textAlign: "justify"}}>
                  <b>Sitemap</b><br/>
                  { project.designDescriptions[3] }
                </Typography>
                <a href={project.designImages[3]} target="_blank" rel="noreferrer">
                  <img style={{maxWidth: '100%', maxHeight: 500, marginTop: 20}} src={project.designImages[3]} alt="Sitemap" />
                </a>
              </div>
            </Container>
            {/* UML class diagrams */}
            <Container maxWidth="md" style={{ paddingBottom: '40px' }}>
              <div align="center">
                <Typography variant="body1" color="textSecondary" paragraph={true} style={{textAlign: "justify"}}>
                  <b>UML Class Diagrams</b><br/>
                  { project.designDescriptions[4] }
                </Typography>
                <a href={project.designImages[4]} target="_blank" rel="noreferrer">
                  <img style={{maxWidth: '100%', maxHeight: 500, marginTop: 20}} src={project.designImages[4]} alt="SpringBoot UML Class Diagram" />
                </a>
                <br/><br/>
                <Typography variant="body1" color="textSecondary" paragraph={true} style={{textAlign: "justify"}}>
                  { project.designDescriptions[5] }
                </Typography>
                <a href={project.designImages[5]} target="_blank" rel="noreferrer">
                  <img style={{maxWidth: '100%', maxHeight: 500, marginTop: 20}} src={project.designImages[5]} alt="React UML Class Diagram" />
                </a>
              </div>
            </Container>
            {/* UML sequence diagram */}
            <Container maxWidth="md" style={{ paddingBottom: '40px' }}>
              <div align="center">
                <Typography variant="body1" color="textSecondary" paragraph={true} style={{textAlign: "justify"}}>
                  <b>UML Sequence Diagram</b><br/>
                  { project.designDescriptions[6] }
                </Typography>
                <a href={project.designImages[6]} target="_blank" rel="noreferrer">
                  <img style={{maxWidth: '100%', maxHeight: 500, marginTop: 20}} src={project.designImages[6]} alt="UML Sequence Diagram" />
                </a>
              </div>
            </Container>
            {/* UML deployment diagram */}
            <Container maxWidth="md" style={{ paddingBottom: '40px' }}>
              <div align="center">
                <Typography variant="body1" color="textSecondary" paragraph={true} style={{textAlign: "justify"}}>
                  <b>UML Deployment Diagram</b><br/>
                  { project.designDescriptions[7] }
                </Typography>
                <a href={project.designImages[7]} target="_blank" rel="noreferrer">
                  <img style={{maxWidth: '100%', maxHeight: 500, marginTop: 20}} src={project.designImages[7]} alt="UML Deployment Diagram" />
                </a>
              </div>
            </Container>
            {/* REST API design - hard coded because of inline link */}
            <Container maxWidth="md" style={{ paddingBottom: '40px' }}>
              <div align="center">
                <Typography variant="body1" color="textSecondary" paragraph={true} style={{textAlign: "justify"}}>
                  <b>REST API Design</b><br/>
                  The documentation of the SpringBoot REST API that is used in this application for sending HTTPS requests between 
                  the frontend and backend of the application can be found 
                  <a target="_blank" href="https://documenter.getpostman.com/view/9397937/TVmJgy42" rel="noreferrer" style={{paddingRight: 6, paddingLeft: 6}}>here.</a>
                  It outlines the types of requests, access URLs, input 
                  parameters, output JSON, output variable descriptions, and the status codes for both success and failure.
                </Typography>
              </div>
            </Container>
            {/* Risks */}
            <Container maxWidth="md" style={{ paddingBottom: '40px' }}>
              <div align="center">
                <Typography variant="body1" color="textSecondary" paragraph={true} style={{textAlign: "justify"}}>
                  <b>Risks</b><br/>
                  { project.designDescriptions[8] }
                </Typography>
              </div>
            </Container>
          </Paper>

          {/* Create the final product section */}
          <Container maxWidth="md" >
            <div align="center">
                <Typography variant="h5" gutterBottom={true} style={{paddingTop: "40px", paddingBottom: "20px"}} >Final Product</Typography>
                {/* Best Practices */}
                <Typography variant="body1" color="textSecondary" paragraph={true} style={{textAlign: "justify"}}>
                  <b>Best Practices</b><br/>
                  { project.designDescriptions[9] }
                </Typography>
                <br/>
                {/* DevOps */}
                <Typography variant="body1" color="textSecondary" paragraph={true} style={{textAlign: "justify"}}>
                  <b>DevOps</b><br/>
                  { project.designDescriptions[10] }
                </Typography>
                <br/>
                {/* Challenges */}
                <Typography variant="body1" color="textSecondary" paragraph={true} style={{textAlign: "justify"}}>
                  <b>Challenges</b><br/>
                  { project.designDescriptions[11] }
                </Typography>
                <br/>
                {/* Application */}
                <Typography variant="body1" color="textSecondary" paragraph={true} style={{textAlign: "justify"}}>
                  <b>Application</b><br/>
                  { project.finalDescription }
                </Typography>
                {project.gitHub !== "" && project.gitHub !== null ? 
                  <div align="center" style={{paddingBottom: 20, maxWidth: "md"}}>
                    <Typography variant="body1" color="textSecondary" paragraph={true} style={{textAlign: "justify"}}>
                      To see the full details of this project, including a comprehensive Project Proposal, Requirements Specification, and 
                      Design Documentation, please visit my <a target="_blank" href={project.gitHub} rel="noreferrer">Google Drive.</a>
                    </Typography>
                  </div>
                  :
                  <br/>
                }
            </div>
            <br/>
          </Container>
        </div>
        )
      }
    </section>
  )
}