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
import java.util.logging.Logger;
import java.util.stream.Collectors;
import javax.servlet.http.*;
import javax.servlet.annotation.*;

import static java.lang.System.out;

/* You can delete this comment before submission - it's only here to help you get started.
Your servlet should be available at "/java_react_war/api/highscores"
assuming you don't modify the application's context path (/java_react_war).
on the client side, you can send request to the servlet using:
fetch("/java_react_war/api/highscores")
*/

@WebServlet(name = "ServletApi", value = "/api/highscores")
public class ApiServlet extends HttpServlet {
    private static File file;
    private static final Logger logger = Logger.getLogger(ApiServlet.class.getName());
    private static final String SCORES = "scores.dat";
    private static List<PlayerInfo> playerInfoList = new ArrayList<>();
    private static String path;
    private Gson gson = new Gson();

    /**
     * @param request
     * @param response
     * @throws IOException
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        playerInfoList = readHighScoresFromFile();

        // Return the high scores as a JSON array
        response.setHeader("Access-Control-Allow-Origin", "*");

        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");
        out.println("Content type: " + response.getContentType());

        String json = gson.toJson(playerInfoList);
        PrintWriter out = response.getWriter();
        out.print(json);
        out.flush();
    }

    /**
     * @param request
     * @param response
     * @throws IOException
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
        try {
            JsonObject json = JsonParser.parseReader(request.getReader()).getAsJsonObject();
            response.setHeader("Access-Control-Allow-Origin", "*");

            String name = json.get("username").getAsString();
            int score = json.get("score").getAsInt();

            // Add the new player score to the high scores set
            if (name == null) {
                response.setStatus(400);
                response.getWriter().println("Bad request");
                return;
            }
            PlayerInfo newPlayer = new PlayerInfo(name, score);
            // Write the updated high scores to file
            writeHighScoresToFile(newPlayer);
            response.setCharacterEncoding("UTF-8");
            response.getWriter().println("Score saved to file successfully");
        } catch (Exception e) {
            response.setStatus(500);
            response.getWriter().println(e.getMessage());

        }
    }
//


    @Override
    public void init() {
        path = getServletContext().getRealPath("/") + File.separator + SCORES;
        logger.info(path);
        file = new File(path);

    }

    private static List<PlayerInfo> readHighScoresFromFile() throws IOException {

        if (!file.exists()) {
            try {
                file.createNewFile();
            } catch (IOException e) {
                System.err.println("Failed to create high scores file");
                e.printStackTrace();
            }
        }
        List<PlayerInfo> highScoresList = new ArrayList<>();
        try (ObjectInputStream objectInputStream = new ObjectInputStream(Files.newInputStream(file.toPath()))) {
            highScoresList = (List<PlayerInfo>) objectInputStream.readObject();
            return highScoresList;
        } catch (EOFException ignored) {
            return highScoresList;
        } catch (IOException | ClassNotFoundException e) {
            System.err.println("Failed to read high scores file");
            e.printStackTrace();
            return highScoresList;
        }
    }


    private static void writeHighScoresToFile(PlayerInfo player) throws IOException {
        List<PlayerInfo> highScores = readHighScoresFromFile();
        upadtePlayer(highScores, player);

        List<PlayerInfo> topPlayers = highScores.stream()
                .sorted(Comparator.comparingInt(PlayerInfo::getScore))
                .limit(5)
                .collect(Collectors.toList());
        // Write the updated high scores to file
        try (ObjectOutputStream objectOutputStream = new ObjectOutputStream(Files.newOutputStream(file.toPath()))) {
            objectOutputStream.writeObject(topPlayers);
            objectOutputStream.flush();
        } catch (IOException e) {
            System.err.println("Failed to write high scores file");
            throw new IOException("Failed to write high scores file");
        }
    }



    private static void upadtePlayer(List<PlayerInfo> highScores, PlayerInfo player) {
        boolean playerExists = false;
        for (PlayerInfo playerInfo : highScores) {
            if (Objects.equals(playerInfo.getName(), player.getName())) {
                playerExists = true;
                if (playerInfo.getScore() < player.getScore()) {
                    playerInfo.setScore(player.getScore());
                }
                break;
            }
        }
        if (!playerExists) {
            highScores.add(player);
        }
        // highScores.add(player);
    }


    @Override
    public void destroy() {
    }
}
