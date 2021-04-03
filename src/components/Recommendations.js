import React, { useEffect } from 'react';
import MediaQuery from 'react-responsive';
import { Grid, Container, Typography, Box, Avatar, Paper, IconButton, Dialog, DialogTitle, DialogContent, DialogContentText, Button } from '@material-ui/core';
import { Mail, LinkedIn } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import theme from '../theme/theme';
import service from '../services/RecommendationService';

/**
 * MyPortfolio
 * @Author Holland Aucoin
 * 
 * Recommendations
 * @Summary This component displays recommendations and information about the author
 */

const useStyles = makeStyles(() => ({
    container: {
        justifyContent: 'center',
    },
    avatar: {
        width: theme.spacing(15),
        height: theme.spacing(15),
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: theme.spacing(2)
    },
}));

export default function Recommendations() {

    // Define open variable for state of a diaglog
    const [open, setOpen] = React.useState(false);

    // Method to handle when a diaglog is opened
    const handleClickOpen = (dialog) => (event) => {
        setOpen(dialog);
    };
    // Method to handle when a dialog is closed
    const handleClose = () => {
        setOpen(false);
    };

    // Creating variable for recommendations
    const [recommendations, setRecommendations] = React.useState([]);

    // Use useEffect method to call backend for course information and wait for response
    useEffect(() => {
        service.getRecommendations().then(response => {
            setRecommendations(response.data);
        })
    }, []);

    const classes = useStyles();

    return (

        <section>
            <Paper elevation={3}>
            <Container maxWidth="md">
                <Box pt={8} pb={12} textAlign="center">
                    <Box mb={8}>
                        <Typography variant="h5" component="h2" gutterBottom={true}>Recommendations</Typography>
                        <hr width="125px" />
                    </Box>
                    {/* Display for devices larger than an iPad */}
                    <Grid container spacing={4} className={classes.container}>
                        <MediaQuery minWidth={theme.breakpoints.values.iPad}>
                            {/* Iterate through all recommendations */}
                            {recommendations.map((recommendation, index) => (
                                (() => {
                                    // Check for every other recommendation, used to swap image and content
                                    if (index % 2 === 0) {
                                        return ([
                                            // Recommendation author information and image
                                            <Grid item xs={12} sm={3} key='grid1 + {index}'>
                                                <Avatar alt="" src={recommendation.image} className={classes.avatar} />
                                                <Typography variant="h6" component="h4" gutterBottom={true}>{recommendation.name}</Typography>
                                                <Typography variant="body1" color="primary" component="span">{recommendation.position}</Typography><br />
                                                <IconButton aria-label="LinkedIn" onClick={() => window.open(recommendation.contact.linkedIn, "_blank")}>
                                                    <LinkedIn />
                                                </IconButton>
                                                <IconButton aria-label="Mail" button="true" key="Email" component="a" href={"mailto:" + recommendation.contact.email}>
                                                    <Mail />
                                                </IconButton>
                                            </Grid>,
                                            // Recommendation preview with see more button
                                            <Grid item xs={12} sm={9} key='grid2 + {index}'>
                                                <Typography gutterBottom={true} style={{ textAlign: "justify" }}>"{recommendation.preview}"
                                                    <Button style={{marginLeft: "10px", padding: "0px", backgroundColor: "transparent"}} color="primary" onClick={handleClickOpen('dialog' + recommendation._id)}>
                                                        See More
                                                    </Button>
                                                </Typography>
                                                {/* Diaglog box with full letter */}
                                                <Dialog key={recommendation._id} open={open === 'dialog' + recommendation._id} onClose={handleClose} aria-labelledby={"responsive-dialog" + recommendation._id}>
                                                    <DialogTitle id="{responsive-dialog-title}">{recommendation.name}</DialogTitle>
                                                    <DialogContent>
                                                    <DialogContentText>
                                                        "{recommendation.letter}"
                                                    </DialogContentText>
                                                    </DialogContent>
                                                </Dialog>
                                            </Grid>
                                        ])
                                    }
                                    else {
                                        return ([
                                            // Recommendation preview with see more button
                                            <Grid item xs={12} sm={9} key='grid1 + {index}'>
                                                <Typography gutterBottom={true} style={{ textAlign: "justify" }}>"{recommendation.preview}"
                                                    <Button style={{marginLeft: "10px", padding: "0px", backgroundColor: "transparent"}} color="primary" onClick={handleClickOpen('dialog' + recommendation._id)}>
                                                        See More
                                                    </Button>
                                                </Typography>
                                                {/* Diaglog box with full letter */}
                                                <Dialog key={recommendation._id} open={open === 'dialog' + recommendation._id} onClose={handleClose} aria-labelledby={"responsive-dialog" + recommendation._id}>
                                                    <DialogTitle id="{responsive-dialog-title}">{recommendation.name}</DialogTitle>
                                                    <DialogContent>
                                                    <DialogContentText>
                                                        "{recommendation.letter}"
                                                    </DialogContentText>
                                                    </DialogContent>
                                                </Dialog>
                                            </Grid>,
                                            // Recommendation author information and image
                                            <Grid item xs={12} sm={3} key='grid2 + {index}'>
                                                <Avatar alt="" src={recommendation.image} className={classes.avatar} />
                                                <Typography variant="h6" component="h4" gutterBottom={true}>{recommendation.name}</Typography>
                                                <Typography variant="body1" color="primary" component="span">{recommendation.position}</Typography><br />
                                                <IconButton aria-label="LinkedIn" onClick={() => window.open(recommendation.contact.linkedIn, "_blank")}>
                                                    <LinkedIn />
                                                </IconButton>
                                                <IconButton aria-label="Mail" button="true" key="Email" component="a" href={"mailto:" + recommendation.contact.email}>
                                                    <Mail />
                                                </IconButton>
                                            </Grid>
                                        ])
                                    }
                                })()
                            ))}
                        </MediaQuery>

                         {/* Display for devices smaller than an iPad */}
                        <MediaQuery maxWidth={theme.breakpoints.values.iPad - 1}>
                            {/* Iterate through recommendations */}
                            {recommendations.map((recommendation, index) => ([
                                // Recommendation author information and image
                                <Grid item xs={12} sm={3} key='grid1 + {index}'>
                                    <Avatar alt="" src={recommendation.image} className={classes.avatar} />
                                    <Typography variant="h6" component="h4" gutterBottom={true}>{recommendation.name}</Typography>
                                    <Typography variant="body1" color="primary" component="span">{recommendation.position}</Typography><br />
                                    <IconButton aria-label="LinkedIn" onClick={() => window.open(recommendation.contact.linkedIn, "_blank")}>
                                        <LinkedIn />
                                    </IconButton>
                                    <IconButton aria-label="Mail" button="true" key="Email" component="a" href={"mailto:" + recommendation.contact.email}>
                                        <Mail />
                                    </IconButton>
                                </Grid>,
                                // Recommendation preview with see more button
                                <Grid item xs={12} sm={9} style={{ textAlign: "justify" }} key='grid2 + {index}'>
                                    <Typography gutterBottom={true}>"{recommendation.preview}"</Typography>
                                    <Button color="primary" onClick={handleClickOpen('dialog' + recommendation._id)}>
                                        See More
                                    </Button>
                                    <Dialog key={recommendation._id} open={open === 'dialog' + recommendation._id} onClose={handleClose} aria-labelledby={"responsive-dialog" + recommendation._id}>
                                        <DialogTitle id="{responsive-dialog-title}">{recommendation.name}</DialogTitle>
                                        <DialogContent>
                                        <DialogContentText>
                                            "{recommendation.letter}"
                                        </DialogContentText>
                                        </DialogContent>
                                    </Dialog>
                                </Grid>
                            ]))}
                        </MediaQuery>
                    </Grid>
                </Box>
            </Container>
            </Paper>
        </section>
    )
}