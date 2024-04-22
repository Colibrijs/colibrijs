import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import path from 'node:path';
import type { PathData } from 'webpack';

export function createMiniCssExtractPlugin(): MiniCssExtractPlugin {
  return new MiniCssExtractPlugin({
    filename: (pathData: PathData) => {
      // @ts-expect-error -- строка вида ./@colibrijs/example/Example/remote.server.js. TS о ней не знает
      const filenameTemplate = pathData.chunk.filenameTemplate;
      const dirname = path.dirname(filenameTemplate);

      return `${dirname}/component.css`;
    },
  });
}
