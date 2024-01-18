import { Button } from '@mui/material'
import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from "react-router-dom";

function BackButton({url}) {
    const navigate = useNavigate()
  return (
    <Button
        size="large" variant="contained"
        color="primary" 
        endIcon={<ArrowBackIcon />}
        onClick={() => navigate(url)}
        >
        Back
    </Button>
  )
}

export default BackButton