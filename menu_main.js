import menu from "terminal-menu";
import chalk from "chalk";
import displayAllMovies from "./menu_allMovies.js";
import searchMovieBy from "./searchMovieBy.js";
import addMovie from "./addMovie.js";

export default async function openMainMenu() {
  let searchMenu = menu({ width: 40, x: 2, y: 2 });

  //Note: 'with()' statement is deprecated in strict mode so repeating 'searchMenu' instead
  searchMenu.reset();
  searchMenu.write(
    chalk.bgBlueBright.white.bold("Allez cherche un film qui te plairait 🙂\n")
  );
  searchMenu.write("----------------------------------------\n");
  searchMenu.add("List of all movies");
  searchMenu.add("Search by name");
  searchMenu.add("Search by year");
  searchMenu.add("Search by genre");
  searchMenu.add("Search by actor");
  searchMenu.add("Search by realisator");
  searchMenu.write(chalk.bgBlueBright.white.bold("\n"));
  searchMenu.write(
    chalk.bgBlueBright.white.bold("Ou bien gère la database              🔧\n")
  );
  searchMenu.write("----------------------------------------\n");
  searchMenu.add("Add a movie");
  searchMenu.add("Modify a movie");
  searchMenu.add("Remove a movie");
  searchMenu.write(chalk.bgBlueBright.white.bold("\n"));
  searchMenu.write(
    chalk.bgBlueBright.white.bold("Ou bien reviens plus tard             🚪\n")
  );
  searchMenu.write("----------------------------------------\n");
  searchMenu.add("EXIT");

  process.stdin.pipe(searchMenu.createStream()).pipe(process.stdout);

  process.stdin.setRawMode(true);
  searchMenu.on("close", function () {
    process.stdin.setRawMode(false);
    process.stdin.end();
  });

  const searchMenuPromise = () => {
    return new Promise((resolve, reject) => {
      searchMenu.on("select", (label) => {
        resolve(label);
      });
    });
  };

  const label = await searchMenuPromise();

  searchMenu.close();
  switch (label) {
    case "List of all movies":
      displayAllMovies();
      break;
    case "Search by name":
      await searchMovieBy("Name");
      break;
    case "Search by year":
      searchMovieBy("Year");
      break;
    case "Search by genre":
      searchMovieBy("Genre");
      break;
    case "Search by actor":
      searchMovieBy("Actors");
      break;
    case "Search by realisator":
      searchMovieBy("Realisator");
      break;
    case "Add a movie":
      addMovie();
      break;
  }
}
