package com.example.pokemonapi.repository;

import org.springframework.stereotype.Repository;

@Repository
public class PokemonRepository {

    public String findPokemon() {
        return "Pikachu";
    }
}