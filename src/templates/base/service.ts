export function createBaseService(entity: string, packagePath: string) {
  return (
    "package " +
    packagePath +
    "." +
    entity.toLowerCase() +
    ";\n" +
    "\n" +
    "import org.springframework.stereotype.Service;\n" +
    "\n" +
    "@Service\n" +
    "public class " +
    entity +
    "Service {\n" +
    "    \n" +
    "}"
  );
}
