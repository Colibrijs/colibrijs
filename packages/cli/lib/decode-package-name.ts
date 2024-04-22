/**
 * Декодирует название библиотеки, закодированное с помощью encodePackageName.
 */
export function decodePackageName(name: string): string {
  return name.replaceAll('___', '/@').replaceAll('__', '/').replaceAll('_', '@');
}
