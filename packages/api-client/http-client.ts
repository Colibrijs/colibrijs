import axios from 'axios';

import type { HttpClient } from './types';

export const httpClient: HttpClient = axios.create({
  baseURL: String(process.env.COLIBRIJS_API_BASE_URL),
});
