const API_KEY = 'reqres-free-v1';
export const apiPath = import.meta.env.VITE_API_URL;
export const headers = {
  'x-api-key': API_KEY,
  Accept: 'application/json',
};
