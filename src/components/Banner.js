import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import BannerImage from '../assests/images/hm.png';

const Banner = () => (
  <Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
    <Typography color="green" fontWeight="650" fontSize="28px">Kasrat</Typography>
    <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px">
      Eat,Sweat, Sleep <br />
      And Repeat
    </Typography>
    <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px">
      The most Effective Exercises 
    </Typography>
    <Stack>
      <a href="#exercises" style={{ marginTop: '45px', textDecoration: 'none', width: '200px', textAlign: 'center', background: 'green', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '4px' }}>Explore  Favorite Exercises</a>
    </Stack>
    <Typography fontWeight={600} color="green" sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }}>
 Exercise
    </Typography>
    <img src={BannerImage} alt="banner" className="hero-banner-img" style={{ width: '600px', height: '450px', margin: '0px 20px' }} />
  </Box>
);

export default Banner;