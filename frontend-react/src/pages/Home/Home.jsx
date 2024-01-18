import { Button } from '@mui/material'
import React from 'react'
import { useAuth } from '../../services/Auth/auth';
import ListLink from '../../components/ListLink/ListLink';
import './styles.css'

function Home() {
    const auth = useAuth();
    const handeleLogout = async () => {
        await auth.logOutAction()
    }
 
  return (
    <div className='home'>
        <h1>Home Page</h1>
        <Button onClick={handeleLogout} variant="contained" sx={{ mt: 3, mb: 2 }} >Log out</Button>


        <ListLink />
    </div>
  )
}

export default Home