import type { RuleSetRule } from 'webpack';

import { getCssLoaders } from './css';
import { getJavascriptLoaders } from './javascript';
import { getTypescriptLoaders } from './typescript';
import type { Settings } from '../../types';

export function getRules(settings: Settings): RuleSetRule[] {
  return [getCssLoaders(settings), getJavascriptLoaders(), getTypescriptLoaders()];
}
