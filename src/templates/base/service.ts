export function createBaseService(entity: string) {
  return (
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