import { createContext, useState } from "react";

export type User = {
  firstName: string;
  lastName: string;
  birthDate: string;
  gender: string;
  phoneNumber: string;
  email: string;
};

export type UserContextType = {
  users: User[];
  addUser: (user: User) => void;
};

export const UserContext = createContext<UserContextType | null>(null);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [users, setUsers] = useState<User[]>([]);

  function addUser(user: User) {
    setUsers((previousUsers) => [...previousUsers, user]);
  }

  return (
    <UserContext.Provider value={{ users, addUser }}>
      {children}
    </UserContext.Provider>
  );
}
