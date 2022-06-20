import React from 'react';
import Logo from '../assests/images/Logo.png'
import { Box, Stack,Typography } from '@mui/material';


const AboutUs = () => (
  <Box mt="150px" bgcolor="#b5e7a0">
    <Stack gap="120px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      <h2>About Us</h2>
      <img src={Logo} alt="logo" style={{ width: '78px', height: '108px', margin: '0px 20px' }} />
      <Typography>We are the Best fitness provider in this City . We make people mentally fit and healthy.</Typography>
    </Stack>
  </Box>
  );

export default AboutUs;