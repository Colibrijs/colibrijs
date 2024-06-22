import axios from 'axios';

import { NotFoundError } from './errors';
import type { HttpClient } from './types';

export const httpClient: HttpClient = axios.create({
  baseURL: String(process.env.COLIBRIJS_API_BASE_URL),
  transformResponse: (rawResponse) => {
    const response = JSON.parse(rawResponse);

    if (
      typeof response === 'object' &&
      response !== null &&
      'statusCode' in response &&
      response.statusCode === 404
    ) {
      throw new NotFoundError();
    }

    return response;
  },
});
