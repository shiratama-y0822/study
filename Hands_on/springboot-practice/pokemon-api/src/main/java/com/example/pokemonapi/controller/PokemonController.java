package com.example.pokemonapi.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.pokemonapi.service.PokemonService;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
public class PokemonController {

    private final PokemonService pokemonService;

    public PokemonController(PokemonService pokemonService) {
        this.pokemonService = pokemonService;
    }

    @GetMapping("/pokemon")
    public String getPokemon() {
        return pokemonService.getPokemon();
    }

    @PostMapping("/pokemon")
    public String createPokemon(@RequestBody String name) {
        return name;
    }
}