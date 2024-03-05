export function createServiceTemplate(entityName: string, packagePath: string) {
  const lowercaseEntityName = entityName.toLowerCase();
  return (
    "package " +
    packagePath +
    "." +
    entityName.toLowerCase() +
    ";\n" +
    "\n" +
    "import org.springframework.stereotype.Service;\n" +
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
    "}"
  );
}
