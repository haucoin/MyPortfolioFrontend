import React, { useEffect } from 'react';
import { AppBar, Tabs, Tab, Typography, Box, Container, Grid, Card, CardActionArea, CardMedia, CardHeader } from '@material-ui/core';
import service from '../services/ProjectService';
import theme from '../theme/theme';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';

/**
 * MyPortfolio
 * @Author Holland Aucoin
 * 
 * Projects Tabular
 * @Summary This component displays the tabular view of all projects that is shown on the projects page
 */

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper,
    },
    tabs: {
        minWidth: 50,
        ['@media (min-width:600px)']: { // eslint-disable-line no-useless-computed-key
            minWidth: 50
        }
    },
}));

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}


export default function App() {

    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    // Creating variable of project list to be filled be appropriate service call
    const [projects, setProjects] = React.useState([]);

    // Use useEffect method to call backend to get the projects and wait for response
    useEffect(() => {
        service.getProjects().then(response => {
            setProjects(response.data);
        })
    }, []);

    // Iterate through an array of projects and turn it into its own array based on technology
    function getProjectOfLanguage(language) {
        let projectsByLanguage = [];

        projects.map((project, index) => (
            
            project.languages.includes(language) ? projectsByLanguage[index] = project : null
        ))

        return projectsByLanguage;
    }

    // Set array of projects based on language by calling method
    let javaProjects = getProjectOfLanguage("Java");
    let cProjects = getProjectOfLanguage("C#");
    let phpProjects = getProjectOfLanguage("PHP");
    let javascriptProjects = getProjectOfLanguage("JavaScript");

    return (

        <section>
            <Box pt={8} pb={6}>
                <Container maxWidth="md">
                    <Box textAlign="left" mb={5}>
                        <Typography variant="h4" component="h2" gutterBottom={true}>See my work.</Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            Below is a display of the projects that I have completed during my time at Grand Canyon University, and each contain a detailed description when selected.
                        </Typography>
                    </Box>
                </Container>
                <Container maxWidth="md">
                    <AppBar position="static" color="default">
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            indicatorColor="primary"
                            textColor="primary"
                            variant="fullWidth"
                            aria-label="full width tabs example"
                        >
                            <Tab label="All" {...a11yProps(0)} className={classes.tabs} />
                            <Tab label="Java" {...a11yProps(1)} className={classes.tabs} />
                            <Tab label="C#" {...a11yProps(2)} className={classes.tabs} />
                            <Tab label="PHP" {...a11yProps(3)} className={classes.tabs} />
                            <Tab label="JS" {...a11yProps(4)} className={classes.tabs} />
                        </Tabs>
                    </AppBar>
                    <SwipeableViews
                        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                        index={value}
                        onChangeIndex={handleChangeIndex}
                    >
                        <TabPanel value={value} index={0} dir={theme.direction}>
                            <Box textAlign="center">
                                <Grid container spacing={3}>

                                    {projects.map((project, id) => (
                                        <Grid item xs={12} sm={6} md={4} key={id}>
                                            <Card>
                                            <Link to={{ pathname: '/project', state: { projectId: project._id } }} style={{ textDecoration: 'none', color: 'black' }}>
                                                <CardActionArea>
                                                    <CardMedia component="img" className={classes.media} image={project.coverImage} />
                                                    <CardHeader style={{height: 40}} subheader={project.name} sub titleTypographyProps={{ gutterBottom: false }} />
                                                </CardActionArea>
                                            </Link>
                                            </Card>
                                        </Grid>
                                    ))
                                    }

                                </Grid>
                            </Box>
                        </TabPanel>
                        <TabPanel value={value} index={1} dir={theme.direction}>
                            <Box textAlign="center">
                                <Grid container spacing={3}>

                                    {javaProjects.map((project, id) => (
                                        <Grid item xs={12} sm={6} md={4}>
                                            <Card>
                                                <CardActionArea href="#">
                                                    <CardMedia component="img" className={classes.media} image={project.coverImage} />
                                                    <CardHeader subheader={project.name} sub titleTypographyProps={{ gutterBottom: false }} />
                                                </CardActionArea>
                                            </Card>
                                        </Grid>
                                    ))
                                    }

                                </Grid>
                            </Box>
                        </TabPanel>
                        <TabPanel value={value} index={2} dir={theme.direction}>
                            <Box textAlign="center">
                                <Grid container spacing={3}>

                                    {cProjects.map((project, id) => (
                                        <Grid item xs={12} sm={6} md={4}>
                                            <Card>
                                                <CardActionArea href="#">
                                                    <CardMedia component="img" className={classes.media} image={project.coverImage} />
                                                    <CardHeader subheader={project.name} sub titleTypographyProps={{ gutterBottom: false }} />
                                                </CardActionArea>
                                            </Card>
                                        </Grid>
                                    ))
                                    }

                                </Grid>
                            </Box>
                        </TabPanel>
                        <TabPanel value={value} index={3} dir={theme.direction}>
                            <Box textAlign="center">
                                <Grid container spacing={3}>

                                    {phpProjects.map((project, id) => (
                                        <Grid item xs={12} sm={6} md={4}>
                                            <Card>
                                                <CardActionArea href="#">
                                                    <CardMedia component="img" className={classes.media} image={project.coverImage} />
                                                    <CardHeader subheader={project.name} sub titleTypographyProps={{ gutterBottom: false }} />
                                                </CardActionArea>
                                            </Card>
                                        </Grid>
                                    ))
                                    }

                                </Grid>
                            </Box>
                        </TabPanel>
                        <TabPanel value={value} index={4} dir={theme.direction}>
                            <Box textAlign="center">
                                <Grid container spacing={3}>

                                    {javascriptProjects.map((project, id) => (
                                        <Grid item xs={12} sm={6} md={4}>
                                            <Card>
                                                <CardActionArea href="#">
                                                    <CardMedia component="img" className={classes.media} image={project.coverImage} />
                                                    <CardHeader subheader={project.name} sub titleTypographyProps={{ gutterBottom: false }} />
                                                </CardActionArea>
                                            </Card>
                                        </Grid>
                                    ))
                                    }

                                </Grid>
                            </Box>
                        </TabPanel>
                    </SwipeableViews>
                </Container>
            </Box>
        </section>

    )
}