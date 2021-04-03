import React, { useEffect } from 'react';
import { Container, Box, Typography, Grid, Paper } from '@material-ui/core';
import { Code, Laptop, Build, Timeline, Web, ViewColumn, Dns, Cloud, Storage, Layers } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import theme from '../theme/theme';
import service from '../services/SkillService';

/**
 * MyPortfolio
 * @Author Holland Aucoin
 * 
 * Education Skills
 * @Summary This component displays skills gained within the education page
 */

const useStyles = makeStyles(() => ({
  icon: {
    marginBottom: theme.spacing(1),
  }
}));

export default function EducationSkills() {

  // Creating variables of skill lists to be filled be appropriate service call
  const [languageSkills, setLanguages] = React.useState([]);
  const [IDESkills, setIDEs] = React.useState([]);
  const [toolSkills, setTools] = React.useState([]);
  const [SDSkills, setSD] = React.useState([]);
  const [frameworkSkills, setFrameworks] = React.useState([]);
  const [DPSkills, setDP] = React.useState([]);
  const [agileSkills, setAgile] = React.useState([]);
  const [serverSkills, setServers] = React.useState([]);
  const [cloudSkills, setClouds] = React.useState([]);
  const [databaseSkills, setDatabases] = React.useState([]);

  // Use useEffect method to call backend for each skill type and wait for response
  useEffect(() => {
    service.getSkillsByType("Languages").then(response => {
      setLanguages(response.data);
    })
    service.getSkillsByType("IDE").then(response => {
      setIDEs(response.data);
    })
    service.getSkillsByType("Tools").then(response => {
      setTools(response.data);
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
    service.getSkillsByType("Application Servers").then(response => {
      setServers(response.data);
    })
    service.getSkillsByType("Cloud Services").then(response => {
      setClouds(response.data);
    })
    service.getSkillsByType("Databases").then(response => {
      setDatabases(response.data);
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
  let tools = arrayToString(toolSkills);
  let SDs = arrayToString(SDSkills);
  let frameworks = arrayToString(frameworkSkills);
  let DPs = arrayToString(DPSkills);
  let agiles = arrayToString(agileSkills);
  let servers = arrayToString(serverSkills);
  let clouds = arrayToString(cloudSkills);
  let databases = arrayToString(databaseSkills);

  const classes = useStyles();

  // Create arrays for the strings of skills, titles, and icons to iterate over and show in boxes
  let skills = [languages, frameworks, servers, IDEs, tools, DPs, SDs, agiles, clouds, databases];
  let titles = ["Languages", "Web Frameworks", "Application Servers", "IDEs", "Tools", "Design Patterns", "Software Design", "Agile Scrum", "Cloud Services", "Databases"];
  let icons = [
    <Code fontSize="large" className={classes.icon} />,
    <Web fontSize="large" className={classes.icon} />,
    <Dns fontSize="large" className={classes.icon} />,
    <Laptop fontSize="large" className={classes.icon} />,
    <Build fontSize="large" className={classes.icon} />,
    <Layers fontSize="large" className={classes.icon} />,
    <ViewColumn fontSize="large" className={classes.icon} />,
    <Timeline fontSize="large" className={classes.icon} />,
    <Cloud fontSize="large" className={classes.icon} />,
    <Storage fontSize="large" className={classes.icon} />,
  ]

  return (

      <section>
        <Paper elevation={3}>
          <Container maxWidth="md" >
            <Box py={6}>
              <div align="center" style={{paddingBottom: "25px"}}>
                <Typography variant="h5" gutterBottom={true}>Skills & Expertise</Typography>
                <hr width="100px" align="center"/>
              </div>
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
          </Container>
        </Paper>
      </section>
  )
}