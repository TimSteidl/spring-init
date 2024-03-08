#!/usr/bin/env node
import { create } from "./commands/create.js";
import { getPackageInfo } from "./utils/get-package-info.js";
import { Command } from "commander";
import changeDirectory from "./utils/get-package-path.js";
import { addMavenDependencies } from "./utils/add-maven-dependencies.js";

let sourceDirectory = process.cwd();

process.on("SIGINT", () => {
  process.chdir(sourceDirectory);
  process.exit(0);
});
process.on("SIGTERM", () => {
  process.chdir(sourceDirectory);
  process.exit(0);
});

async function main() {
  const packageInfo = getPackageInfo();
  console.log("Welcome to spring-init@" + packageInfo.version);
  addMavenDependencies();
  sourceDirectory = process.cwd();
  changeDirectory();
  new Command()
    .name("spring-init")
    .version(packageInfo.version || "1.0.0")
    .addCommand(create)
    .parse();
  process.chdir(sourceDirectory);
}

main();
