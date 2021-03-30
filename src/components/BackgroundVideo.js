import React from 'react';
import MediaQuery from 'react-responsive';
import { CardMedia, Card } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import theme from '../theme/theme';

/**
 * MyPortfolio
 * @Author Holland Aucoin
 * 
 * Background Video
 * @Summary This component displays the hero banner that is shown on the home page with the logo overlayed
 */

const useStyles = makeStyles(() => ({
    div: {
        position: "relative",
    },
    backgroundImage: {
        width: '100%',
        height: 'auto',
    },
    cutoutImagePhone: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "100%",
    },
    cutoutImageTablet: {
        position: "absolute",
        top: "70%",
        left: "44%",
        transform: "translate(-50%, -50%)",
        width: "90%"
    },
    cutoutImage: {
        position: "absolute",
        top: "65%",
        left: "37%",
        transform: "translate(-50%, -50%)",
        width: "75%",
    },
}));

export default function App() {

    const classes = useStyles();

    return (
        <div>
            {/* Image and logo sized for phones */}
            <MediaQuery maxWidth={theme.breakpoints.values.otherPhone}>
                <div className={classes.div} style={{height: "70vh"}}>
                    <CardMedia className={classes.backgroundImage} component='video' image="https://hollandaucoin-images.s3-us-west-1.amazonaws.com/main/backgroundVideoPhone.mp4" autoPlay playsInline loop muted controls={false}/>
                    <img src="https://hollandaucoin-images.s3-us-west-1.amazonaws.com/main/CutoutPhone.png" alt="Holland Aucoin" className={classes.cutoutImagePhone} />
                </div>
            </MediaQuery>
            {/* Image and logo sized for iPads and other tablets */}
            <MediaQuery minWidth={theme.breakpoints.values.otherPhone + 1} maxWidth={theme.breakpoints.values.iPadPro}>
                <div className={classes.div}>
                    <CardMedia component='video' image="https://hollandaucoin-images.s3-us-west-1.amazonaws.com/main/backgroundVideo.mp4" autoPlay playsInline loop muted controls={false} />
                    <img src="https://hollandaucoin-images.s3-us-west-1.amazonaws.com/main/Cutout.png" alt="Holland Aucoin" className={classes.cutoutImageTablet} />
                </div>
            </MediaQuery>
            {/* Image and logo sized for all devices larger than an iPad Pro */}
            <MediaQuery minWidth={theme.breakpoints.values.iPadPro + 1} >
                <div className={classes.div}>
                    <CardMedia component='video' image="https://hollandaucoin-images.s3-us-west-1.amazonaws.com/main/backgroundVideo.mp4" autoPlay playsInline loop muted controls={false} />
                    <img src="https://hollandaucoin-images.s3-us-west-1.amazonaws.com/main/Cutout.png" alt="Holland Aucoin" className={classes.cutoutImage} />
                </div>
            </MediaQuery>
        </div>
    )
}