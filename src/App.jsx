/* 
* Problem Statement
--Write a functional component to display an input field allowing the user to enter a name. When the user submits, the name should be added to a list of names displayed below the input field. Below the list, render two input fields to allow the user to enter two names, and when the user submits, the first name should follow the second name. In other words, the second name should be added to the first name’s following and the first name should be added to the second name’s followers.
-- Show an alert message on clicking the users in the list displaying their followers and following
--Be sure to handle edge cases, like what to do if the user attempts to make a person follow a person that they already follow, or follow themselves, etc.
--Please use reference from public folder

* Write clean and well-structured code with appropriate comments and meaningful variable names.

* Good Luck
*/
import { UserListProvider } from "./context/UserListContext";
import UserList from "./components/UserList";
import Follow from "./components/Follow";
import AddUser from "./components/AddUser";

import "./styles.css";

const App = () => {
  return (
    <UserListProvider>
      <div className="py-10 max-w-xs mx-auto">
        <h2 className="text-xl font-bold text-center mb-6">
          Follow Unfollow Assignment
        </h2>

        <AddUser />

        <UserList />

        <hr className="mt-12 mb-6 border-slate-200" />

        <Follow />
      </div>
    </UserListProvider>
  );
};

export default App;
