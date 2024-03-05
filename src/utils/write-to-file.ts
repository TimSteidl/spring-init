import * as fs from "fs";
import { createEntityTemplate } from "../templates/base/entity";
import { createBaseService } from "../templates/base/service";
import { createCrudController } from "../templates/crud/crudController";
import { createCrudService } from "../templates/crud/crudService";
import { createControllerTemplate } from "../templates/injected/injectedController";
import { createServiceTemplate } from "../templates/injected/injectedService";
import { createBaseController } from "../templates/base/controller";
import { createRepositoryTemplate } from "../templates/base/repository";

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

export function writeWithCrudOperations(entity: string, packagePath: string) {
  fs.writeFileSync(
    "./" + entity + "/" + entity + "Service.java",
    createCrudService(entity, packagePath),
  );
  fs.writeFileSync(
    "./" + entity + "/" + entity + "Controller.java",
    createCrudController(entity, packagePath),
  );
}

export function writeEntityAndRepository(entity: string, packagePath: string) {
  fs.writeFileSync(
    "./" + entity + "/" + entity + ".java",
    createEntityTemplate(entity, packagePath),
  );
  console.log(`Created entity ${entity} in: ` + process.cwd() + "/" + entity);
  fs.writeFileSync(
    "./" + entity + "/" + entity + "Repository.java",
    createRepositoryTemplate(entity, packagePath),
  );
  console.log(
    `Created repository ${entity}Repository in: ` +
      process.cwd() +
      "/" +
      entity,
  );
}
