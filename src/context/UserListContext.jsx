import { createContext, useMemo, useState } from "react";

const defaultValue = {
  userList: [],
};

const UserListContext = createContext(defaultValue.userList);

const UserListProvider = ({ children }) => {
  const [userList, setUserList] = useState(defaultValue.userList);

  const values = useMemo(
    () => ({ userList, setUserList }),
    [userList, setUserList],
  );
  return (
    <UserListContext.Provider value={values}>
      {children}
    </UserListContext.Provider>
  );
};

export { UserListContext, UserListProvider };
