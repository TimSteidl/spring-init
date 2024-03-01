import { Command } from "commander";
import { getPackageInfo } from "../src/utils/get-package-info";
import { init } from "./commands/init";

process.on("SIGINT", () => process.exit(0));
process.on("SIGTERM", () => process.exit(0));

async function main() {
  const packageInfo = getPackageInfo();
  const program = new Command()
    .name("spring-init")
    .description("add components and dependencies to your project")
    .version(
      packageInfo.version || "1.0.0",
      "-v, --version",
      "display the version number",
    );
  program.addCommand(init);
  program.parse();
}

main();
