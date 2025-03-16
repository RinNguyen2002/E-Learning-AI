"use client";

import { useAtom } from "jotai";
import { userAtom } from "@/store/authStore"; 

const Profile = () => {
  const [user] = useAtom(userAtom);

  return (
    <div>
      {user ? <p>Welcome, {user.username}!</p> : <p>Please log in.</p>}
    </div>
  );
};

export default Profile;
