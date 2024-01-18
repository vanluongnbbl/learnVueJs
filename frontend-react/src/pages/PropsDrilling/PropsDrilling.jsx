import { Box, Typography } from '@mui/material'
import React from 'react'
import BackButton from '../../components/common/BackButton'
import { HOME_URL } from '../../utils/constant'

function PropsDrilling() {
  return (
    <Box className='propsDrilling' style={{ padding: 30 }}> 
        <BackButton url={HOME_URL} />
        <Typography variant="h3">Props Drilling</Typography>
    </Box>
  )
}

export default PropsDrilling