import { input, confirm } from "@inquirer/prompts";
import { Command } from "commander";
import { selectDepth } from "../utils/select-depth";
import {
  writeEntityAndRepository,
  createBaseClasses,
  writeWithDependencyInjection,
  writeWithCrudOperations,
} from "../utils/write-to-file";
import fs from "fs";

export const create = new Command()
  .command("create")
  .description("create a new spring project")
  .action(async () => {
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
  });
