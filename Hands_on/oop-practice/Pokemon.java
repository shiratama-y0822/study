class Pokemon implements Attacker {
    private String name;
    private int level;

    Pokemon(String name, int level) {
        this.name = name;
        this.level = level;
    }

    String getName() {
        return name;
    }

    int getLevel() {
        return level;
    }

    public void attack() {
        System.out.println("10万ボルト！");
    }
}