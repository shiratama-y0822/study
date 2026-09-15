class Main {
    public static void main(String[] args) {
        Attacker attacker1 = new Pokemon("Pikachu", 25);
        Attacker attacker2 = new Charmander();

        attacker1.attack();
        attacker2.attack();
    }
}