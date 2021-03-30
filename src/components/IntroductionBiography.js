import React from 'react';
import { Container, Box, Typography, Button, Paper } from '@material-ui/core';
import { ArrowRightAlt } from '@material-ui/icons';

/**
 * MyPortfolio
 * @Author Holland Aucoin
 * 
 * Introduction Biography
 * @Summary This component displays a introduction biography that is shown on the home page
 */


export default function App() {

  return (

    <section>
      <Paper elevation={3} style={{position: "relative", boxShadow: "0 0 10px rgb(0 0 0 / 50%)"}}>
        <Container maxWidth="md">
          <Box py={8} textAlign="center">
            <Typography variant="overline">Who am I?</Typography>
            <br/><br/>
            <Typography variant="h3" component="h2">I want to make things that make a difference</Typography>
            <Box mt={4}>
              <Typography variant="subtitle1" color="textSecondary" paragraph={true} style={{textAlign: "justify"}}>
                Hello, thanks for visiting my portfolio. My name is Holland Aucoin and I am currently a student at Grand Canyon University 
                in Phoenix, Arizona, pursuing a Bachelor of Science in Computer Programming, scheduled to graduate in April 2021. I have 
                spent the last several years building full-stack applications using a variety of languages and frameworks, while learning 
                and practicing agile methodologies in a team-driven environment. I am passionate about people, building connections, and
                practicing servant leadership, with a strong desire to use my abilities to improve the lives of others.
              </Typography>
            </Box>
            <Box mt={4}>
              <Button href="/about" color="primary" endIcon={<ArrowRightAlt />}>Get to know me</Button>
            </Box>
          </Box>
        </Container>
      </Paper>
    </section>
  )
}