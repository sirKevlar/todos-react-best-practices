import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { User } from "../types/types";

export const useUser = () => {
  const { user, setUser } = useContext(AuthContext);

  const addUser = (user: User) => {
    setUser(user);
  };

  const removeUser = () => {
    setUser(null);
  };

  return { user, addUser, removeUser };
};