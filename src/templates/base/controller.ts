export function createBaseController(entity: string, packagePath: string) {
  return (
    "package " +
    packagePath +
    "." +
    entity.toLowerCase() +
    ";\n" +
    "\n" +
    "import org.springframework.web.bind.annotation.RequestMapping;\n" +
    "import org.springframework.web.bind.annotation.RestController;\n" +
    "\n" +
    "@RestController\n" +
    '@RequestMapping("/api/' +
    entity.toLowerCase() +
    '")\n' +
    "public class " +
    entity +
    "Controller {\n" +
    "    \n" +
    "}"
  );
}
