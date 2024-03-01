export function createCrudService(entityName: string) {
  const lowercaseEntityName = entityName.toLowerCase();
  return (
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
    "    public List<" +
    entityName +
    "> getAll" +
    entityName +
    "s() {\n" +
    "        return " +
    lowercaseEntityName +
    "Repository.findAll();\n" +
    "    }\n" +
    "\n" +
    "    public " +
    entityName +
    " get" +
    entityName +
    "ById(Long id) {\
                \n        return " +
    lowercaseEntityName +
    "Repository.findById(id).orElse(null);\
                \n    }\n" +
    "\n" +
    "    public " +
    entityName +
    " create" +
    entityName +
    "(" +
    entityName +
    " " +
    lowercaseEntityName +
    ") {\
                \n        return " +
    lowercaseEntityName +
    "Repository.save(" +
    lowercaseEntityName +
    ");\
                \n    }\n" +
    "\n" +
    "    public " +
    entityName +
    " update" +
    entityName +
    "(" +
    entityName +
    " " +
    lowercaseEntityName +
    ") {\
                \n        return " +
    lowercaseEntityName +
    "Repository.save(" +
    lowercaseEntityName +
    ");\
                \n    }\n" +
    "\n" +
    "    public void delete" +
    entityName +
    "(Long id) {\
                \n        " +
    lowercaseEntityName +
    "Repository.deleteById(id);\
                \n    }\n" +
    "}"
  );
}