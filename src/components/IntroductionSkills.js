import React, { useEffect } from 'react';
import { Container, Box, Typography, Grid, Button } from '@material-ui/core';
import { Code, Timeline, Web, Laptop, Layers, ViewColumn, ArrowRightAlt } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import theme from '../theme/theme';
import service from '../services/SkillService';

/**
 * MyPortfolio
 * @Author Holland Aucoin
 * 
 * Introduction Skills
 * @Summary This component displays an introduction to the skills gained that is shown on the home page
 */

const useStyles = makeStyles(() => ({
  icon: {
    marginBottom: theme.spacing(1),
  }
}));

export default function IntroductionSkills() {

  // Creating variables of skill lists to be filled be appropriate service call
  const [languageSkills, setLanguages] = React.useState([]);
  const [IDESkills, setIDEs] = React.useState([]);
  const [SDSkills, setSD] = React.useState([]);
  const [frameworkSkills, setFrameworks] = React.useState([]);
  const [DPSkills, setDP] = React.useState([]);
  const [agileSkills, setAgile] = React.useState([]);

  // Use useEffect method to call backend for each skill type and wait for response
  useEffect(() => {
    service.getSkillsByType("Languages").then(response => {
      setLanguages(response.data);
    })
    service.getSkillsByType("IDE").then(response => {
      setIDEs(response.data);
    })
    service.getSkillsByType("Software Design").then(response => {
      setSD(response.data);
    })
    service.getSkillsByType("Web Frameworks").then(response => {
      setFrameworks(response.data);
    })
    service.getSkillsByType("Design Patterns").then(response => {
      setDP(response.data);
    })
    service.getSkillsByType("Agile Scrum").then(response => {
      setAgile(response.data);
    })
  }, []);

  // Iterate through an array of technologies and turn it into string
  function arrayToString(skillsArray) {
    let string = "";

    skillsArray.map((skill, index) => (
      string += skill.name + (index < skillsArray.length - 1 ? ' •\u00A0' : ' ')
    ))

    return string;
  }

  // Set strings for each type of skill by calling method
  let languages = arrayToString(languageSkills);
  let IDEs = arrayToString(IDESkills);
  let SDs = arrayToString(SDSkills);
  let frameworks = arrayToString(frameworkSkills);
  let DPs = arrayToString(DPSkills);
  let agiles = arrayToString(agileSkills);

  const classes = useStyles();

  // Create arrays for the strings of skills, titles, and icons to iterate over and show in boxes
  let skills = [languages, frameworks, IDEs, SDs, agiles, DPs];
  let titles = ["Languages", "Web Frameworks", "IDEs", "Software Design", "Agile Scrum", "Design Patterns"];
  let icons = [
    <Code fontSize="large" className={classes.icon} />,
    <Web fontSize="large" className={classes.icon} />,
    <Laptop fontSize="large" className={classes.icon} />,
    <ViewColumn fontSize="large" className={classes.icon} />,
    <Timeline fontSize="large" className={classes.icon} />,
    <Layers fontSize="large" className={classes.icon} />,
  ]

  return (

      <section>
        <Container maxWidth="md" >
          <Box pt={8} pb={4}>
            {/* Title and introduction section */}
            <div align="center" style={{paddingBottom: "25px"}}>
              <Typography variant="h5" gutterBottom={true}>Skills & Expertise</Typography>
              <hr width="100px" align="center"/>
            </div>
            <Typography variant="subtitle1" color="textSecondary" style={{textAlign: "justify", paddingBottom: 20}}>
              During my degree program I was able to aquire hands-on experience within various aspects of software development that 
              allowed me to accumulate a wide variety of technical knowledge and skills, some of which are shown below.
            </Typography>
            <Grid container spacing={4} style={{ justifyContent: "center" }}>
              {/* Iterate through the skills using map, and use index variable to display each icon and title */}
              {skills.map((skill, id) => (
                  <Grid key={id} item xs={12} sm={6} md={4} style={{textAlign: "center"}}>
                    {icons[id]}
                    <Typography variant="h6" component="h3" gutterBottom={true}>{titles[id]}</Typography>
                    <Typography variant="body1" component="p">{skill}</Typography>
                  </Grid>
                ))
              }
            </Grid>
          </Box>
          {/* Button to go to the education page */}
          <Box mb={8} textAlign="center">
            <Button href="/education" color="primary" endIcon={<ArrowRightAlt />}>See more</Button>
          </Box>
        </Container>
      </section>
  )
}