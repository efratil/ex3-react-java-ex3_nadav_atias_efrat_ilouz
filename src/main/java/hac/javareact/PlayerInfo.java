package hac.javareact;

import java.io.Serializable;

public class PlayerInfo implements Serializable {
    private final String name;
    private int score;

    public PlayerInfo(String name, int score) {
        this.name = name;
        this.score = score;
    }
    public void setScore(int newScore) { score = newScore;}

    public String getName() {
        return name;
    }
    public int getScore() {
        return score;
    }
}
