import chalk from "chalk";
import prompts from "prompts";

async function app() {
  console.log(chalk.bgBlue("Bienvenue !"));

  const promptResult = await prompts({
    type: "text",
    name: "firstName",
    message: "Quel est ton nom?",
  });

  console.log(chalk.redBright.bold(`Bienvenue ${promptResult.firstName} !`));
}

app();
