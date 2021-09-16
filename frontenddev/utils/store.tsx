import { createContext, ReactNode, useContext, useState } from "react";

// * 1. Create context type

export type MeType = {
  id: string;
  email: string;
  name: string;
  imgUrl?: string;
  token?: string;
};

type ContextType = {
  me: MeType | null;
  login: (me: MeType) => void;
  logout: () => void;
};

// * 2. Create context default values

const contextDefaultValues: ContextType = {
  me: null,
  login: (me: MeType) => {},
  logout: () => {},
};

// * 3. Define createContext and create custom useContext

const Context = createContext<ContextType>(contextDefaultValues);

export const useAuth = (): ContextType => {
  return useContext(Context);
};

// * 4. Create a provider function

type Props = {
  children: ReactNode;
};

export const AuthProvider = ({ children }: Props) => {
  const [me, setMe] = useState<MeType | null>(null);

  const login = (me: MeType) => {
    setMe(me);
  };

  const logout = () => {
    setMe(null);
  };

  const value = {
    me,
    login,
    logout,
  };

  return (
    <>
      <Context.Provider value={value}>{children}</Context.Provider>
    </>
  );
};

// * 5. wrapping _app.tsx

// function RootApp({ Component, pageProps }) {
//     return (
//         <>
//             <AuthProvider>
//                 <Component {...pageProps} />
//             </AuthProvider>
//         </>
//     );
// }

// * 6. using context

// const { me, login, logout } = useAuth();
