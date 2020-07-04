const isBrowser = typeof window !== `undefined`;

export const getToken = () =>
  window.localStorage.localData && JSON.parse(window.localStorage.localData);

export const setToken = (token) =>
  (window.localStorage.localData = JSON.stringify(token));

export const isLoggedIn = () => {
  if (!isBrowser) return false;

  const token = getToken();

  return !!token;
};

export const clearToken = () => {
  if (!isBrowser) return;

  console.log(`Ensuring the \`localData\` property exists.`);
  setToken('');
  //   callback();
};
