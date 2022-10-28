import menu from "terminal-menu";
import fs from "fs";
import chalk from "chalk";
import displayMovieInformation from "./displayMovieInformation.js";

export default function displayAllMovies() {
  let allMoviesPath = "./collection.json";
  let allMovies = JSON.parse(fs.readFileSync(allMoviesPath, "utf-8"));
  let searchMenu = menu({ width: 34, x: 2, y: 2 });

  searchMenu.reset();
  searchMenu.write(
    chalk.bgBlueBright.white.bold("🎬 List of all available movies 🎬\n")
  );
  searchMenu.write("----------------------------------\n");
  for (const movie of allMovies.collection) {
    searchMenu.add(movie.Name);
  }

  searchMenu.on("select", function (movieName) {
    searchMenu.close();
    displayMovieInformation(movieName);
  });

  process.stdin.pipe(searchMenu.createStream()).pipe(process.stdout);

  process.stdin.setRawMode(true);
  searchMenu.on("close", function () {
    process.stdin.setRawMode(false);
    process.stdin.end();
  });
}
