import { useUserList } from "@/hooks/useUserList";
import UserCard from "./UserCard";

const UserList = () => {
  const { userList } = useUserList();

  return (
    <div className="mt-10 text-center">
      <h2 className="text-md font-bold">List of Users</h2>
      <ul className="mt-3 space-y-2">
        {userList.map((user) => (
          <li key={user.id}>
            <UserCard user={user} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
