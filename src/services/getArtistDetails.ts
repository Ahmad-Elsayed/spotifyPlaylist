import { Artist } from '../types';
import { httpCall } from './utils';

export default function (apiToken: string, url: string): Promise<Artist> {
  const token = `Bearer ${apiToken}`;

  return httpCall({ url, token, method: 'get' });
}
