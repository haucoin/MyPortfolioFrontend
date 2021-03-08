import React from 'react';
import MediaQuery from 'react-responsive';
import { Link } from 'react-router-dom';
import { Container, Box, IconButton, Paper } from '@material-ui/core';
import { Mail, LinkedIn, GitHub } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import theme from '../theme/theme';

/**
 * MyPortfolio
 * @Author Holland Aucoin
 * 
 * Footer
 * @Summary This component displays the footer that is present on every page to assist with navigation and extra links
 */

const useStyles = makeStyles((theme) => ({
    footerNav: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginBottom: theme.spacing(1),
      },
      footerLink: {
        marginLeft: theme.spacing(3),
        marginRight: theme.spacing(3),
        marginBottom: theme.spacing(2),
        textDecoration: 'none',
        color: theme.palette.text.secondary
      }
}));

export default function App() {

    const classes = useStyles();

    return (
        <div>
            <footer>
                <Paper elevation={3}>
                    <Container maxWidth="lg">
                        <Box py={6} textAlign="center">
                            {/* Links shown only for devices of iPad and larger */}
                            <MediaQuery minWidth={theme.breakpoints.values.iPad}>
                                <Box component="nav" className={classes.footerNav}>
                                    <Link to="/projects" className={classes.footerLink}>PROJECTS</Link>
                                    <Link to="/experience"  className={classes.footerLink}>EXPERIENCE</Link>
                                    <Link to="/education"  className={classes.footerLink}>EDUCATION</Link>
                                    <Link to="/about"  className={classes.footerLink}>ABOUT</Link>
                                    <Link to="/contact"  className={classes.footerLink}>CONTACT</Link>
                                </Box>
                            </MediaQuery>
                            {/* Links to external sites */}
                            <Box mb={3}>
                                <IconButton aria-label="Mail" button="true" key="Email" component="a" href="mailto:holland.aucoin2@gmail.com">
                                    <Mail />
                                </IconButton>
                                <IconButton aria-label="LinkedIn" onClick={() => window.open("https://www.linkedin.com/in/hollandaucoin/", "_blank")}>
                                    <LinkedIn />
                                </IconButton>
                                <IconButton aria-label="GitHub" onClick={() => window.open("https://github.com/hollandaucoin", "_blank")}>
                                    <GitHub />
                                </IconButton>
                            </Box>
                            <img src="https://hollandaucoin-images.s3-us-west-1.amazonaws.com/main/Logo.png" alt="Holland Aucoin" width="300"/> 
                        </Box>
                    </Container>
                </Paper>
            </footer>
        </div>
    )
}