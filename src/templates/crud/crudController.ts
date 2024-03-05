export function createCrudController(entityName: string, packagePath: string) {
  const lowercaseEntityName = entityName.toLowerCase();
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
    "    }\n" +
    "    \n" +
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
    "    }\n" +
    "    \n" +
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
    "    }\n" +
    "    \n" +
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
    "    }\n" +
    "    \n" +
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
    "    }\n" +
    "}"
  );
}
