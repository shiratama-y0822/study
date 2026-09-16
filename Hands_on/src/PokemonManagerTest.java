import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.Test;

public class PokemonManagerTest {

    @Test
    void addPokemonTest() {
        PokemonManager manager = new PokemonManager();

        manager.addPokemon(new Pokemon("Pikachu", 10));

        manager.deletePokemon("Bubasaur");

        assertEquals(1, manager.getPokemonList().size());
    }

    @Test
    void deletePokemonTest() {
        PokemonManager manager = new PokemonManager();

        manager.addPokemon(new Pokemon("Pikachu", 10));
        manager.addPokemon(new Pokemon("Bulbasaur", 5));

        manager.deletePokemon("Bulbasaur");

        assertEquals(1, manager.getPokemonList().size());
    }
}