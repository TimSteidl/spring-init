import { select } from "@inquirer/prompts";
import { Separator } from "@inquirer/select";

export async function selectDepth() {
  return select({
    theme: {
      spinner: {
        interval: 80,
        frames: ["🕒", "🕐", "🕑", "🕒"],
      },
      icon: {
        cursor: "👉",
      },
    },
    message:
      "Select the depth of generation \n left -> right means more will be generated.",
    choices: [
      {
        name: "Class only",
        value: 1,
      },
      new Separator(),
      {
        name: "Dependency Injection",
        value: 2,
      },
      new Separator(),
      {
        name: "Crud Operations",
        value: 3,
      },
    ],
  });
}