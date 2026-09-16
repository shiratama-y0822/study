import java.util.ArrayList;
import java.util.List;

public class PokemonManager {
    private List<Pokemon> pokemonList = new ArrayList<>();

    public void addPokemon(Pokemon pokemon) {
        pokemonList.add(pokemon);
    }

    public List<Pokemon> getPokemonList() {
        return pokemonList;
    }

    public void showAllPokemon() {
        for (Pokemon pokemon  : pokemonList) {
            System.out.println(pokemon.getName() + " Lv." + pokemon.getLevel());
        }
    }

    public void updateLevel(String name, int newLevel) {
        for (Pokemon pokemon : pokemonList) {
            if (pokemon.getName().equals(name)) {
                pokemon.setLevel(newLevel);
            }
        }
    }

    public void deletePokemon(String name) {
        pokemonList.removeIf(pokemon -> pokemon.getName().equals(name));
    }
}