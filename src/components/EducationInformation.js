import React from 'react';
import { Container, Box, Typography } from '@material-ui/core';
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
    image: {
      maxWidth: '100%',
    }
}));

export default function App() {

    const classes = useStyles();

    return (

    <section>
      {/* Section displaying all education information */}
      <Container maxWidth="md">
        <Box py={8}>
          <Box mb={4}>
            <Typography variant="h5">Grand Canyon University</Typography>
            <hr width="150px"align="left"/>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="overline" >Phoenix, AZ</Typography>
              <Typography variant="overline" >GPA: 4.0</Typography>
            </div>
          </Box>
          <Box>
            <Typography variant="body1"><b>Bachelor of Science in Computer Programming - </b></Typography>
            <Typography variant="body1" color="textSecondary" paragraph={true} className={classes.block}>Laudantium, unde aliquam sit accusantium a explicabo maiores doloribus aut, rerum accusamus alias saepe molestias ut suscipit voluptate voluptatibus repellendus fuga vero. Error delectus odit, numquam laborum consectetur mollitia corrupti quo neque, quibusdam tempore debitis voluptatum vitae! Ea explicabo totam excepturi! Eius?</Typography>
    
            <Typography variant="body1" color="textSecondary" paragraph={true} className={classes.block}>Alias sunt voluptas ratione modi dolore nostrum debitis nihil. Nemo, ratione repellat quia doloremque perferendis fuga cumque ex corporis laborum distinctio dolorum deserunt voluptates ea architecto ab, esse omnis quas provident. Maiores sed ipsam eos quis.</Typography>
    
          </Box>
        </Box>
      </Container>
    </section>

    )
}