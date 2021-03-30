import React from 'react';
import MediaQuery from 'react-responsive';
import { Container, Box, Typography, Grid } from '@material-ui/core';
import Carousel from 'react-material-ui-carousel'
import { makeStyles } from '@material-ui/core/styles';
import theme from '../theme/theme';

/**
 * MyPortfolio
 * @Author Holland Aucoin
 * 
 * Biography
 * @Summary This component displays a biography and carousel of pictures of myself
 */

const useStyles = makeStyles(() => ({
      contentBox: {
        maxWidth: theme.breakpoints.values['md'],
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
        marginLeft: 'auto',
        marginRight: 'auto',
        textAlign: 'left',
      },
      img: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        objectFit: 'cover',
        height: 512,
        width: '100%'
      },
      button: {
        color: theme.palette.text.black,
        backgroundColor: "transparent",
        height: "50px",
      },
      halfLg: {
        [theme.breakpoints.up('lg')]: {
          maxWidth: theme.breakpoints.values['lg'] / 2
        }
      },
      firstBox: {
        [theme.breakpoints.up('lg')]: {
          marginLeft: 'auto',
          paddingRight: theme.spacing(6)
        }
      },
      mobileImage: {
        objectFit: 'cover',
        height: '600px',
        width: '100%'
      },
      iPadImage: {
        objectFit: 'cover',
        height: '700px',
        width: '100%'
      },
      laptopImage: {
        objectFit: 'cover',
        height: '800px',
        width: '100%'
      },
      titlePadding: {
        [theme.breakpoints.down(960)]: {
          paddingTop: "50px"
        }
      },
}));

export default function App() {

  const classes = useStyles();


  return (

    <section>
      <Grid container>
        <Grid item xs={12} md={6}>
          {/* Image carousel sized for phones */}
          <MediaQuery maxWidth={theme.breakpoints.values.otherPhone}>
            <Box position="relative" height={600}>
              <Carousel swipe={true} animation="fade" navButtonsAlwaysInvisible={true} interval="5000">
                <img className={classes.mobileImage} src="https://hollandaucoin-images.s3-us-west-1.amazonaws.com/main/AboutMe.jpg" alt="" />
                <img className={classes.mobileImage} src="https://hollandaucoin-images.s3-us-west-1.amazonaws.com/main/Camp.jpg" alt="" />
                <img className={classes.mobileImage} src="https://hollandaucoin-images.s3-us-west-1.amazonaws.com/main/Soccer.jpg" alt="" />
              </Carousel>
            </Box>
          </MediaQuery>
          {/* Image carousel sized for devices larger than a phone to an iPad */}
          <MediaQuery minWidth={theme.breakpoints.values.otherPhone + 1} maxWidth={theme.breakpoints.values.iPad}>
            <Box position="relative" height={700}>
              <Carousel swipe={true} animation="fade" navButtonsAlwaysInvisible={true} interval="5000">
                <img className={classes.iPadImage} src="https://hollandaucoin-images.s3-us-west-1.amazonaws.com/main/AboutMe.jpg" alt="" />
                <img className={classes.iPadImage} src="https://hollandaucoin-images.s3-us-west-1.amazonaws.com/main/Camp.jpg" alt="" />
                <img className={classes.iPadImage} src="https://hollandaucoin-images.s3-us-west-1.amazonaws.com/main/Soccer.jpg" alt="" />
              </Carousel>
            </Box>
          </MediaQuery>
          {/* Image carousel sized for devices larger than an iPad */}
          <MediaQuery minWidth={theme.breakpoints.values.iPad + 1}>
            <Box position="relative" height={800}>
              <Carousel swipe={true} animation="fade" navButtonsAlwaysInvisible={true} interval="5000">
                <img className={classes.laptopImage} src="https://hollandaucoin-images.s3-us-west-1.amazonaws.com/main/AboutMe.jpg" alt="" />
                <img className={classes.laptopImage} src="https://hollandaucoin-images.s3-us-west-1.amazonaws.com/main/Camp.jpg" alt="" />
                <img className={classes.laptopImage} src="https://hollandaucoin-images.s3-us-west-1.amazonaws.com/main/Soccer.jpg" alt="" />
              </Carousel>
            </Box>
          </MediaQuery>
        </Grid>
        {/* Grid for biography */}
        <Grid item xs={12} md={6} style={{alignSelf: "center"}}>
          <Box display="flex" className={classes.halfLg, classes.firstBox, classes.titlePadding}>
            <Container>
              <Box mb={4}>
                <Typography variant="h4" component="h2" gutterBottom={true}>Get to know me.</Typography>
                <Typography variant="subtitle1" color="textSecondary" paragraph={true} style={{textAlign: "justify"}}>
                  Hello, thanks for visiting my portfolio. My name is Holland Aucoin and I am currently a student at Grand Canyon University 
                  in Phoenix, Arizona, pursuing a Bachelor of Science in Computer Programming, scheduled to graduate in April 2021. I have 
                  spent the last several years building full-stack applications using a variety of languages and frameworks, while learning 
                  and practicing agile methodologies in a team-driven environment.
                </Typography>
                <Typography variant="subtitle1" color="secondary" paragraph={true} style={{textAlign: "justify"}}>
                  Aside from that, I am extremely passionate about people, building connections, and servant leadership. More words need to be 
                  added here to fill all the space but I don't know what to write yet so I will fill it with random words. More words need to be 
                  added here to fill all the space but I don't know what to write yet so I will fill it with random words.
                </Typography>
                <Typography variant="subtitle1" color="secondary" paragraph={true} style={{textAlign: "justify"}}>
                  I grew up playing soccer and continued into my first year of college. I thrive in team environments and enjoy working together 
                  to accomplish a goal. More words need to be added here to fill all the space but I don't know what to write yet so I will fill 
                  it with random words. More words need to be added here to fill all the space but I don't know what to write yet so I will fill 
                  it with random words.
                </Typography>
                <Typography variant="subtitle1" color="textSecondary" paragraph={true} style={{textAlign: "justify"}}>
                  Visit my contact page to get in touch!
                </Typography>
              </Box>
            </Container>
          </Box>
        </Grid>
      </Grid>
    </section>
  )
}