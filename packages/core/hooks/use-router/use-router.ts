import { useContext } from 'react';

import { RouterContext } from './context';
import type { Router } from './types';

export function useRouter(): Router {
  return useContext(RouterContext);
}
