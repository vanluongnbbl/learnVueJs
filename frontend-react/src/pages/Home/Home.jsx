import { Button } from '@mui/material'
import React from 'react'
import useLogout from '../../services/api/useLogout';
import { useAuth } from '../../services/Auth/auth';

function Home() {
    const auth = useAuth();
    const handeleLogout = async () => {
        await auth.logOutAction()
    }
 
  return (
    <div>
        <h1>Home Page</h1>
        <Button onClick={handeleLogout} variant="contained" sx={{ mt: 3, mb: 2 }} >Log out</Button>
    </div>
  )
}

export default Home