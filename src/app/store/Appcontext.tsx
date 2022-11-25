import { createContext, useState } from "react";

export interface Icontext {
  searchValue: string;
  setSearchValue: (store: string) => void;
  userDatas: Inewuser;
  setUserDatas: (userDatas: Inewuser) => void;
}

export interface Inewuser {
  email: string;
  password: string;
  firstname: string;
  lastname: string;
  city: string;
  postalCode: string;
  avatar: string;
  birthday: string;
}

export const MyContext = createContext<Icontext | null>(null);

export default function Appcontext({ children }: any) {
  const [searchValue, setSearchValue] = useState<string>("");
  const [userDatas, setUserDatas] = useState<Inewuser>({
    email: "",
    password: "",
    firstname: "",
    lastname: "",
    city: "",
    postalCode: "",
    avatar: "",
    birthday: "",
  });
  return (
    <MyContext.Provider
      value={{ searchValue, setSearchValue, userDatas, setUserDatas }}
    >
      {children}
    </MyContext.Provider>
  );
}
