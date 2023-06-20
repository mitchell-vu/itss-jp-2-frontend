import React, { useCallback, useContext, useEffect, useState } from 'react';
import { default as Token } from '../utils/token';

let logoutTimer: number;

interface User {
  id: number;
  name: string;
}

interface AuthContextProps {
  user: User | null;
  token?: string | null;
  isLoggedIn: boolean;
  login: (token: string, expirationTime: number, user: User) => void;
  logout: () => void;
}

export const AuthContext = React.createContext<AuthContextProps>({
  user: { id: 1, name: 'Mitchell Vu' },
  token: '',
  isLoggedIn: false,
  login: () => null,
  logout: () => null,
});

const calculateRemainingTime = (expirationTime: string) => {
  const currentTime = new Date().getTime();
  const adjExpirationTime = new Date(expirationTime).getTime();

  const remainingDuration = adjExpirationTime - currentTime;

  return remainingDuration;
};

const retrieveStoredToken = () => {
  const storedToken = Token.getAccessToken();
  const storedExpirationDate = localStorage.getItem('token-expiration-time');
  const storedUserJsonString = localStorage.getItem('current-user');
  let storedUser = null;

  try {
    storedUser = JSON.parse(storedUserJsonString as string);
  } catch (e) {
    if (typeof e === 'string') {
      console.error(e.toUpperCase());
    } else if (e instanceof Error) {
      throw e.message;
    }
  }

  const remainingTime = calculateRemainingTime(storedExpirationDate as string);

  // If remainingTime less than 1 hours
  if (remainingTime <= 3600) {
    Token.removeAccessToken();
    localStorage.removeItem('token-expiration-time');
    return { tokenData: null, userData: null };
  }

  return {
    tokenData: {
      token: storedToken,
      duration: remainingTime,
    },
    userData: storedUser,
  };
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { tokenData, userData } = retrieveStoredToken();
  let initialToken;
  let initialCurrentUser;

  if (tokenData) initialToken = tokenData.token;
  if (userData) initialCurrentUser = userData;

  const [token, setToken] = useState(initialToken);
  const [currentUser, setCurrentUser] = useState(initialCurrentUser ?? {});

  const isLoggedIn = !!token;

  const logoutHandler = useCallback(() => {
    setCurrentUser(null);
    setToken(null);

    Token.removeAccessToken();
    localStorage.removeItem('token-expiration-time');
    localStorage.removeItem('current-user');

    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
  }, []);

  const loginHandler = (token: string, expirationTime: number, user: User) => {
    const expirationDate = new Date();
    expirationDate.setSeconds(expirationDate.getSeconds() + expirationTime);
    setToken(token);
    setCurrentUser(user);

    Token.setAccessToken(token);
    localStorage.setItem('token-expiration-time', expirationDate.toString());
    localStorage.setItem('current-user', JSON.stringify(user));

    const remainingTime = calculateRemainingTime(expirationDate.toString());

    logoutTimer = setTimeout(logoutHandler, remainingTime);
  };

  useEffect(() => {
    if (tokenData) {
      logoutTimer = setTimeout(logoutHandler, tokenData.duration);
    }
  }, [tokenData, logoutHandler]);

  return (
    <AuthContext.Provider
      value={{
        user: currentUser,
        token,
        isLoggedIn,
        login: loginHandler,
        logout: logoutHandler,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  return useContext(AuthContext);
};
