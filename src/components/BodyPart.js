import React from 'react';
import { Stack, Typography } from '@mui/material';
import Icon from '../assests/images/cr1.png';

// typography to show name of bodypart
// onclick callback function to select and show 

const BodyPart = ({ item, setBodyPart, bodyPart }) => (
  <Stack
    type="button"
    alignItems="center"
    justifyContent="center"
    className="bodyPart-card"
    sx={bodyPart === item ? { borderTop: '4px solid #FF2625', background: '#fff', borderBottomLeftRadius: '20px', width: '270px', height: '282px', cursor: 'pointer', gap: '47px' } : { background: '#fff', borderBottomLeftRadius: '25px', width: '280px', height: '282px', cursor: 'pointer', gap: '47px' }}
    onClick={() => {
      setBodyPart(item);
      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
    }}
  >
    <img src={Icon} alt="cardio" style={{ width: '40px', height: '40px' }} />
    
    <Typography fontSize="24px" fontWeight="bold" fontFamily="Alegreya" color="black" textTransform="capitalize"> {item}</Typography>
  </Stack>
);

export default BodyPart;