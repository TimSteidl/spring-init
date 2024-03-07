import * as fs from "fs";
import { createEntityTemplate } from "../templates/base/entity.js";
import { createBaseService } from "../templates/base/service.js";
import { createCrudController } from "../templates/crud/crudController.js";
import { createCrudService } from "../templates/crud/crudService.js";
import { createControllerTemplate } from "../templates/injected/injectedController.js";
import { createServiceTemplate } from "../templates/injected/injectedService.js";
import { createBaseController } from "../templates/base/controller.js";
import { createRepositoryTemplate } from "../templates/base/repository.js";
import chalk from "chalk";


export function createBaseClasses(entity: string, packagePath: string) {
  fs.writeFileSync(
    "./" + entity + "/" + entity + "Service.java",
    createBaseService(entity, packagePath),
  );
  fs.writeFileSync(
    "./" + entity + "/" + entity + "Controller.java",
    createBaseController(entity, packagePath),
  );
}

export function writeWithDependencyInjection(
  entity: string,
  packagePath: string,
) {
  fs.writeFileSync(
    "./" + entity + "/" + entity + "Service.java",
    createServiceTemplate(entity, packagePath),
  );
  fs.writeFileSync(
    "./" + entity + "/" + entity + "Controller.java",
    createControllerTemplate(entity, packagePath),
  );
}

export function writeWithCrudOperations(
  entity: string,
  packagePath: string,
  chosenEndpoints: string[],
) {
  fs.writeFileSync(
    "./" + entity + "/" + entity + "Service.java",
    createCrudService(entity, packagePath, chosenEndpoints),
  );
  fs.writeFileSync(
    "./" + entity + "/" + entity + "Controller.java",
    createCrudController(entity, packagePath, chosenEndpoints),
  );
}

export function writeEntityAndRepository(entity: string, packagePath: string) {
  fs.writeFileSync(
    "./" + entity + "/" + entity + ".java",
    createEntityTemplate(entity, packagePath),
  );
  console.log(
    chalk.green(`Created entity ${entity} in: ` + process.cwd() + "/" + entity),
  );
  fs.writeFileSync(
    "./" + entity + "/" + entity + "Repository.java",
    createRepositoryTemplate(entity, packagePath),
  );
  console.log(
    chalk.green(
      `Created repository ${entity}Repository in: ` +
        process.cwd() +
        "/" +
        entity,
    ),
  );
}