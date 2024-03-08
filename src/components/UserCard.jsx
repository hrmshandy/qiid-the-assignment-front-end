import { getInitial } from "../lib/utils";

const UserCard = ({ user }) => {
  const checkFollow = (user, e) => {
    e.preventDefault();

    alert(
      `${user.name} has ${user.followers.length} followers and is following ${user.following.length} people`,
    );
  };

  return (
    <a
      href="#"
      onClick={(e) => checkFollow(user, e)}
      className="flex items-center justify-between bg-slate-200 hover:bg-slate-300 rounded px-3 py-1.5 text-sm"
    >
      <div className="flex items-center">
        <div className="w-7 h-7 rounded-full bg-blue-300 text-slate-200 flex items-center justify-center font-bold text-lg p-1">
          {getInitial(user.name)}
        </div>
        <span className="ml-2">{user.name}</span>
      </div>
      <div className="text-xs flex items-center space-x-4">
        <div>
          <span className="font-bold text-sm">{user.followers.length}</span>{" "}
          followers
        </div>
        <div>
          <span className="font-bold text-sm">{user.following.length}</span>{" "}
          following
        </div>
      </div>
    </a>
  );
};

export default UserCard;
