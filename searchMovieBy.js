import fs from "fs";
import prompts from "prompts";
import displayMovieInformation from "./displayMovieInformation.js";

export default async function searchMovieBy(criteria) {
  const allMoviesPath = "./collection.json";
  const allMovies = JSON.parse(fs.readFileSync(allMoviesPath, "utf-8"));
  let movieName = "";

  const promptResult = await prompts({
    type: "text",
    name: "searchString",
    message: `Enter a search string for the criteria ${criteria}: `,
  });

  console.log(
    "\n",
    `Ok now let search for [${criteria}] equals to "${promptResult.searchString}" in our great Movie Database`,
    "\n"
  );
  let results = [];
  for (const movie of allMovies.collection) {
    movieName = movie.Name;
    if (movie[criteria] === promptResult.searchString) {
      console.log("found it!");
      results.push(displayMovieInformation(movieName));
    }
  }
  return results;
}
