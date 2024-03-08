import { useState, useMemo } from "react";
import { Button, Input } from "./ui";
import { useUserList } from "@/hooks/useUserList";

const Follow = () => {
  const { userList, setUserList } = useUserList();
  const [follower, setFollower] = useState("");
  const [followee, setFollowee] = useState("");

  const indicesMemo = useMemo(() => {
    const trimmedFollower = follower.trim();
    const trimmedFollowee = followee.trim();
    const followerIndex = userList.findIndex(
      (user) => user.name === trimmedFollower,
    );
    const followeeIndex = userList.findIndex(
      (user) => user.name === trimmedFollowee,
    );
    return { followerIndex, followeeIndex };
  }, [userList, follower, followee]);

  const addFollow = () => {
    if (!follower || !followee) {
      alert("Please enter both users");
      return;
    }

    const { followerIndex, followeeIndex } = indicesMemo;

    const followerUser = userList[followerIndex];
    const followeeUser = userList[followeeIndex];

    if (!followerUser) {
      alert(`${follower} is not yet a user.`);
      return;
    }

    if (!followeeUser) {
      alert(`${followee} is not yet a user.`);
      return;
    }

    if (follower === followee) {
      alert(`${followee} cannot follow themselves`);
      return;
    }

    // Check if the follow relationship already exists
    if (followerUser.following.includes(followeeUser)) {
      alert(`${follower} is already following ${followee}`);
      return;
    }

    // update user list
    const updatedUserList = userList.map((user, index) => {
      if (index === followerIndex) {
        return { ...user, following: [...user.following, followeeUser] };
      } else if (index === followeeIndex) {
        return { ...user, followers: [...user.followers, followerUser] };
      }
      return user;
    });

    setUserList(updatedUserList);

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
