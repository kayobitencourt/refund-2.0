import { useState } from 'react';
import { createContext, ReactNode } from 'react';

type AuthContext = {
  session: null | UserApiResponse;
  save: (data: UserApiResponse) => void;
};

export const AuthContext = createContext({} as AuthContext);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<null | UserApiResponse>(null);

  function save(data: UserApiResponse) {
    setSession(data);
  }

  return <AuthContext.Provider value={{ session, save }}>{children}</AuthContext.Provider>;
}
