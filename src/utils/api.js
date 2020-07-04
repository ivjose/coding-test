import { getToken } from './auth';

export async function client(
  endpoint,
  { body, ...customConfig } = {},
  textFile = false
) {
  const token = getToken();
  const headers = { 'Content-Type': 'application/json' };
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  const config = {
    method: body ? body.method : 'GET',
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers,
    },
  };
  if (body) {
    config.body = JSON.stringify(body);
  }

  return window
    .fetch(`${process.env.REACT_APP_API_URL}/${endpoint}`, config)
    .then(async (response) => {
      const data = textFile ? await response.text() : await response.json();

      if (response.ok) {
        return data;
      } else {
        return Promise.reject(data);
      }
    });
}
