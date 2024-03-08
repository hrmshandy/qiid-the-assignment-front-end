import { useState } from "react";
import { uuid } from "@/lib/utils";
import { Input } from "./ui";
import { useUserList } from "@/hooks/useUserList";

const AddUser = () => {
  const { userList, setUserList } = useUserList();
  const [newUser, setNewUser] = useState("");

  const addNewUser = (e) => {
    if (e.key === "Enter") {
      if (!newUser) {
        alert("Please enter a user name");
        return;
      }

      const trimmedNewUser = newUser.trim();
      const existingUser = userList.find(
        (user) => user.name === trimmedNewUser,
      );

      if (existingUser) {
        alert(`${newUser} is already a user.`);
        return;
      }

      const user = {
        id: uuid(),
        name: trimmedNewUser,
        followers: [],
        following: [],
      };
      setUserList((prevList) => [...prevList, user]);
      setNewUser("");
    }
  };

  return (
    <div>
      <Input
        type="text"
        placeholder="Enter New User"
        value={newUser}
        onChange={(e) => setNewUser(e.target.value)}
        onKeyDown={addNewUser}
      />
    </div>
  );
};

export default AddUser;
