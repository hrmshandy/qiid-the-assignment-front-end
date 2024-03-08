import { useState } from "react";
import { uuid } from "@/lib/utils";
import { Button, Input } from "./ui";
import { useUserList } from "@/hooks/useUserList";

const AddUser = () => {
  const { userList, setUserList } = useUserList();
  const [newUser, setNewUser] = useState("");

  const createUser = () => {
    if (!newUser) {
      alert("Please enter a user name");
      return;
    }

    const trimmedNewUser = newUser.trim();
    const existingUser = userList.find((user) => user.name === trimmedNewUser);

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
  };

  const addUserByEnter = (e) => {
    if (e.key === "Enter") {
      createUser();
    }
  };

  return (
    <div className="flex space-x-2">
      <Input
        type="text"
        placeholder="Enter New User"
        value={newUser}
        onChange={(e) => setNewUser(e.target.value)}
        onKeyDown={addUserByEnter}
      />
      <Button onClick={createUser}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="w-4 h-4"
        >
          <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
        </svg>
      </Button>
    </div>
  );
};

export default AddUser;
