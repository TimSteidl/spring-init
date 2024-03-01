import { confirm, input } from "@inquirer/prompts";
import * as fs from "fs";
import { selectDepth } from "./src/select-depth";
import {
  createBaseClasses,
  writeEntityAndRepository,
  writeWithCrudOperations,
  writeWithDependencyInjection,
} from "./src/create";

process.on("SIGINT", () => process.exit(0));
process.on("SIGTERM", () => process.exit(0));

async function main() {
  console.log("Welcome to spring-init");
  const isWriting = true;
  while (isWriting) {
    let entity = await input({
      theme: {
        spinner: {
          interval: 80,
          frames: ["🕒", "🕐", "🕑", "🕒"],
        },
      },
      message: "Enter the name of the Entity you want to create",
    });
    const depth = await selectDepth();
    entity = entity.toString().trim();
    if (!fs.existsSync(entity.toLowerCase())) {
      fs.mkdirSync(entity.toLowerCase());
    }
    writeEntityAndRepository(entity);
    if (depth === 1) {
      createBaseClasses(entity);
    } else if (depth === 2) {
      writeWithDependencyInjection(entity);
    } else if (depth === 3) {
      writeWithCrudOperations(entity);
    }
    console.log(
      `Created service ${entity}Service in: ` + process.cwd() + "/" + entity,
    );
    console.log(
      "Created controller " +
        entity +
        "Controller in: " +
        process.cwd() +
        "/" +
        entity,
    );
    const continueWriting = await confirm({
      theme: {
        spinner: {
          interval: 80,
          frames: ["🕒", "🕐", "🕑", "🕒"],
        },
      },
      message: "Do you want to create another entity?",
    });
    if (!continueWriting) {
      process.exit(0);
    }
  }
}

main();