#!/usr/bin/env node
import { create } from "./commands/create";
import { getPackageInfo } from "./utils/get-package-info";
import { Command } from "commander";
import changeDirectory from "./utils/get-package-path";

process.on("SIGINT", () => process.exit(0));
process.on("SIGTERM", () => process.exit(0));

async function main() {
  const packageInfo = getPackageInfo();
  console.log("Welcome to spring-init@" + packageInfo.version);
  changeDirectory();
  new Command()
    .name("spring-init")
    .version(packageInfo.version || "1.0.0")
    .addCommand(create)
    .parse();
}

main();
