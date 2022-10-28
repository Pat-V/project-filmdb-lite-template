import chalk from "chalk";
import prompts from "prompts";
import fs from "fs";

export default async function addMovie() {
  let allMoviesPath = "./collection.json";
  let allMovies = JSON.parse(fs.readFileSync(allMoviesPath, "utf-8"));

  console.log(
    chalk.bgGreenBright.bold("\n OMG we have something new here 🤩 \n")
  );

  const promptMovieName = await prompts({
    type: "text",
    name: "movieName",
    message: "Please let start by entering the movie name: ",
  });
  const promptMovieYear = await prompts({
    type: "text",
    name: "movieYear",
    message: "what is the release date? ",
  });
  const promptPoster = await prompts({
    type: "text",
    name: "moviePoster",
    message: "what is the link to the poster? ",
  });
  const promptLink = await prompts({
    type: "text",
    name: "movieLink",
    message: "what is the link to the video? ",
  });
  const promptActors = await prompts({
    type: "text",
    name: "movieActors",
    message: "Who are main actors?",
  });
  const promptSynopsis = await prompts({
    type: "text",
    name: "movieSynopsis",
    message: "Which synopsis you want to display for information?",
  });
  const promptGenre = await prompts({
    type: "text",
    name: "movieGenre",
    message: "What is your idea about the genre?",
  });
  const promptRealisator = await prompts({
    type: "text",
    name: "movieRealisator",
    message: "Whos is the realisator (only one permitted cause db limitation)?",
  });

  console.log(chalk.bgGreenBright.bold("\n K now trying to add it ... 💪"));

  let newMovie = {
    Name: promptMovieName.movieName,
    Year: promptMovieYear.movieYear,
    Pict: promptPoster.moviePoster,
    Link: promptLink.movieLink,
    Actors: promptActors.movieActors,
    Synopsis: promptSynopsis.movieSynopsis,
    Genre: promptGenre.movieGenre,
    Realisator: promptRealisator.movieRealisator,
  };
  allMovies.collection.push(newMovie);
  fs.writeFileSync(allMoviesPath, JSON.stringify(allMovies));

  console.log(
    chalk.bgGreenBright.bold("\n The new movie is available in your database.")
  );
}
