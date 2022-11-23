import { createContext, useState } from "react";

export interface Icontext {
  store: Istore;
  setStore: (store: Istore) => void;
}

export interface Istore {
  theme: string;
  isuserauth: boolean;
}

export const MyContext = createContext<Icontext | null>(null);

export default function Appcontext({ children }: any) {
  const [store, setStore] = useState<Istore>({
    isuserauth: false,
    theme: "dark",
  });
  return (
    <MyContext.Provider value={{ store, setStore }}>
      {children}
    </MyContext.Provider>
  );
}
