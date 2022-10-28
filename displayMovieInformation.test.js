import displayMovieInformation from "./displayMovieInformation.js";

test("Movie's information displayed corresponds to the selected movie", () => {
  // this test set uses a variable in displayMovieInformation,
  // that returns the synopsis of the selected movie

  expect(displayMovieInformation("Dogma")).toBe(
    "Une employée de clinique d'avortement est choisie pour sauver l'humanité de deux anges déchus, essayant d'exploiter une faille et de rentrer au Paradis."
  );
});
