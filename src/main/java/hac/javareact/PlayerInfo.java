package hac.javareact;

import java.io.Serializable;

/**
 * Represents a player and their corresponding score.
 */
public class PlayerInfo implements Serializable {
    private final String username;
    private int score;
    /**
     * Creates a new instance of Player with the given name and score.
     * @param name  the name of the player
     * @param score the score of the player
     */
    public PlayerInfo(String name, int score) {
        this.username = name;
        this.score = score;
    }

    /**
     * Sets the score of the player.
     * @param newScore the new score of the player
     */
    public void setScore(int newScore) { score = newScore;}

    /**
     * @return the name of the player
     */
    public String getName() {
        return username;
    }

    /**
     * @return the score of the player
     */
    public int getScore() {
        return score;
    }
}
