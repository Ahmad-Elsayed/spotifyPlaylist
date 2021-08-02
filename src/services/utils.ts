import { httpOptions } from '../types';

async function httpCall(options: httpOptions) {
  const requestHeaders: HeadersInit_ = new Headers();
  requestHeaders.set(
    'Content-Type',
    'application/x-www-form-urlencoded;charset=UTF-8',
  );
  requestHeaders.set('Authorization', options.token);

  const fetchOptions = {
    headers: requestHeaders,
    method: options.method,
    body: options.body,
  };

  const response = await fetch(options.url, fetchOptions);
  const jsonResponse = await response.json();
  if (jsonResponse?.error) {
    throw jsonResponse.error;
  }

  return jsonResponse;
}

export { httpCall };
