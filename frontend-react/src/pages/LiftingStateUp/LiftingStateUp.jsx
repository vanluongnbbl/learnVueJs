import { Box, Button, Typography } from '@mui/material'
import React, { useState } from 'react'
import TemperatureInput from '../../components/LiftingStateUp/TemperatureInput';
import { BoilingVerdict } from '../../components/LiftingStateUp/BoilingVerdict';
import BackButton from '../../components/common/BackButton';
import { HOME_URL } from '../../utils/constant';

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
  }
  
function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
      return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
  }

function LiftingStateUp() {
    const [temperature, setTemperature] = useState(0)
    const [scale, setScale] = useState('c');
    
    const handleCelsiusChange = (temp) => {
      setScale('c');
      setTemperature(temp);
    };
  
    const handleFahrenheitChange = (temp) => {
      setScale('f');
      setTemperature(temp);
    };

    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

  return (
    <Box className='LiftingStateUp' style={{ padding:30 }}>
        <BackButton url={HOME_URL}/>
        <Typography variant="h3">Lifting State Up</Typography>
        <Box>
          <TemperatureInput
              scale="c"
              temperature={celsius}
              onTemperatureChange={handleCelsiusChange}
          />
          <TemperatureInput
              scale="f"
              temperature={fahrenheit}
              onTemperatureChange={handleFahrenheitChange}
          />
          <BoilingVerdict celsius={parseFloat(celsius)} />

        </Box>
    </Box>
  )
}

export default LiftingStateUp