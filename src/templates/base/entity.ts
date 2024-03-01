export function createEntityTemplate(entityName: string) {
  return (
    "import javax.persistence.Entity;\n" +
    "import javax.persistence.GeneratedValue;\n" +
    "import javax.persistence.GenerationType;\n" +
    "import javax.persistence.Id;\n\n" +
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