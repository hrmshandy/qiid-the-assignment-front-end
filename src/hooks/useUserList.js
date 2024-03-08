import { useContext } from "react";
import { UserListContext } from "@/context/UserListContext";

export const useUserList = () => useContext(UserListContext);
