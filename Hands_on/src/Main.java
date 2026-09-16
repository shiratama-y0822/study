public class Main {
    public static void main(String[] args) {
        PokemonManager manager = new PokemonManager();

        Pokemon pikachu = new Pokemon("Pikachu", 10);
        Pokemon bulbasaur = new Pokemon("Bulbasaur", 5);

        manager.addPokemon(pikachu);
        manager.addPokemon(bulbasaur);
    
        System.out.println("=== 追加後 ===");
        manager.showAllPokemon();

        manager.updateLevel("Pikachu", 20);

        System.out.println("=== 更新後 ===");
        manager.showAllPokemon();

        manager.deletePokemon("Bulbasaur");

        System.out.println("=== 削除後 ===");
        manager.showAllPokemon();
    }
}