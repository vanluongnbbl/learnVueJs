import { Button } from '@mui/material'
import React from 'react'
import { useAuth } from '../../services/Auth/auth';
import ListLink from '../../components/ListLink/ListLink';
import './styles.css'
import { useGetPokemonByNameQuery } from '../../services/api/pokemon';

function Home() {
    const { data, error, isLoading } = useGetPokemonByNameQuery('bulbasaur')
    const auth = useAuth();
    const handeleLogout = async () => {
        await auth.logOutAction()
    }

    console.log('data, error, isLoading', data, error, isLoading);
 
  return (
    <div className='home' style={{ padding: 30 }}>
        <h1>Home Page</h1>
        <Button onClick={handeleLogout} variant="contained" sx={{ mt: 3, mb: 2 }} >Log out</Button>


        <ListLink />


        {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <h3>{data.species.name}</h3>
          <img src={data.sprites.front_shiny} alt={data.species.name} />
        </>
      ) : null}
    </div>
  )
}

export default Home