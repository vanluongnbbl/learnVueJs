import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import BackButton from '../../components/common/BackButton'
import { HOME_URL } from '../../utils/constant'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../../store/slice/counterSlice'

function Switch({on, onToggle}) {
  return (
    <div>
      <SwitchMessage on={on} />
      <SwitchButton onToggle={onToggle} />
    </div>
  )
}

function SwitchMessage({on}) {
  return <Typography variant='h4'>The button is <span style={{ color: on ? 'green' : 'red' }}>{on ? 'on' : 'off'}</span></Typography>
}

function SwitchButton({onToggle}) {
  return <Button variant='outlined' onClick={onToggle}>Toggle</Button>
}

function PropsDrilling() {
  const [on, setOn] = React.useState(false)
  const count = useSelector((state) => state.counterReducer.value)

  const dispatch = useDispatch()
  const toggle = () => setOn(o => !o)
  
  return (
    <Box className='propsDrilling' style={{ padding: 30 }}> 
        <BackButton url={HOME_URL} />
        <Typography variant="h3">Props Drilling</Typography>

        <Switch on={on} onToggle={toggle} />

        <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </Box>
  )
}

export default PropsDrilling