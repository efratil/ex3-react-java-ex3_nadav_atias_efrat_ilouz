package hac.javareact;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;

import java.io.*;
import java.nio.file.Files;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;
import javax.servlet.http.*;
import javax.servlet.annotation.*;

@WebServlet(name = "ServletApi", value = "/api/highscores")
public class ApiServlet extends HttpServlet {
    private static File file;
    private static final String SCORES = "scores.dat";
    private static final int MAX_SIZE = 5;
    private final Gson gson = new Gson();

    /**
     * Handles GET requests to the API endpoint.
     * Retrieves the current high scores from the file and updates the list if a new score was submitted.
     * Sorts and filters the high scores, then returns them as a JSON array in the response body.
     * @param request the HttpServletRequest object representing the client's request
     * @param response the HttpServletResponse object representing the server's response
     * @throws IOException if an I/O error occurs while reading from or writing to the file
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        List<PlayerInfo> playerInfoList = readHighScoresFromFile();
        // Sort and filter the high scores
        playerInfoList = getTopPlayerInfoList(playerInfoList);

        // Return the high scores as a JSON array
        try {
            response(response, HttpServletResponse.SC_OK, playerInfoList);
        }
        catch (IOException e){
            response(response, HttpServletResponse.SC_BAD_REQUEST, "Something bad append, get message to your face");
        }
    }

    /**
     * Handles POST requests to the API endpoint.
     * Reads the new player's score from the request body and adds it to the high scores list.
     * Writes the updated high scores to the file.
     * @param request the HttpServletRequest object representing the client's request
     * @param response the HttpServletResponse object representing the server's response
     * @throws IOException if an I/O error occurs while reading from or writing to the file
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
        try {
//            if (request.getReader().lines().noneMatch(line -> line.contains("username")) || request.getReader().lines().noneMatch(line -> line.contains("score"))) {
//                response(response,HttpServletResponse.SC_BAD_REQUEST, "Bad Request");
//                return;
//            }
            JsonObject json = JsonParser.parseReader(request.getReader()).getAsJsonObject();

            String name = json.get("username").getAsString();
            int score   = json.get("score").getAsInt();

            PlayerInfo newPlayer = new PlayerInfo(name, score);
            writeHighScoresToFile(newPlayer);// Write the updated high scores to file

            response(response,HttpServletResponse.SC_OK,"Score saved to file successfully");
        } catch (Exception e) {
            response(response,HttpServletResponse.SC_INTERNAL_SERVER_ERROR,e.getMessage());
        }
    }

    /**
     * Reads the list of high scores from the "scores.dat" file.
     * @return A list of PlayerInfo objects containing the high scores.
     * @throws IOException if there is an error reading the file.
     */
    private List<PlayerInfo> readHighScoresFromFile() {
        checkIfFileExist();
        List<PlayerInfo> highScoresList = new ArrayList<>();
        synchronized(this) {
            try (ObjectInputStream objectInputStream = new ObjectInputStream(Files.newInputStream(file.toPath()))) {
            highScoresList = (List<PlayerInfo>) objectInputStream.readObject();
        } catch (EOFException ignored) {
        }
        catch (IOException | ClassNotFoundException e) {
            System.err.println("Failed to read high scores file");
            e.printStackTrace();
        }
     }
        return highScoresList;
    }

    /**
     * Writes a new high score to the "scores.dat" file.
     * @param player A PlayerInfo object representing the new high score.
     * @throws IOException if there is an error writing the file.
     */
    private void writeHighScoresToFile(PlayerInfo player) throws IOException {
        List<PlayerInfo> highScores = readHighScoresFromFile();
        updatePlayer(highScores, player);
        // Write the updated high scores to file
        synchronized(this) {
            try (ObjectOutputStream objectOutputStream = new ObjectOutputStream(Files.newOutputStream(file.toPath()))) {
                objectOutputStream.writeObject(highScores);
            }
            catch (IOException e) {
                System.err.println("Failed to write high scores file");
                throw new IOException("Failed to write high scores file");
            }
        }
    }

    /**
     Updates the high scores list with the given player's information.
     If the player already exists in the list, their score is updated.
     Otherwise, the player is added to the list.
     @param highScores The current list of high scores.
     @param player The player whose information should be added or updated.
     */
    private static void updatePlayer(List<PlayerInfo> highScores, PlayerInfo player) {
        boolean playerExists = false;
        for (PlayerInfo playerInfo : highScores) {
            if (Objects.equals(playerInfo.getName(), player.getName())) {
                playerExists = true;
                if (player.getScore() < playerInfo.getScore())
                    playerInfo.setScore(player.getScore());
                break;
            }
        }
        if (!playerExists) { highScores.add(player); }
    }

    /**
     Checks if the high scores file exists, and creates it if it doesn't.
     */
    private static void checkIfFileExist() {
        if (!file.exists()) {
            try {
                file.createNewFile();
            } catch (IOException e) {
                System.err.println("Failed to create high scores file");
                e.printStackTrace();
            }
        }
    }
    /**
     Returns a list of the top 5 players, based on their score.
     @param playerInfoList The list of players to sort.
     @return A list of the top players, sorted by score.
     */

    private static List<PlayerInfo> getTopPlayerInfoList(List<PlayerInfo> playerInfoList) {
        return playerInfoList.stream()
                .sorted(Comparator.comparingInt(PlayerInfo::getScore))
                .limit(MAX_SIZE)
                .collect(Collectors.toList());
    }
    public void response(HttpServletResponse response, int statusCode, Object dataToSend) throws IOException{
        response.setContentType("application/json");
        response.setHeader("Access-Control-Allow-Origin", "*");
        response.setCharacterEncoding("UTF-8");
        response.setStatus(statusCode);
        String json = gson.toJson(dataToSend);
        response.getWriter().write(json);
    }

    @Override
    public void init() {
        String path = getServletContext().getRealPath("/") + File.separator + SCORES;
        file = new File(path);

    }
    @Override
    public void destroy() {
    }
}
