export function createCrudController(
  entityName: string,
  packagePath: string,
  chosenEndpoints: string[],
) {
  const lowercaseEntityName = entityName.toLowerCase();
  const getEndpoint = chosenEndpoints.includes("GET")
    ? controllerGetEndpoint(entityName, lowercaseEntityName)
    : "";
  const getByIdEndpoint = chosenEndpoints.includes("GET-BY-ID")
    ? controllerGetByIdEndpoint(entityName, lowercaseEntityName)
    : "";
  const postEndpoint = chosenEndpoints.includes("POST")
    ? controllerPostEndpoint(entityName, lowercaseEntityName)
    : "";
  const putEndpoint = chosenEndpoints.includes("PUT")
    ? controllerPutEndpoint(entityName, lowercaseEntityName)
    : "";
  const deleteEndpoint = chosenEndpoints.includes("DELETE")
    ? controllerDeleteEndpoint(entityName, lowercaseEntityName)
    : "";
  return (
    "package " +
    packagePath +
    "." +
    entityName.toLowerCase() +
    ";\n" +
    "\n" +
    "import org.springframework.web.bind.annotation.*;\n" +
    "\n" +
    "import java.util.List;" +
    "\n" +
    "@RestController\n" +
    '@RequestMapping("/api/' +
    lowercaseEntityName +
    '")\n' +
    "public class " +
    entityName +
    "Controller {\n" +
    "    \n" +
    "    private final " +
    entityName +
    "Service " +
    lowercaseEntityName +
    "Service;\n" +
    "    \n" +
    "    public " +
    entityName +
    "Controller(" +
    entityName +
    "Service " +
    lowercaseEntityName +
    "Service) {\n" +
    "        this." +
    lowercaseEntityName +
    "Service = " +
    lowercaseEntityName +
    "Service;\n" +
    "    }\n" +
    "    \n" +
    getEndpoint +
    "    \n" +
    getByIdEndpoint +
    "    \n" +
    postEndpoint +
    "    \n" +
    putEndpoint +
    "    \n" +
    deleteEndpoint +
    "}\n"
  );
}

function controllerGetEndpoint(
  entityName: string,
  lowercaseEntityName: string,
) {
  return (
    "    @GetMapping\n" +
    "    public List<" +
    entityName +
    "> getAll" +
    entityName +
    "s() {\n" +
    "        return " +
    lowercaseEntityName +
    "Service.getAll" +
    entityName +
    "s();\n" +
    "    }\n"
  );
}

function controllerGetByIdEndpoint(
  entityName: string,
  lowercaseEntityName: string,
) {
  return (
    '    @GetMapping("?id=")\n' +
    "    public " +
    entityName +
    " get" +
    entityName +
    "ById(@RequestParam Long id) {\n" +
    "        return " +
    lowercaseEntityName +
    "Service.get" +
    entityName +
    "ById(id);\n" +
    "    }\n"
  );
}

function controllerPostEndpoint(
  entityName: string,
  lowercaseEntityName: string,
) {
  return (
    "    @PostMapping\n" +
    "    public " +
    entityName +
    " create" +
    entityName +
    "(@RequestBody " +
    entityName +
    " " +
    lowercaseEntityName +
    ") {\n" +
    "        return " +
    lowercaseEntityName +
    "Service.create" +
    entityName +
    "(" +
    lowercaseEntityName +
    ");\n" +
    "    }\n"
  );
}

function controllerPutEndpoint(
  entityName: string,
  lowercaseEntityName: string,
) {
  return (
    "    @PutMapping\n" +
    "    public " +
    entityName +
    " update" +
    entityName +
    "(@RequestBody " +
    entityName +
    " " +
    lowercaseEntityName +
    ") {\n" +
    "        return " +
    lowercaseEntityName +
    "Service.update" +
    entityName +
    "(" +
    lowercaseEntityName +
    ");\n" +
    "    }\n"
  );
}

function controllerDeleteEndpoint(
  entityName: string,
  lowercaseEntityName: string,
) {
  return (
    "    @DeleteMapping\n" +
    "    public void delete" +
    entityName +
    "(@RequestBody " +
    "Long" +
    " " +
    "id" +
    ") {\n" +
    "        " +
    lowercaseEntityName +
    "Service.delete" +
    entityName +
    "(" +
    "id" +
    ");\n" +
    "    }\n"
  );
}
