export function createRepositoryTemplate(
  entityName: string,
  packagePath: string,
) {
  return (
    "package " +
    packagePath +
    "." +
    entityName.toLowerCase() +
    ";\n" +
    "\n" +
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
