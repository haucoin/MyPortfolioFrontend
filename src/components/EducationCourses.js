import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Accordion, Container, Typography, AccordionDetails, AccordionSummary } from '@material-ui/core';
import service from '../services/CourseService';
import theme from '../theme/theme';
import { makeStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

/**
 * MyPortfolio
 * @Author Holland Aucoin
 * 
 * Contact Form
 * @Summary This component displays the contact form that is shown on the contact page
 */

const useStyles = makeStyles(() => ({
  heading: {
    fontSize: theme.typography.pxToRem(16),
    flexBasis: '100%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

export default function App() {

  // Creating variables of accordion expansion and course information
  const [expanded, setExpanded] = React.useState(false);
  const [courses, setCourses] = React.useState([]);

  // Change expanded state when pressed
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  // Use useEffect method to call backend for course information and wait for response
  useEffect(() => {
      service.getCourses().then(response => {
        setCourses(response.data);
      })
  }, []);

  // Split the list of courses in half to create 2 accordions (sided by side)
  let firstCourses = courses.slice(0, courses.length/2);
  let secondCourses = courses.slice(courses.length/2, courses.length);

  const classes = useStyles();

  return (

    <section>
    <div align="center" style={{paddingTop: "35px"}}>
      <Typography variant="h5" gutterBottom={true}>Courses</Typography>
      <hr width="50px" align="center"/>
    </div>
    <Container maxWidth="md" style={{paddingBottom: "30px", paddingTop: "20px", display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap',}}>
        {/* First half of courses */}
        <Grid item xs={12} sm={6} >
          {/* Iterate through each course to make accordions */}
          {firstCourses.map(course => (
            <Accordion key={course._id} expanded={expanded === 'panel' + course._id} onChange={handleChange('panel' + course._id)}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={"panelbh-content" + course._id} id={"panelbh-header" + course._id} >
                <Typography className={classes.heading}>{course.name}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1" color="textSecondary">{course.description}</Typography>
              </AccordionDetails>
                  {/* Adjust technologies array into a string with spaces and commas if the course contains technologies */}
                  {(() => {
                    if (course.technology.length !== 0) {
                      let technologies = "";

                      course.technology.map((tech, index) => (
                        technologies += tech + (index < course.technology.length - 1 ? ',\u00A0 ' : ' ')
                      ))

                      return (
                        <AccordionDetails>
                          <Typography key={course} variant="body2" color="textSecondary"><b>Technologies Used:</b> {technologies}</Typography>
                        </AccordionDetails>
                      )
                    }
                  })()}
                  {/* Add button to view the associated project if the course contains a project */}
                {(() => {
                  if (course.projectId != null && course.projectId !== "") {
                    return (
                    <AccordionDetails key={course._id} style={{ justifyContent: "flex-end" }}>
                      <Link to="/" style={{ textDecoration: 'none', paddingRight: "25px" }}>View Project</Link>
                    </AccordionDetails>
                    )
                  }
                })()}
            </Accordion>
          ))} 
        </Grid>
        {/* Second hald of courses */}
        <Grid item xs={12} sm={6}>
          {/* Iterate through each course to make accordions */}
          {secondCourses.map(course => (
            <Accordion key={course._id} expanded={expanded === 'panel' + course._id} onChange={handleChange('panel' + course._id)}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={"panelbh-content" + course._id} id={"panelbh-header" + course._id} >
                <Typography className={classes.heading}>{course.name}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1" color="textSecondary">{course.description}</Typography>
              </AccordionDetails>
                  {/* Adjust technologies array into a string with spaces and commas if the course contains technologies */}
                  {(() => {
                    if (course.technology.length !== 0) {
                      let technologies = "";

                      course.technology.map((tech, index) => (
                        technologies += tech + (index < course.technology.length - 1 ? ',\u00A0 ' : ' ')
                      ))

                      return (
                        <AccordionDetails>
                          <Typography key={course} variant="body2" color="textSecondary"><b>Technologies Used:</b> {technologies}</Typography>
                        </AccordionDetails>
                      )
                    }
                  })()}
                {/* Add button to view the associated project if the course contains a project */}
                {(() => {
                  if (course.projectId != null && course.projectId !== "") {
                    return (
                    <AccordionDetails key={course._id} style={{ justifyContent: "flex-end" }}>
                      <Link to="/" style={{ textDecoration: 'none', paddingRight: "25px" }}>View Project</Link>
                    </AccordionDetails>
                    )
                  }
                })()}
            </Accordion>
          ))}
        </Grid>
      </Container>
    </section>

  )
}