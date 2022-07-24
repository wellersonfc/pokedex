import React from "react";
import ApiPokemon from "../API/apiPokemon";

class ListaPokemon extends React.Component{
    state = {
        poke:[]
    }

    poke = ApiPokemon.getPokemons();


    render(){
        return(
        );
    }
}

export default ListaPokemon;