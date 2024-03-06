export function createCrudService(
  entityName: string,
  packagePath: string,
  chosenEndpoints: string[],
) {
  const lowercaseEntityName = entityName.toLowerCase();
  const getEndpoint = chosenEndpoints.includes("GET")
    ? serviceGetEndpoint(entityName, lowercaseEntityName)
    : "";
  const getByIdEndpoint = chosenEndpoints.includes("GET-BY-ID")
    ? serviceGetByIdEndpoint(entityName, lowercaseEntityName)
    : "";
  const postEndpoint = chosenEndpoints.includes("POST")
    ? servicePostEndpoint(entityName, lowercaseEntityName)
    : "";
  const putEndpoint = chosenEndpoints.includes("PUT")
    ? servicePutEndpoint(entityName, lowercaseEntityName)
    : "";
  const deleteEndpoint = chosenEndpoints.includes("DELETE")
    ? serviceDeleteEndpoint(entityName, lowercaseEntityName)
    : "";
  return (
    "package " +
    packagePath +
    "." +
    entityName.toLowerCase() +
    ";\n" +
    "\n" +
    "import org.springframework.stereotype.Service;\n" +
    "\n" +
    "import java.util.List;\n" +
    "\n" +
    "@Service\n" +
    "public class " +
    entityName +
    "Service {\n" +
    "    \n" +
    "    private final " +
    entityName +
    "Repository " +
    lowercaseEntityName +
    "Repository;\n" +
    "    \n" +
    "    public " +
    entityName +
    "Service(" +
    entityName +
    "Repository " +
    lowercaseEntityName +
    "Repository) {\n" +
    "        this." +
    lowercaseEntityName +
    "Repository = " +
    lowercaseEntityName +
    "Repository;\n" +
    "    }\n" +
    "    \n" +
    getEndpoint +
    "\n" +
    getByIdEndpoint +
    "\n" +
    postEndpoint +
    "\n" +
    putEndpoint +
    "\n" +
    deleteEndpoint +
    "}\n"
  );
}

function serviceGetEndpoint(entityName: string, lowercaseEntityName: string) {
  return (
    "    public List<" +
    entityName +
    "> getAll" +
    entityName +
    "s() {\n" +
    "        return " +
    lowercaseEntityName +
    "Repository.findAll();\n" +
    "    }\n"
  );
}

function servicePostEndpoint(entityName: string, lowercaseEntityName: string) {
  return (
    "    public " +
    entityName +
    " create" +
    entityName +
    "(" +
    entityName +
    " " +
    lowercaseEntityName +
    ") {\n" +
    "        return " +
    lowercaseEntityName +
    "Repository.save(" +
    lowercaseEntityName +
    ");\n" +
    "    }\n"
  );
}

function servicePutEndpoint(entityName: string, lowercaseEntityName: string) {
  return (
    "    public " +
    entityName +
    " update" +
    entityName +
    "(" +
    entityName +
    " " +
    lowercaseEntityName +
    ") {\n" +
    "        return " +
    lowercaseEntityName +
    "Repository.save(" +
    lowercaseEntityName +
    ");\n" +
    "    }\n"
  );
}

function serviceGetByIdEndpoint(
  entityName: string,
  lowercaseEntityName: string,
) {
  return (
    "    public " +
    entityName +
    " get" +
    entityName +
    "ById(Long id) {\n" +
    "        return " +
    lowercaseEntityName +
    "Repository.findById(id).orElse(null);\n" +
    "    }\n"
  );
}

function serviceDeleteEndpoint(
  entityName: string,
  lowercaseEntityName: string,
) {
  return (
    "    public void delete" +
    entityName +
    "(Long id) {\n" +
    "        " +
    lowercaseEntityName +
    "Repository.deleteById(id);\n" +
    "    }\n"
  );
}
