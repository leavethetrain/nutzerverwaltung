import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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
  const [users, setUsers] = useState<User[]>(() => {
    const saveUser = localStorage.getItem("users");
    return saveUser ? JSON.parse(saveUser) : [];
  });

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  function addUser(user: User) {
    setUsers((previousUsers) => [...previousUsers, user]);
  }

  return (
    <UserContext.Provider value={{ users, addUser }}>
      {children}
    </UserContext.Provider>
  );
}
