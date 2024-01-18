import { Box, TextField, Typography } from "@mui/material";

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
  };


export default function TemperatureInput({ scale, temperature, onTemperatureChange }) {
    const handleChange = (e) => {
      onTemperatureChange(e.target.value);
    };
  
    return (
      <Box>
        <Typography>Enter temperature in {scaleNames[scale]}:</Typography>
        <TextField value={temperature} onChange={handleChange} />
      </Box>
    );
  }
  