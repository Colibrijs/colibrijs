declare module '*.css' {
  declare const styles: Record<string, string>;

  // eslint-disable-next-line import/no-default-export -- css modules делают export default
  export default styles;
}
