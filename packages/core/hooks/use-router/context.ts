import { createContext } from 'react';

import type { Router } from './types';

export const RouterContext = createContext<Router>({} as Router);
