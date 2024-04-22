import type { RuleSetRule } from 'webpack';

import { getCssLoaders } from './css';
import { getJavascriptLoaders } from './javascript';
import { getTypescriptLoaders } from './typescript';

export function getRules(): RuleSetRule[] {
  return [getCssLoaders(), getJavascriptLoaders(), getTypescriptLoaders()];
}
