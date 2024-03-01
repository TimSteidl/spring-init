export function createRepositoryTemplate(entityName: string) {
  return (
    "import org.springframework.data.jpa.repository.JpaRepository;\n\n" +
    "public interface " +
    entityName +
    "Repository extends JpaRepository<" +
    entityName +
    ", Long>{\n" +
    "    \n" +
    "}"
  );
}