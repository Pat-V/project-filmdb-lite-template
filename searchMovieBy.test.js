/* Notes for Babel compatibility:
    chalk is installed in version 4 instead of the latest 
    babel.config has been transformed as .json instead of .js
    note for the future: archive it cause you will not remind everythings here 🤫
*/

import searchMovieBy from "./searchMovieBy.js";
import prompts from "prompts";

jest.mock("prompts");

test("Movie's information corresponds to the movie name", async () => {
  prompts.mockResolvedValue({
    searchString: "Will Hunting",
  });
  const jsonWillUnting = [
    "Will Hunting, un employé de ménage à M.I.T., a un don pour les mathématiques, mais a besoin de l'aide d'un psychologue pour trouver sa voie.",
  ];

  expect(await searchMovieBy("Name")).toEqual(jsonWillUnting);
});
