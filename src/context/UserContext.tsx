import { createContext, useEffect, useState } from "react";

export type User = {
  id: string;
  userName: string;
  birthDate: string;
  gender: string;
  phoneNumber: string;
  email: string;
  website: string;
  postId: string;
};

export type UserContextType = {
  users: User[];
  addUser: (user: User) => void;
  updateUser: (user: User) => void;
  deleteUser: (id: string) => void;
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

  function updateUser(updateUser: User) {
    setUsers((previousUsers) =>
      previousUsers.map((user) =>
        user.id === updateUser.id ? updateUser : user,
      ),
    );
  }

  function deleteUser(id: string) {
    setUsers((previousUsers) => previousUsers.filter((user) => user.id !== id));
  }

  return (
    <UserContext.Provider value={{ updateUser, users, addUser, deleteUser }}>
      {children}
    </UserContext.Provider>
  );
}
