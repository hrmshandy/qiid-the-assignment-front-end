import { useState } from "react";
import { Button, Input } from "./ui";

const Follow = ({ userList }) => {
  const [follower, setFollower] = useState("");
  const [followee, setFollowee] = useState("");

  const addFollow = () => {
    if (!follower || !followee) {
      alert("Please enter both users");
      return;
    }

    const trimmedFollower = follower.trim();
    const trimmedFollowee = followee.trim();

    const followerUser = userList.find((user) => user.name === trimmedFollower);
    const followeeUser = userList.find((user) => user.name === trimmedFollowee);

    if (!followerUser) {
      alert(`${trimmedFollower} is not yet a user.`);
      return;
    }

    if (!followeeUser) {
      alert(`${trimmedFollowee} is not yet a user.`);
      return;
    }

    if (trimmedFollower === trimmedFollowee) {
      alert(`${trimmedFollowee} cannot follow themselves`);
      return;
    }

    // Check if the follow relationship already exists
    if (followerUser.following.includes(followeeUser)) {
      alert(`${trimmedFollower} is already following ${trimmedFollowee}`);
      return;
    }

    // Add follow relationship
    followerUser.following.push(followeeUser);
    followeeUser.followers.push(followerUser);

    setFollower("");
    setFollowee("");
  };

  return (
    <div className="flex flex-col items-center">
      <Input
        type="text"
        name="follower"
        onChange={(e) => setFollower(e.target.value)}
        value={follower}
        placeholder="Enter user to follow"
      />
      <span className="whitespace-nowrap text-sm py-2">will now follow</span>
      <Input
        type="text"
        name="followee"
        onChange={(e) => setFollowee(e.target.value)}
        value={followee}
        placeholder="Enter user to be followed"
      />
      <Button type="button" onClick={addFollow} className="w-full mt-4">
        Submit
      </Button>
    </div>
  );
};

export default Follow;
