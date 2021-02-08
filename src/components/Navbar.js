import React from 'react';
import clsx from 'clsx';
import MediaQuery from 'react-responsive';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, Grid, Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ExpandLess, MenuRounded } from '@material-ui/icons';
import theme from '../theme/theme';
import logo from '../images/Logo.png';

/**
 * MyPortfolio
 * @Author Holland Aucoin
 * 
 * Navbar
 * @Summary This component displays the navbar that is present on every page to handle navigation
 */

const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: '10px',
        paddingBottom: '10px',
        color: 'black',
        backgroundColor: '#FAFAFA',
    },
    hidden: {
        paddingTop: '10px',
        paddingBottom: '10px',
        backgroundColor: '#FAFAFA',
        position: "relative", 
        boxShadow: "0px 0px 0px 0px rgb(0 0 0 / 0%), 0px 0px 0px 0px rgb(0 0 0 / 0%), 0px 0px 0px 0px rgb(0 0 0 / 0%)",
    },
    img: {
        paddingTop: '20px'
    },
    list: {
        width: 250,
      },
      fullList: {
        width: 'auto',
      },
}));

export default function App() {

    const classes = useStyles();

    // Set state for mobile device navbar menu button to be toggled
    const [state, setState] = React.useState({
        top: false,
      });
    
    // Toggle drawer
    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
    
        setState({ ...state, [anchor]: open });
    };

    // Dropdown menu for mobile devices
    const list = (anchor) => (
    <div className={clsx(classes.list, { [classes.fullList]: anchor === 'top' })} role="presentation" 
        onClick={toggleDrawer(anchor, false)} onKeyDown={toggleDrawer(anchor, false)} >
        <List style={{ paddingBottom: "0" }}>
            <Link to="/" style={{ textDecoration: 'none', color: 'grey' }}>
                <ListItem button >
                    <div align="center" style={{padding: "10px"}}>
                        <img src={logo} alt="Holland Aucoin" width="90%"/> 
                    </div>
                </ListItem>
            </Link>
            <Divider />
            <Link to="/projects" style={{ textDecoration: 'none', color: 'grey' }}>
                <ListItem button >
                    <ListItemText primary="PROJECTS" style={{ textAlign: "center" }} />
                </ListItem>
            </Link>
            <Link to="/experience" style={{ textDecoration: 'none', color: 'grey' }}>
                <ListItem button >
                    <ListItemText primary="EXPERIENCE" style={{ textAlign: "center" }} />
                </ListItem>
            </Link>
            <Link to="/education" style={{ textDecoration: 'none', color: 'grey' }}>
                <ListItem button >
                    <ListItemText primary="EDUCATION" style={{ textAlign: "center" }} />
                </ListItem>
            </Link>
            <Link to="/about" style={{ textDecoration: 'none', color: 'grey' }}>
                <ListItem button >
                    <ListItemText primary="ABOUT" style={{ textAlign: "center" }} />
                </ListItem>
            </Link>
            <Link to="/contact" style={{ textDecoration: 'none', color: 'grey' }}>
                <ListItem button >
                    <ListItemText primary="CONTACT" style={{ textAlign: "center" }} />
                </ListItem>
            </Link>
            <Divider />
            <ListItem button style={{ justifyContent: "flex-end" }}>
                <div align="right">
                    <ListItemIcon><ExpandLess /></ListItemIcon>
                </div>
            </ListItem>
        </List>
    </div>
    );
    

    return (
        <div> 
            {/* Mobile device navbar/menu */}
            <MediaQuery maxWidth={theme.breakpoints.values.otherPhone}>
                <AppBar className={classes.hidden}>
                    <Toolbar />
                </AppBar>
                <AppBar className={classes.root}>
                    <Toolbar style={{ justifyContent: "space-between" }}>
                        {/* Show logo if on any page besides the home page */}
                        { window.location.pathname !== "/" ? 
                            <Link to="/">
                                <img src={logo} alt="Holland Aucoin" width="95%" /> 
                            </Link>
                        : <div width="95%"></div> }
                        {['top'].map((anchor) => (
                            <React.Fragment key={anchor}>
                            <IconButton onClick={toggleDrawer(anchor, true)}>
                                <MenuRounded />
                            </IconButton>
                            <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                                {list(anchor)}
                            </Drawer>
                            </React.Fragment>
                        ))}
                    </Toolbar>
                </AppBar>
            </MediaQuery>
            {/* iPad and other tablet device navbar */}
            <MediaQuery minWidth={theme.breakpoints.values.otherPhone + 1} maxWidth={theme.breakpoints.values.iPadPro}>
                { window.location.pathname !== "/" ? 
                    <AppBar className={classes.hidden} style={{height: "145px"}}>
                        <Toolbar />
                    </AppBar>
                    : 
                    <AppBar className={classes.hidden}>
                        <Toolbar />
                    </AppBar>
                }
                <AppBar className={classes.root} >
                    {/* Show logo if on any page besides the home page */}
                    { window.location.pathname !== "/" ? 
                        <Link to="/" align="center">
                            <img src={logo} alt="Holland Aucoin" width="450" className={classes.img} /> 
                        </Link>
                    : null }
                    <Toolbar>
                        <Grid container direction="row" justify="space-evenly" alignItems="center">
                            <Link to="/projects" style={{ textDecoration: 'none' }}>
                                <Button style={{fontSize: "14px"}}>PROJECTS</Button>
                            </Link>
                            <Link to="/experience" style={{ textDecoration: 'none' }}>
                                <Button style={{fontSize: "14px"}}>EXPERIENCE</Button>
                            </Link>
                            <Link to="/education" style={{ textDecoration: 'none' }}>
                                <Button style={{fontSize: "14px"}}>EDUCATION</Button>
                            </Link>
                            <Link to="/about" style={{ textDecoration: 'none' }}>
                                <Button style={{fontSize: "14px"}}>ABOUT</Button>
                            </Link>
                            <Link to="/contact" style={{ textDecoration: 'none' }}>
                                <Button style={{fontSize: "14px"}}>CONTACT</Button>
                            </Link>
                        </Grid>
                    </Toolbar>
                </AppBar>
            </MediaQuery>
            {/* Devices larger than an iPad Pro navbar */}
            <MediaQuery minWidth={theme.breakpoints.values.iPadPro + 1}>
                <AppBar className={classes.hidden} >
                    <Toolbar />
                </AppBar>
                <AppBar className={classes.root} >
                    <Toolbar>
                        {/* Show logo if on any page besides the home page */}
                        { window.location.pathname !== "/" ? 
                            <Link to="/" style={{ textDecoration: 'none' }}>
                                <img src={logo} alt="Holland Aucoin" width="425"/> 
                            </Link>
                        : null }

                        <Grid container  direction="row" justify="space-evenly" alignItems="center">
                        <Link to="/projects" style={{ textDecoration: 'none' }}>
                                <Button style={{fontSize: "16px"}}>PROJECTS</Button>
                            </Link>
                            <Link to="/experience" style={{ textDecoration: 'none' }}>
                                <Button style={{fontSize: "16px"}}>EXPERIENCE</Button>
                            </Link>
                            <Link to="/education" style={{ textDecoration: 'none' }}>
                                <Button style={{fontSize: "16px"}}>EDUCATION</Button>
                            </Link>
                            <Link to="/about" style={{ textDecoration: 'none' }}>
                                <Button style={{fontSize: "16px"}}>ABOUT</Button>
                            </Link>
                            <Link to="/contact" style={{ textDecoration: 'none' }}>
                                <Button style={{fontSize: "16px"}}>CONTACT</Button>
                            </Link>
                        </Grid>
                    </Toolbar>
                </AppBar>
            </MediaQuery>
        </div>
    )
}