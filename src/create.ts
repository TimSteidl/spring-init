import fs from "fs";
import { createBaseController } from "./templates/base/controller";
import { createBaseService } from "./templates/base/service";
import { createServiceTemplate } from "./templates/injected/injectedService";
import { createControllerTemplate } from "./templates/injected/injectedController";
import { createCrudService } from "./templates/crud/crudService";
import { createCrudController } from "./templates/crud/crudController";
import { createEntityTemplate } from "./templates/base/entity";
import { createRepositoryTemplate } from "./templates/base/repository";

export function createBaseClasses(entity: string) {
  fs.writeFileSync(
    "./" + entity + "/" + entity + "Service.java",
    createBaseService(entity),
  );
  fs.writeFileSync(
    "./" + entity + "/" + entity + "Controller.java",
    createBaseController(entity),
  );
}

export function writeWithDependencyInjection(entity: string) {
  fs.writeFileSync(
    "./" + entity + "/" + entity + "Service.java",
    createServiceTemplate(entity),
  );
  fs.writeFileSync(
    "./" + entity + "/" + entity + "Controller.java",
    createControllerTemplate(entity),
  );
}

export function writeWithCrudOperations(entity: string) {
  fs.writeFileSync(
    "./" + entity + "/" + entity + "Service.java",
    createCrudService(entity),
  );
  fs.writeFileSync(
    "./" + entity + "/" + entity + "Controller.java",
    createCrudController(entity),
  );
}

export function writeEntityAndRepository(entity: string) {
  fs.writeFileSync(
    "./" + entity + "/" + entity + ".java",
    createEntityTemplate(entity),
  );
  console.log(`Created entity ${entity} in: ` + process.cwd() + "/" + entity);
  fs.writeFileSync(
    "./" + entity + "/" + entity + "Repository.java",
    createRepositoryTemplate(entity),
  );
  console.log(
    `Created repository ${entity}Repository in: ` +
      process.cwd() +
      "/" +
      entity,
  );
}