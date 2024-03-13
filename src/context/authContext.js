import { createContext } from "react";

export const AuthContext = createContext({
    authStatus: false,
    setAuthStatus: () => {},
  });

export const AuthProvider = AuthContext.Provider;

export default AuthContext;