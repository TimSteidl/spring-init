export function createControllerTemplate(entityName: string) {
  const lowercaseEntityName = entityName.toString().toLowerCase();
  return (
    "import org.springframework.web.bind.annotation.RestController;\n" +
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
    "}"
  );
}