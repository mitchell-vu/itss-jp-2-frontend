// get access token from local storage
const getAccessToken = () => {
  return localStorage.getItem('access-token');
};

// set access token to local storage
const setAccessToken = (accessToken: string) => {
  localStorage.setItem('access-token', accessToken);
};

// remove access token from local storage
const removeAccessToken = () => {
  localStorage.removeItem('access-token');
};

const token = {
  getAccessToken,
  setAccessToken,
  removeAccessToken,
};

export default token;
