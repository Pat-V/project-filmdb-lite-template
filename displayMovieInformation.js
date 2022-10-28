import chalk from "chalk";
import fs from "fs";

export default function displayMovieInformation(movieName) {
  let allMoviesPath = "./collection.json";
  let allMovies = JSON.parse(fs.readFileSync(allMoviesPath, "utf-8"));

  // in order to make unit test with this console application,
  // unitTestCheck will store and return a relevant information to the test function
  let unitTestCheck = "";

  console.log("\n", chalk.blue.bold(`Information for ${movieName}`), "\n");
  for (const movie of allMovies.collection) {
    if (movie.Name === movieName) {
      console.log(chalk.blue.bold("Release year:"), movie.Year);
      console.log(chalk.blue.bold("Poster:"), movie.Pict);
      console.log(chalk.blue.bold("Video link:"), movie.Link);
      console.log(chalk.blue.bold("Main actors:"), movie.Actors);
      console.log(chalk.blue.bold("Genre:"), movie.Genre);
      console.log(chalk.blue.bold("Realisator:"), movie.Realisator);
      console.log(chalk.blue.bold("Synopsis:"), movie.Synopsis);
      unitTestCheck = movie.Synopsis;
    }
  }
  return unitTestCheck;
}
