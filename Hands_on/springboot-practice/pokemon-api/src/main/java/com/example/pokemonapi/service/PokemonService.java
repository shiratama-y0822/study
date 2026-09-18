package com.example.pokemonapi.service;

import org.springframework.stereotype.Service;

import com.example.pokemonapi.repository.PokemonRepository;

@Service
public class PokemonService {
    private final PokemonRepository pokemonRepository;

    public PokemonService(PokemonRepository pokemonRepository) {
        this.pokemonRepository = pokemonRepository;
    }

    public String getPokemon() {
        return pokemonRepository.findPokemon();
    }
}