import { useRouter } from 'next/router';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { AuthService } from 'services';
interface AuthContextData {
  signed: boolean;
  token: string;
  signIn(email: string, password: string): Promise<void>;
  signOut(): void;
}

export const AuthContext = createContext<AuthContextData>({
  signed: false,
} as AuthContextData);
const TOKEN_NAME = '@GM-TOKEN';

interface Props {
  children: any;
}

export const AuthProvider = ({ children }: Props) => {
  const [token, setToken] = useState<string>(null);
  const [signed, setSigned] = useState(false);

  const { pathname } = useRouter();

  // verify token in every route change
  useEffect(() => {
    async function loadTokenFromStorage() {
      const token = sessionStorage.getItem(TOKEN_NAME);
      if (token) {
        setToken(token);
        setSigned(!StringUtil.isEmpty(token));
      }
    }
    loadTokenFromStorage();
  }, [pathname]);

  // function to get token user
  async function signIn(email: string, passwrod: string) {
    const token = await AuthService.signIn(email, passwrod);

    if (sessionStorage) {
      sessionStorage.setItem(TOKEN_NAME, token);
    }
    setToken(token);
  }

  // function to clear token
  const signOut = () => {
    setToken(null);
    sessionStorage.removeItem(TOKEN_NAME);
  };

  return (
    <AuthContext.Provider value={{ signed, token, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext<AuthContextData>(AuthContext);

export class StringUtil {
  static isEmpty<T>(any: T): boolean {
    return any == null || (typeof any === 'string' && any.trim().length === 0);
  }
}

export const ProtectRoute = ({ children }) => {
  // const { signed } = useAuth();
  // const router = useRouter();

  // TODO protect router access by token

  return children;
};
