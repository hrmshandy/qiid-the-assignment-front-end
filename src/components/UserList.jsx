const UserList = ({ userList }) => {
  const checkFollow = (user, e) => {
    e.preventDefault();

    alert(
      `${user.name} has ${user.followers.length} followers and is following ${user.following.length} people`,
    );
  };

  return (
    <div className="mt-10 text-center">
      <h2 className="text-md font-bold">List of Users</h2>
      <ul className="mt-3 space-y-2">
        {userList.map((user) => (
          <li key={user.id}>
            <a
              href="#"
              onClick={(e) => checkFollow(user, e)}
              className="flex items-center bg-slate-200 hover:bg-slate-300 rounded px-3 py-1.5 text-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path
                  fillRule="evenodd"
                  d="M6.22 4.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06L8.94 8 6.22 5.28a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                />
              </svg>

              <span className="ml-2">{user.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
