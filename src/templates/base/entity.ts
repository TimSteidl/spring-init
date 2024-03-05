export function createEntityTemplate(entityName: string, packagePath: string) {
  return (
    "package " +
    packagePath +
    "." +
    entityName.toLowerCase() +
    ";\n" +
    "\n" +
    "import jakarta.persistence.Entity;\n" +
    "import jakarta.persistence.GeneratedValue;\n" +
    "import jakarta.persistence.GenerationType;\n" +
    "import jakarta.persistence.Id;\n\n" +
    "@Entity\n" +
    "public class " +
    entityName +
    " {\n" +
    "    @Id\n" +
    "    @GeneratedValue(strategy = GenerationType.IDENTITY)\n" +
    "    private Long id;\n" +
    "    \n" +
    "    public Long getId() {\n" +
    "        return id;\n" +
    "    }\n" +
    "    \n" +
    "    public void setId(Long id) {\n" +
    "        this.id = id;\n" +
    "    }\n" +
    "}"
  );
}
