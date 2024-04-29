export type Router = {
  pathname: string;
  query: NodeJS.Dict<string | string[]>;
  route: string;
  push: (url: string | URL) => void;
};
