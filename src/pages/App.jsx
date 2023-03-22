import React from 'react';
import "./style.scss";
import logo from  "./Pokédex_3D_logo.png";
import Navbar from '../components/Navebar';
import PokemonCard from '../components/PokemonCard';
import { Container } from '@mui/system';
import { Grid } from '@mui/material';
import axios from 'axios';

function App() {

  const [pokemons, setPokemons] = React.useState([]);

  React.useEffect(() =>{
    getPokemons();
  }, []);

  
  const getPokemons = ()=>{
    var endpoints = [];
    
    for(var i = 1; i < 150; i++ ){
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
    }

    console.log(endpoints);
    var response = axios.all(endpoints.map((endpoint) => axios.get(endpoint)))
    .then((resp) => console.log(resp))
  }

  return (
    <div>
      <Navbar />
      <Container maxWidth="xl">
        <Grid container>
          {pokemons.map((pokemon, key) =>(
            <Grid xs={3} key={key}>
              <PokemonCard name={pokemon.data.name} image={pokemon.data.sprites.front_default} types={pokemon.data.types}/>
            </Grid>
          ))}

        </Grid>
      </Container>
    </div>
  );
}

export default App;
