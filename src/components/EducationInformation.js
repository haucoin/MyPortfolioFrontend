import React from 'react';
import { Container, Box, Typography, Grid, Card, CardMedia } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import theme from '../theme/theme';

/**
 * MyPortfolio
 * @Author Holland Aucoin
 * 
 * Education Information
 * @Summary This component displays the education information such as university name, location, and degree within the education page
 */

const useStyles = makeStyles(() => ({
  block: {
    marginBottom: theme.spacing(3),
  },
  imageBoxRoot: {
    maxWidth: 512,
    paddingBottom: theme.spacing(8),
    marginLeft: 'auto',
    marginRight: 'auto',
    [theme.breakpoints.up(960)]: {
        paddingTop: theme.spacing(12),
        paddingLeft: theme.spacing(6),
    }
  },
  cardRoot: {
    position: 'relative',
    paddingTop: '85%',
    margin: 'auto',
    overflow: 'hidden',
  },
  cardMedia: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    border: 0
  }
}));

export default function App() {

  const classes = useStyles();

  return (

    <section>
      <Box pt={4} pb={2}>
        {/* Section displaying all education information */}
        <Container maxWidth="md">
          <Grid container>
            <Grid item xs={12} md={12}>
              <Box className={classes.contentBox}>
                <Box mt={4}>
                  <Typography variant="h5">Grand Canyon University</Typography>
                  <hr width="150px" align="left" />
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <Typography variant="overline" >Phoenix, AZ</Typography>
                    <Typography variant="overline" >GPA: 4.0</Typography>
                  </div>
                </Box>
                <Box>
                  <Typography variant="body1"><b>Bachelor of Science in Computer Programming - </b></Typography>
                  <Typography variant="body1" color="textSecondary" paragraph={true} className={classes.block} style={{textAlign: "justify"}}>Laudantium, unde aliquam sit accusantium a explicabo maiores doloribus aut, rerum accusamus alias saepe molestias ut suscipit voluptate voluptatibus repellendus fuga vero. Error delectus odit, numquam laborum consectetur mollitia corrupti quo neque, quibusdam tempore debitis voluptatum vitae! Ea explicabo totam excepturi! Eius?</Typography>
                  <Typography variant="body1" color="textSecondary" paragraph={true} className={classes.block} style={{textAlign: "justify"}}>Alias sunt voluptas ratione modi dolore nostrum debitis nihil. Nemo, ratione repellat quia doloremque perferendis fuga cumque ex corporis laborum distinctio dolorum deserunt voluptates ea architecto ab, esse omnis quas provident. Maiores sed ipsam eos quis.</Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </section>

  )
}